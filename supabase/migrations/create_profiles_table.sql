-- Create a table for user profiles
create table public.profiles (
    id uuid references auth.users on delete cascade primary key,
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

-- Create indexes for better query performance
create index profiles_full_name_idx on public.profiles (full_name);
create index profiles_account_type_idx on public.profiles (account_type);
create index profiles_verification_status_idx on public.profiles (verification_status);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
on public.profiles for select
using (true);

create policy "Users can insert their own profile"
on public.profiles for insert
with check (auth.uid() = id);

create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id);

-- Create a function to handle updating updated_at
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
    new.updated_at = timezone('utc'::text, now());
    return new;
end;
$$;

-- Create a trigger to automatically update updated_at
create trigger handle_updated_at
    before update on public.profiles
    for each row
    execute function public.handle_updated_at();

-- Create a function to automatically create a profile for new users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
    insert into public.profiles (id, full_name, display_name, email)
    values (
        new.id,
        new.raw_user_meta_data->>'full_name',
        new.raw_user_meta_data->>'full_name',
        new.email
    );
    return new;
end;
$$;

-- Create a trigger to automatically create a profile for new users
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user(); 