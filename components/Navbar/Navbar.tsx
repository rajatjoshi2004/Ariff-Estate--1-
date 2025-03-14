"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { IoNotificationsOutline } from "react-icons/io5";
import hamburger from "../../public/Images/hamburger.png";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  HomeIcon,
  Building2,
  Users,
  Crown,
  CreditCard,
  Search,
  Newspaper,
  Store,
  Clock,
  Building as BuildingIcon,
  ShoppingBag,
  UserCircle,
  ListPlus,
  Heart,
  Settings,
  LogOut,
  MessageSquare,
  Bell,
  Briefcase,
  History,
} from "lucide-react";

// Add these interfaces at the top of the file, after imports

interface MenuItem {
  name: string;
  href: string;
  icon: React.ElementType;
  onClick?: () => void;
}

interface Category {
  name: string;
  items: MenuItem[];
}

interface Dropdown {
  name: string;
  icon: React.ElementType;
  categories: Category[];
}

// Language translations
const translations = {
  en: {
    home: "Home",
    newDevelopment: "New Development",
    agentFinder: "Agent Finder",
    exclusive: "Exclusive",
    pricing: "Pricing",
    signIn: "Sign in",
    getStarted: "Get Started",
    explore: "Explore",
    services: "Services",
    properties: "Properties",
    resources: "Resources",
    findProperties: "Find Properties",
    newProjects: "New Projects",
    featuredListings: "Featured Listings",
    marketplace: "Marketplace",
    myProfile: "My Profile",
    myListings: "My Listings",
    savedProperties: "Saved Properties",
    messages: "Messages",
    notifications: "Notifications",
    settings: "Settings",
    logout: "Logout",
    listProperty: "List Property",
    manageListings: "Manage Listings",
    viewSaved: "View Saved",
    myDashboard: "My Dashboard",
    inbox: "Inbox",
    transactions: "Transactions",
  },
  am: {
    home: "ቤት",
    newDevelopment: "አዲስ እድገት",
    agentFinder: "ወኪል ፈላጊ",
    exclusive: "የተለየ",
    pricing: "ዋጋ አወሳሰን",
    signIn: "ግባ",
    getStarted: "ጀምር",
    explore: "አስስ",
    services: "አገልግሎቶች",
    properties: "ንብረቶች",
    resources: "ሀብቶች",
    findProperties: "ንብረቶችን ፈልግ",
    newProjects: "አዲስ ፕሮጀክቶች",
    featuredListings: "የተለዩ ዝርዝሮች",
    marketplace: "ገበያ ቦታ",
    myProfile: "የእኔ መገለጫ",
    myListings: "የእኔ ዝርዝሮች",
    savedProperties: "የተቀመጡ ንብረቶች",
    messages: "መልእክቶች",
    notifications: "ማሳወቂያዎች",
    settings: "ቅንብሮች",
    logout: "ውጣ",
    listProperty: "ንብረት ዝርዝር",
    manageListings: "ዝርዝሮችን ያስተዳድሩ",
    viewSaved: "የተቀመጡትን ይመልከቱ",
    myDashboard: "የእኔ ዳሽቦርድ",
    inbox: "የገቢ መልእክት",
    transactions: "ግብይቶች",
  },
};

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const t = translations[language as keyof typeof translations];
  const pathname = usePathname();
  const router = useRouter();
  console.log("isAuthenticated", isAuthenticated);

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    } else {
      router.push("/dashboard");
    }
  };

  const authenticatedMainLinks: MenuItem[] = [
    { name: t.home, href: "/", icon: HomeIcon },
    { name: "For Sale", href: "/properties/for-sale", icon: Building2 },
    { name: "For Rent", href: "/properties/for-rent", icon: Building2 },
    { name: t.myDashboard, href: "/dashboard", icon: Briefcase },
    { name: t.marketplace, href: "/marketplace", icon: Store },
  ];

  const unauthenticatedMainLinks: MenuItem[] = [
    { name: t.home, href: "/", icon: HomeIcon },
    { name: "For Sale", href: "/properties/for-sale", icon: Building2 },
    { name: "For Rent", href: "/properties/for-rent", icon: Building2 },
  ];


  const mainLinks = isAuthenticated
    ? authenticatedMainLinks
    : unauthenticatedMainLinks;

  const dropdowns: Record<string, Dropdown | null> = {
    explore: {
      name: t.explore,
      icon: Search,
      categories: [
        {
          name: "Properties",
          items: [
            { name: "Short Term", href: "/properties/short-term", icon: Clock },
            {
              name: "Commercial",
              href: "/properties/commercial",
              icon: ShoppingBag,
            },
          ],
        },
        {
          name: "Agents",
          items: [
            { name: "Find Agent", href: "/agent-finder", icon: Users },
            { name: "Top Agents", href: "/top-agents", icon: Crown },
            {
              name: "Become an Agent",
              href: "/become-agent",
              icon: UserCircle,
            },
          ],
        },
        {
          name: "New Development",
          items: [
            {
              name: t.newDevelopment,
              href: "/new-development",
              icon: BuildingIcon,
            },
            { name: t.exclusive, href: "/exclusive", icon: Crown },
          ],
        },
        {
          name: "Services",
          items: [
            { name: t.marketplace, href: "/marketplace", icon: Store },
            { name: t.pricing, href: "/pricing", icon: CreditCard },
            { name: t.resources, href: "/resources", icon: Newspaper },
          ],
        },
      ],
    },
    profile: isAuthenticated
      ? {
        name: user?.name || "",
        icon: UserCircle,
        categories: [
          {
            name: "Account",
            items: [
              { name: t.myProfile, href: "/profile", icon: UserCircle },
              { name: t.myListings, href: "/my-listings", icon: ListPlus },
              { name: t.savedProperties, href: "/saved", icon: Heart },
              { name: t.messages, href: "/messages", icon: MessageSquare },
              { name: t.notifications, href: "/notifications", icon: Bell },
            ],
          },
          {
            name: "Quick Actions",
            items: [
              {
                name: t.listProperty,
                href: "/list-property",
                icon: ListPlus,
              },
              {
                name: t.manageListings,
                href: "/manage-listings",
                icon: Briefcase,
              },
              { name: t.transactions, href: "/transactions", icon: History },
            ],
          },
          {
            name: "Settings",
            items: [
              { name: t.settings, href: "/settings", icon: Settings },
              {
                name: t.logout,
                href: "#",
                icon: LogOut,
                onClick: () => {
                  logout();
                  router.push("/");
                },
              },
            ],
          },
        ],
      }
      : null,
  };

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  return (
    <>
      <div className="w-full fixed top-0 z-50 px-4 sm:px-6 py-4">
        <div className="max-w-[1400px] mx-auto backdrop-blur-md bg-white/75 rounded-2xl px-4 sm:px-8 py-3.5 shadow-lg">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="font-Sansation text-[20px] sm:text-[22px] text-[#222222]">
                Ariff Location
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-grow justify-center">
              <ul className="font-Sansation flex items-center gap-4 lg:gap-8">
                {/* Main Links */}
                {mainLinks.map((item, i) => (
                  <NavLink
                    key={i}
                    item={item}
                    isActive={pathname === item.href}
                  />
                ))}

                {/* Dropdowns */}
                {Object.entries(dropdowns).map(([key, dropdown]) => {
                  if (!dropdown) return null;
                  return (
                    <div
                      key={key}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-2 text-[#454545] hover:text-[#1DA599] transition-all duration-300 text-[14px] lg:text-[15px] tracking-wide py-2">
                        <dropdown.icon className="w-4 h-4" />
                        {dropdown.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      <div
                        className={`absolute top-full -left-4 mt-2 w-[280px] md:w-[320px] bg-white rounded-xl shadow-lg transition-all duration-200 max-h-[calc(100vh-100px)] overflow-y-auto ${activeDropdown === key
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                          }`}
                      >
                        <div className="p-3">
                          {dropdown.categories.map((category, i) => (
                            <div key={i} className="mb-4 last:mb-0">
                              <div className="text-[13px] font-semibold text-[#1DA599] px-3 mb-2 sticky top-0 bg-white py-1">
                                {category.name}
                              </div>
                              <div className="grid grid-cols-1 gap-1 pl-2">
                                {category.items.map((item, j) => (
                                  <Link
                                    key={j}
                                    href={item.href}
                                    onClick={item.onClick}
                                    className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#454545] hover:text-[#1DA599] hover:bg-[#F8FDFC] rounded-lg transition-all duration-200 relative before:absolute before:left-1 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1DA599] before:opacity-0 hover:before:opacity-100 before:transition-opacity whitespace-nowrap"
                                  >
                                    <item.icon className="w-4 h-4 flex-shrink-0" />
                                    <span>{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>

            {/* Right side section */}
            <div className="hidden md:flex items-center gap-4 lg:gap-7 ml-4">
              <button
                onClick={handleLanguageToggle}
                className="flex items-center gap-1.5 text-[#454545] hover:text-[#1DA599] transition-all duration-300"
              >
                <div className="relative">
                  <TbWorld className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-[#1DA599]" />
                  <span className="absolute -top-1 -right-1 text-[10px] font-Sansation bg-white rounded-full px-1 shadow-sm">
                    {language.toUpperCase()}
                  </span>
                </div>
              </button>

              {isAuthenticated ? (
                <Link
                  href="/notifications"
                  className="text-[#454545] hover:text-[#1DA599] transition-all duration-300 relative"
                >
                  <IoNotificationsOutline className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="text-[#454545] hover:text-[#1DA599] transition-all duration-300 text-[13px] lg:text-[15px] font-Sansation whitespace-nowrap"
                  >
                    {t.signIn}
                  </Link>
                  <Button
                    onClick={handleGetStarted}
                    className="bg-[#1DA599] hover:bg-[#18877e] font-Sansation rounded-xl px-3 lg:px-6 py-2 text-[13px] lg:text-[15px] tracking-wide transition-all duration-300 whitespace-nowrap"
                  >
                    {t.getStarted}
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setMobileNav(!mobileNav)}
                className="w-10 h-10 flex items-center justify-center"
              >
                {mobileNav ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <Image
                    src={hamburger}
                    alt="menu"
                    className="w-6 h-6 object-contain"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-4 top-24 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300 transform ${mobileNav
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0 pointer-events-none"
            }`}
        >
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              {/* Main Links */}
              {mainLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMobileNav(false)}
                  className={`flex items-center gap-3 text-[15px] font-Sansation ${pathname === item.href ? "text-[#1DA599]" : "text-[#454545]"
                    } hover:text-[#1DA599] transition-all duration-200`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}

              {/* Mobile Dropdowns */}
              {Object.entries(dropdowns).map(([key, dropdown]) => {
                if (!dropdown) return null;
                return (
                  <div key={key} className="space-y-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === key ? null : key)
                      }
                      className="flex items-center justify-between w-full text-[15px] font-Sansation text-[#454545] hover:text-[#1DA599] transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <dropdown.icon className="w-5 h-5" />
                        {dropdown.name}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`pl-8 space-y-5 transition-all duration-200 max-h-[60vh] overflow-y-auto ${activeDropdown === key ? "block" : "hidden"
                        }`}
                    >
                      {dropdown.categories.map((category, i) => (
                        <div key={i}>
                          <div className="text-[13px] font-semibold text-[#1DA599] mb-2">
                            {category.name}
                          </div>
                          <div className="space-y-3 pl-3 border-l-2 border-[#E5F5F3]">
                            {category.items.map((item, j) => (
                              <Link
                                key={j}
                                href={item.href}
                                onClick={(e) => {
                                  if (item.onClick) {
                                    e.preventDefault();
                                    item.onClick();
                                  }
                                  setMobileNav(false);
                                }}
                                className="flex items-center gap-3 text-[14px] text-[#454545] hover:text-[#1DA599] transition-all duration-200 relative before:absolute before:left-[-17px] before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1DA599] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                              >
                                <item.icon className="w-4 h-4" />
                                <span className="truncate">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Bottom Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <button
                  onClick={handleLanguageToggle}
                  className="flex items-center gap-1.5 text-[#454545] hover:text-[#1DA599] transition-all duration-300"
                >
                  <div className="relative">
                    <TbWorld className="w-[22px] h-[22px] text-[#1DA599]" />
                    <span className="absolute -top-1 -right-1 text-[10px] font-Sansation bg-white rounded-full px-1 shadow-sm">
                      {language.toUpperCase()}
                    </span>
                  </div>
                </button>
                {isAuthenticated ? (
                  <Link
                    href="/notifications"
                    className="text-[#454545] hover:text-[#1DA599] transition-all duration-300 relative"
                  >
                    <IoNotificationsOutline className="w-[22px] h-[22px]" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                  </Link>
                ) : (
                  <button className="text-[#454545] hover:text-[#1DA599] transition-all duration-300">
                    <IoNotificationsOutline className="w-[22px] h-[22px]" />
                  </button>
                )}
              </div>
              {!isAuthenticated && (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/sign-in"
                    className="text-center text-[#454545] hover:text-[#1DA599] transition-all duration-300 text-[15px] font-Sansation"
                    onClick={() => setMobileNav(false)}
                  >
                    {t.signIn}
                  </Link>
                  <Button
                    className="w-full bg-[#1DA599] hover:bg-[#18877e] font-Sansation rounded-xl py-2 text-[15px] tracking-wide"
                    onClick={() => {
                      handleGetStarted();
                      setMobileNav(false);
                    }}
                  >
                    {t.getStarted}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[88px]" />
    </>
  );
};

// NavLink component for consistent styling
interface NavLinkProps {
  item: MenuItem;
  isActive: boolean;
}

const NavLink = ({ item, isActive }: NavLinkProps) => {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className={`${isActive ? "text-[#1DA599]" : "text-[#454545]"
        } hover:text-[#1DA599] transition-all duration-300 text-[14px] lg:text-[15px] tracking-wide relative group whitespace-nowrap flex items-center gap-2`}
    >
      <Icon className="w-4 h-4" />
      {item.name}
      <span
        className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#1DA599] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
      />
    </Link>
  );
};

export default Navbar;
