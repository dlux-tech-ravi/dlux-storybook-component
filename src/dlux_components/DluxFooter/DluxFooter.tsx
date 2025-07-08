// components/DluxFooter.tsx
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface FooterLinkItem {
  label: string;
  url: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLinkItem[];
}

interface SocialIcon {
  label: string;
  icon: React.ReactNode;
  url: string;
}

interface DluxFooterProps {
  logoText?: string;
  logoImageUrl?: string;
  showLogoText?: boolean;
  description?: string;
  socialIcons?: SocialIcon[];

  column2: FooterColumn;
  column3?: FooterColumn;
  column4?: FooterColumn;

  showQuickLinks?: boolean;
  showFourthColumn?: boolean;

  headingFontSize?: string;
  linkFontSize?: string;
  linkHoverColor?: string;

  backgroundColor?: string;
  backgroundImageUrl?: string;
  useGradientBackground?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  gradientDirection?: string; // e.g. 'to right', 'to bottom', 'circle'
  backgroundBlendMode?: string; // e.g. 'overlay', 'multiply'
  backdropBlur?: boolean;

  textColor?: string;
  headingColor?: string;

  copyrightText: string;
  legalLinks?: FooterLinkItem[];

  paddingY?: string;
  paddingX?: string;
  borderColor?: string;
  borderTop?: boolean;
  shadow?: string;
}

export const DluxFooter: React.FC<DluxFooterProps> = ({
  logoText,
  logoImageUrl,
  showLogoText = true,
  description,
  socialIcons = [],
  column2,
  column3,
  column4,
  showQuickLinks = false,
  showFourthColumn = false,
  headingFontSize = 'text-lg',
  linkFontSize = 'text-sm',
  linkHoverColor = 'hover:text-blue-600',
  backgroundColor = '#111827',
  backgroundImageUrl,
  useGradientBackground = false,
  gradientFrom = '#111827',
  gradientTo = '#1f2937',
  gradientDirection = 'to right',
  backgroundBlendMode,
  backdropBlur = false,
  textColor = '#ffffff',
  headingColor = '#ffffff',
  copyrightText,
  legalLinks = [],
  paddingY = 'py-10',
  paddingX = 'px-6',
  borderColor = 'border-white/20',
  borderTop = true,
  shadow = ''
}) => {
  const activeColumns = [
    true,
    true,
    showQuickLinks,
    showFourthColumn
  ].filter(Boolean).length;

  const backgroundStyle: React.CSSProperties = {
    color: textColor,
    backgroundColor,
    ...(useGradientBackground && {
      backgroundImage: `linear-gradient(${gradientDirection}, ${gradientFrom}, ${gradientTo})`
    }),
    ...(backgroundImageUrl && {
      backgroundImage: useGradientBackground
        ? `linear-gradient(${gradientDirection}, ${gradientFrom}, ${gradientTo}), url(${backgroundImageUrl})`
        : `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }),
    ...(backgroundBlendMode && { backgroundBlendMode })
  };

  return (
    <footer
      className={clsx(
        'w-full',
        paddingY,
        paddingX,
        textColor,
        shadow,
        backdropBlur && 'backdrop-blur-sm'
      )}
      style={backgroundStyle}
    >
      <div className={clsx(
        'max-w-7xl mx-auto grid gap-8',
        activeColumns === 2 && 'grid-cols-1 sm:grid-cols-2',
        activeColumns === 3 && 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
        activeColumns === 4 && 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
      )}>
        <div>
          {logoImageUrl ? (
            <>
              <Image src={logoImageUrl} alt="Logo" width={120} height={40} className="mb-4" />
              {showLogoText && logoText && (
                <h2 className={clsx('font-bold', headingFontSize)} style={{ color: headingColor }}>{logoText}</h2>
              )}
            </>
          ) : (
            logoText && <h2 className={clsx('font-bold', headingFontSize)} style={{ color: headingColor }}>{logoText}</h2>
          )}
          <p className="mt-2 text-sm">{description}</p>

          {socialIcons.length > 0 && (
            <div className="flex gap-4 mt-4">
              {socialIcons.map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" title={item.label}>
                  {item.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className={clsx('mb-3 font-semibold', headingFontSize)} style={{ color: headingColor }}>{column2.heading}</h3>
          <ul className="space-y-2">
            {column2.links.map((link, index) => (
              <li key={index}>
                <a className={clsx('transition-colors', linkFontSize, linkHoverColor)} href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {showQuickLinks && column3 && (
          <div>
            <h3 className={clsx('mb-3 font-semibold', headingFontSize)} style={{ color: headingColor }}>{column3.heading}</h3>
            <ul className="space-y-2">
              {column3.links.map((link, index) => (
                <li key={index}>
                  <a className={clsx('transition-colors', linkFontSize, linkHoverColor)} href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showFourthColumn && column4 && (
          <div>
            <h3 className={clsx('mb-3 font-semibold', headingFontSize)} style={{ color: headingColor }}>{column4.heading}</h3>
            <ul className="space-y-2">
              {column4.links.map((link, index) => (
                <li key={index}>
                  <a className={clsx('transition-colors', linkFontSize, linkHoverColor)} href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className={clsx(
        'mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs',
        borderTop && `border-t ${borderColor}`,
        'pt-6'
      )}>
        <span>{copyrightText}</span>
        <div className="flex gap-4">
          {legalLinks.map((link, index) => (
            <a key={index} href={link.url} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
