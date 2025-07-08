// src/components/Header.tsx
import React, { useState } from "react";

type HeaderVariant =
  | "default"
  | "with-nav"
  | "with-search"
  | "with-actions"
  | "with-switcher"
  | "with-sidenav"
  | "with-user-info"
  | "with-breadcrumb"
  | "auth-header"
  | "dashboard";

type NavItem = {
  label: string;
  href: string;
};

interface HeaderProps {
  variant?: HeaderVariant;
  title?: string;
  logoSrc?: string;
  navItems?: NavItem[];
  bgColor?: string;
  textColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  variant = "default",
  title = "DLUX",
  logoSrc,
  navItems = [],
  bgColor = "#000000",
  textColor = "#ffffff",
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const showNav = ["with-nav", "dashboard"].includes(variant) && navItems.length > 0;
  const showSearch = variant === "with-search";
  const showActions = variant === "with-actions";
  const showSwitcher = variant === "with-switcher";
  const showSideNav = variant === "with-sidenav";
  const showUserInfo = variant === "with-user-info";
  const showBreadcrumb = variant === "with-breadcrumb";
  const showLogin = variant === "auth-header";
  const isDashboard = variant === "dashboard";

  return (
    <header
      className="flex items-center justify-between px-6 py-4 shadow w-full relative"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        {logoSrc && <img src={logoSrc} alt="Logo" className="h-8 w-auto" />}
        {title && <h1 className="text-xl font-bold">{title}</h1>}
        {showBreadcrumb && (
          <div className="ml-4 text-sm opacity-70">Home / Page</div>
        )}
      </div>

      {/* Center Nav */}
      {showNav && (
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:underline text-sm"
              style={{ color: textColor }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {showSearch && (
          <input
            className="border px-2 py-1 rounded"
            placeholder="Search..."
            style={{ color: "#000" }}
          />
        )}
        {showSwitcher && <button className="text-sm">Switcher</button>}
        {showActions && <button className="text-sm">Action</button>}
        {showSideNav && <button className="text-xl">☰</button>}
        {showUserInfo && <span className="text-sm">Welcome, Soundar</span>}
        {showLogin && (
          <button className="bg-blue-600 text-white px-3 py-1 rounded">
            Login
          </button>
        )}

        {/* Avatar & Dropdown for dashboard */}
        {isDashboard && (
          <div className="relative">
            <img
              src="https://i.pravatar.cc/36"
              alt="Avatar"
              className="w-9 h-9 rounded-full cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-10">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
