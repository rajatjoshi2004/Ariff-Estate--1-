// "use client";

// import { supabase } from "@/utils/supabase";
// import React, { createContext, useContext, useState, useEffect } from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: "buyer" | "seller" | "agent" | "admin";
//   avatar?: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (userData: User) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   isAuthenticated: false,
//   login: () => { },
//   logout: () => { },
// });

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // useEffect(() => {
//   //   // Check local storage for existing session
//   //   const storedUser = localStorage.getItem("user");
//   //   if (storedUser) {
//   //     const userData = JSON.parse(storedUser);
//   //     setUser(userData);
//   //     setIsAuthenticated(true);
//   //   }
//   // }, []);

//   useEffect(() => {
//     // Get initial session
//     const fetchSession = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       console.log('data!!!!!!!', data)
//       if (data.session) {
//         const supabaseUser = data.session.user;
//         setUser({
//           id: supabaseUser.id,
//           name: supabaseUser.user_metadata?.name || "User",
//           email: supabaseUser.email!,
//           role: supabaseUser.user_metadata?.role || "buyer",
//           avatar: supabaseUser.user_metadata?.avatar_url || undefined,
//         });
//         setIsAuthenticated(true);
//       } else if (error) {
//         console.error("Error fetching session:", error);
//       }
//     };

//     fetchSession()
//   })

//   const login = (userData: User) => {
//     setUser(userData);
//     setIsAuthenticated(true);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


"use client";
import Swal from "sweetalert2";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
interface User {
  id: string;
  name: string;
  email: string;
  role: "buyer" | "seller" | "agent" | "admin";
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  logout: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
        return;
      }

      if (data.session) {
        const supabaseUser = data.session.user;
        console.log(supabaseUser, "???????")
        setUser((prev) => ({
          ...prev,
          id: supabaseUser.id,
          name: supabaseUser.user_metadata.full_name || "User",
          email: supabaseUser.email!,
          role: supabaseUser.user_metadata?.role || "buyer",
          avatar: supabaseUser.user_metadata?.avatar_url || undefined,
        }));
        setIsAuthenticated(true);
      }
    };

    fetchSession();

    // Listen for auth state changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          setUser({
            id: session.user.id,
            name: session.user?.user_metadata?.full_name || "User",
            email: session.user.email!,
            role: session.user.user_metadata?.role || "buyer",
            avatar: session.user.user_metadata?.avatar_url || undefined,
          });
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setUser]);

  const logout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await supabase.auth.signOut();
          setUser(null);
          setIsAuthenticated(false);
          router.push("/sign-in");
          // Swal.fire("Logged Out!", "You have been logged out.", "success");
          toast.success("Logged out successfully! ");
          Cookies.remove("userEmail")
          localStorage.removeItem("supabaseSession");
          localStorage.removeItem("userEmail");
        } catch (error) {
          Swal.fire("Error", "Logout failed. Please try again.", "error");
        }
      }
    });
  };


  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

