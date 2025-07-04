import React, { useState } from 'react';
import classNames from 'classnames';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface DluxButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
  showIcon?: boolean;
  iconName?: keyof typeof Icons;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
}

export const DluxButton: React.FC<DluxButtonProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
  borderRadius = '0.5rem',
  showIcon = false,
  iconName,
  iconPosition = 'left',
  onClick,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const Icon: LucideIcon | null = iconName ? Icons[iconName] : null;

  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-200 ease-in-out focus:outline-none';

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-gray-600 text-gray-700 bg-transparent hover:bg-gray-100',
  };

  const combinedStyles = classNames(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    {
      'w-full': fullWidth,
      'opacity-50 cursor-not-allowed pointer-events-none': disabled,
    }
  );

  const styleOverride = {
    backgroundColor: isHovering ? hoverBgColor || bgColor : bgColor,
    color: isHovering ? hoverTextColor || textColor : textColor,
    borderRadius,
  };

  return (
    <button
      className={combinedStyles}
      style={styleOverride}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {showIcon && Icon && iconPosition === 'left' && (
        <Icon size={18} className="mr-2" />
      )}
      <span>{label}</span>
      {showIcon && Icon && iconPosition === 'right' && (
        <Icon size={18} className="ml-2" />
      )}
    </button>
  );
};
