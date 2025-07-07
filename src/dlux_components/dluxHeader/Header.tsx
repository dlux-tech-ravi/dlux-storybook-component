import React from 'react';

export type NavItem = {
  label: string;
  href: string;
};

export type ActionButton = {
  label: string;
  onClick?: () => void;
};

export type HeaderType = 'default' | 'with-nav' | 'with-actions' | 'full';

export type HeaderProps = {
  title?: string;
  logoSrc?: string;
  navItems?: NavItem[];
  showSideNav?: boolean;
  showSwitcher?: boolean;
  showActions?: boolean;
  actions?: ActionButton[];
  showNotification?: boolean;
  notificationCount?: number;
  avatarUrl?: string;
  showSearch?: boolean;
  bgColor?: string;
  textColor?: string;
  headerType?: HeaderType;
};

export const Header: React.FC<HeaderProps> = ({
  title = 'DLUX App',
  logoSrc,
  navItems = [],
  showSideNav,
  showSwitcher,
  showActions,
  actions = [],
  showNotification,
  notificationCount = 0,
  avatarUrl,
  showSearch,
  bgColor = '#2563EB',
  textColor = '#FFFFFF',
  headerType = 'default',
}) => {
  // Controlled layout from headerType
  const isFull = headerType === 'full';
  const isNav = headerType === 'with-nav' || isFull;
  const isActions = headerType === 'with-actions' || isFull;

  // Final rendering checks
  const renderNav = navItems.length > 0 && isNav;
  const renderActions = showActions || isActions;
  const renderSideNav = isFull || showSideNav;
  const renderSwitcher = isFull || showSwitcher;
  const renderNotification = isFull || showNotification;
  const renderSearch = isFull || showSearch;

  return (
    <header
      className="w-full flex justify-between items-center flex-wrap p-4"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {renderSideNav && (
          <button className="text-xl" aria-label="Toggle Sidebar">
            ☰
          </button>
        )}

        {logoSrc ? (
          <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
        ) : (
          <h1 className="text-xl font-bold">{title}</h1>
        )}

        {renderNav && (
          <nav className="hidden md:flex ml-6 space-x-4">
            {navItems.map((item, idx) => (
              <a key={idx} href={item.href} className="hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        {renderSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded text-black"
          />
        )}

        {renderSwitcher && (
          <select className="text-black px-2 py-1 rounded">
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        )}

        {renderActions &&
          (actions.length > 0 ? (
            actions.map((btn, i) => (
              <button
                key={i}
                onClick={btn.onClick}
                className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
              >
                {btn.label}
              </button>
            ))
          ) : (
            <>
              <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
                Login
              </button>
              <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
                Signup
              </button>
            </>
          ))}

        {renderNotification && (
          <div className="relative">
            <span role="img" aria-label="bell">
              🔔
            </span>
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
                {notificationCount}
              </span>
            )}
          </div>
        )}

        {avatarUrl && (
          <img
            src={avatarUrl}
            alt="Avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
        )}
      </div>
    </header>
  );
};
