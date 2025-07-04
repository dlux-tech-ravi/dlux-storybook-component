// DluxLoader.tsx
'use client';

import React, { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import classNames from 'classnames';

export interface DluxLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  label?: string;
  variant?: 'inline' | 'overlay' | 'fullscreen';
  useCustomIcon?: boolean;
  iconName?: keyof typeof Icons;
  animationSpeed?: number;
  overlayBg?: string;
  loaderType?: 'spinner' | 'percentage';
  progress?: number;
  autoProgress?: boolean;
  duration?: number;
}

export const DluxLoader: React.FC<DluxLoaderProps> = ({
  size = 'md',
  color = '#3b82f6',
  label = '',
  variant = 'inline',
  useCustomIcon = false,
  iconName = 'LoaderCircle',
  animationSpeed = 1000,
  overlayBg = 'rgba(0,0,0,0.5)',
  loaderType = 'spinner',
  progress = 0,
  autoProgress = false,
  duration = 3000,
}) => {
  const iconSizeMap = {
    sm: 20,
    md: 32,
    lg: 48,
  };

  const iconSize = iconSizeMap[size];

  const maybeIcon = iconName ? Icons[iconName] : undefined;
  const LucideIcon =
    maybeIcon && typeof maybeIcon === 'object' && 'render' in maybeIcon
      ? (maybeIcon as unknown as React.ElementType)
      : Icons.LoaderCircle;

  const containerClasses = classNames('flex items-center justify-center', {
    'fixed inset-0 z-50': variant === 'fullscreen',
    'absolute inset-0 z-40': variant === 'overlay',
  });

  const containerStyle: React.CSSProperties = {
    backgroundColor:
      variant === 'overlay' || variant === 'fullscreen' ? overlayBg : undefined,
  };

  const iconStyle: React.CSSProperties = {
    animation: `spin ${animationSpeed}ms linear infinite`,
    color,
  };

  const percentageSize =
    size === 'lg' ? 'w-32 h-32' : size === 'sm' ? 'w-12 h-12' : 'w-20 h-20';

  const [internalProgress, setInternalProgress] = useState(0);

  useEffect(() => {
    if (loaderType === 'percentage' && autoProgress) {
      setInternalProgress(0);
      const steps = 100;
      const interval = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += 1;
        setInternalProgress(current);
        if (current >= 100) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [loaderType, autoProgress, duration]);

  const displayProgress = autoProgress ? internalProgress : progress;

  return (
    <div className={containerClasses} style={containerStyle}>
      <div className="flex flex-col items-center space-y-2">
        {loaderType === 'spinner' ? (
          useCustomIcon ? (
            <LucideIcon
              size={iconSize}
              style={iconStyle}
              className="pointer-events-none"
            />
          ) : (
            <div
              className="border-4 border-t-transparent border-solid rounded-full animate-spin"
              style={{
                width: iconSize,
                height: iconSize,
                borderColor: `${color} transparent transparent transparent`,
                animationDuration: `${animationSpeed}ms`,
              }}
            />
          )
        ) : (
          <div className={`relative ${percentageSize}`}>
            <svg
              className="transform rotate-[-90deg]"
              width="100%"
              height="100%"
              viewBox="0 0 36 36"
            >
              <path
                className="text-gray-200"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                className="text-blue-500"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeDasharray={`${displayProgress}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium" style={{ color }}>
                {Math.round(displayProgress)}%
              </span>
            </div>
          </div>
        )}
        {label && <span style={{ color }}>{label}</span>}
      </div>
    </div>
  );
};
