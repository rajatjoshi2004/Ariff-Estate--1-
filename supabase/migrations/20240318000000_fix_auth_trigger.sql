-- Drop existing trigger and function if they exist
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user();

-- Ensure the profiles table exists with correct structure
create table if not exists public.profiles (
    id uuid references auth.users on delete cascade primary key,
    email text,
    full_name text,
    display_name text,
    avatar_url text,
    bio text,
    phone_number text,
    whatsapp text,
    telegram text,
    address text,
    city text,
    country text,
    profession text,
    company_name text,
    company_position text,
    company_address text,
    business_phone text,
    business_email text,
    website text,
    facebook_url text,
    twitter_url text,
    linkedin_url text,
    instagram_url text,
    preferred_language text default 'en',
    preferred_currency text default 'ETB',
    notification_settings jsonb default '{"email": true, "push": true, "sms": false}'::jsonb,
    account_type text default 'personal' check (account_type in ('personal', 'agent', 'agency', 'developer')),
    verification_status text default 'unverified' check (verification_status in ('unverified', 'pending', 'verified')),
    agent_license_number text,
    agent_license_expiry timestamp with time zone,
    total_listings int default 0,
    total_sales int default 0,
    total_views int default 0,
    rating decimal(3,2) default 0.00,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create the function to handle new user creation
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
    insert into public.profiles (
        id,
        email,
        full_name,
        display_name,
        preferred_language,
        preferred_currency,
        account_type,
        verification_status,
        notification_settings,
        created_at,
        updated_at
    ) values (
        new.id,
        new.email,
        coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
        coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
        'en',
        'ETB',
        'personal',
        'unverified',
        '{"email": true, "push": true, "sms": false}'::jsonb,
        now(),
        now()
    );
    return new;
exception
    when others then
        raise log 'Error creating profile for user %: %', new.id, sqlerrm;
        return new;
end;
$$;

-- Create the trigger
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user();

-- Create indexes for better query performance
create index if not exists profiles_email_idx on public.profiles(email);
create index if not exists profiles_account_type_idx on public.profiles(account_type);
create index if not exists profiles_verification_status_idx on public.profiles(verification_status);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
    on profiles for select
    using (true);

create policy "Users can insert their own profile"
    on profiles for insert
    with check (auth.uid() = id);

create policy "Users can update own profile"
    on profiles for update
    using (auth.uid() = id);

-- Grant necessary permissions
grant usage on schema public to authenticated, anon;
grant all on public.profiles to authenticated, anon; 