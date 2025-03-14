// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     persistSession: true, // Disable session persistence
//     storageKey: "supabase-auth",
//     storage: {
//       getItem: (key) => {
//         if (typeof window !== "undefined") {
//           return window.localStorage.getItem(key);
//         }
//         return null;
//       },
//       setItem: (key, value) => {
//         if (typeof window !== "undefined") {
//           window.localStorage.setItem(key, value);
//         }
//       },
//       removeItem: (key) => {
//         if (typeof window !== "undefined") {
//           window.localStorage.removeItem(key);
//         }
//       },
//     },
//   },
// });
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);