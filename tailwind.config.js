const globalStyles = ({ addBase, config }) => {
	addBase({
		body: {
			overflowX: 'hidden',
			fontFamily: config('theme.fontFamily.body'),
			fontWeight: config('theme.fontWeight.normal'),
			fontSize: config('theme.fontSize.md'),
			'@screen md': {
				fontSize: config('theme.fontSize.md_dsktp'),
			},
		},
		a: {
			color: config('theme.textColor.primary'),
			textDecoration: 'none',
			transition: '0.2s ease',
		},
		'a:hover': {
			color: config('theme.textColor.grey-500'),
		},
		p: {
			marginBottom: config('theme.margin.3'),
			lineHeight: config('theme.lineHeight.normal'),
		},
		'strong, b': {
			fontWeight: config('theme.fontWeight.bold'),
		},
		'h1, h2, h3, h4, h5, h6': {
			fontFamily: config('theme.fontFamily.display'),
			color: config('theme.textColor.black'),
			fontWeight: config('theme.fontWeight.medium'),
		},

		h1: {
			fontSize: config('theme.fontSize.h1'),
			lineHeight: config('theme.lineHeight.h1'),
			'@screen md': {
				fontSize: config('theme.fontSize.h1_dsktp'),
				lineHeight: config('theme.lineHeight.h1_dsktp'),
			},
		},
		h2: {
			fontSize: config('theme.fontSize.h2'),
			lineHeight: config('theme.lineHeight.h2'),

			'@screen md': {
				fontSize: config('theme.fontSize.h2_dsktp'),
				lineHeight: config('theme.lineHeight.h2_dsktp'),
			},
		},
		h3: {
			fontSize: config('theme.fontSize.h3'),
			lineHeight: config('theme.lineHeight.h3'),

			'@screen md': {
				fontSize: config('theme.fontSize.h3_dsktp'),
				lineHeight: config('theme.lineHeight.h3_dsktp'),
			},
		},
		h4: {
			fontSize: config('theme.fontSize.h4'),
			lineHeight: config('theme.lineHeight.h4'),

			'@screen md': {
				fontSize: config('theme.fontSize.h4_dsktp'),
				lineHeight: config('theme.lineHeight.h4_dsktp'),
			},
		},
		h5: {
			fontSize: config('theme.fontSize.h5'),
			lineHeight: config('theme.lineHeight.h5'),
			'@screen md': {
				fontSize: config('theme.fontSize.h5_dsktp'),
				lineHeight: config('theme.lineHeight.h5_dsktp'),
			},
		},
		h6: {
			fontSize: config('theme.fontSize.h6'),
			lineHeight: config('theme.lineHeight.h6'),
			'@screen md': {
				fontSize: config('theme.fontSize.h6_dsktp'),
				lineHeight: config('theme.lineHeight.h6_dsktp'),
			},
		},

		'ol, ul': { paddingLeft: 0 },
		ol: { listStyleType: 'none' },
		ul: { listStyleType: 'none' },
	});
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
      colors: {
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          DEFAULT: "#000000",
        },

        seaweed: {
          50: "#F2F9FA",
          100: "#CCE8EA",
          200: "#99D1D5",
          300: "#66BABF",
          400: "#33A3AA",
          500: "#008C95",
          600: "#007077",
          700: "#005459",
          800: "#00464B",
          900: "#002A2D",
        },

        lightseaweed: {
          50: "#F9FCFC",
          100: "#E6F3F2",
          200: "#CEE7E6",
          300: "#B5DCD9",
          400: "#9DD0CD",
          500: "#84C4C0",
          600: "#77B0AD",
          700: "#5C8986",
          800: "#426260",
          900: "#283B3A",
        },
        darkteal: {
          50: "#F2F6F7",
          100: "#CCDCDE",
          200: "#99B9BD",
          300: "#66959B",
          400: "#33727A",
          500: "#004F59",
          600: "#004750",
          700: "#00373E",
          800: "#00282D",
          900: "#00181B",
        },
        onyx: {
          50: "#F5F6F6",
          100: "#D9DAD9",
          200: "#B2B4B4",
          300: "#8C8F8E",
          400: "#656969",
          500: "#3F4443",
          600: "#323636",
          700: "#262928",
          800: "#191B1B",
          900: "#0D0E0D",
        },
        grey: {
          50: "#F2F2F2",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#B9B9B9",
          400: "#999999",
          500: "#737373",
          600: "#5C5C5C",
          700: "#454545",
          800: "#2E2E2E",
          900: "#171717",
        },
        feedback: {
          error: "#AD0F0F",
          success: "#008816",
        },
        bordercolour: {
          borderprimary: "#00282D",
          bordersecondary: "rgba(0, 40, 45, 0.15)",
          borderinvert: "#FFF",
          borderaccent: "#008C95",
          bordersuccess: "#008816",
          bordererror: "#AD0F0F",
        },
        surface: {
          primary: "#FFFFFF",
          secondary: "#F2F2F2",
          tertiary: "#F2F6F7",
          invert: "#00282D",
          accent: "#84C4C0",
          accentsecondary: "#004F59",
          disabled: "#B9B9B9",
          error: "#AD0F0F",
          success: "#008816",
        },
             
      },
      fontFamily: {
			display: 'Inter, serif',
			body: 'Inter, sans-serif',
		},
		fontSize: {
			none: [pxToRem(0)],
			base: pxToRem(16),
			base_dsktp: pxToRem(18),
            
			display: pxToRem(40),
			h1: pxToRem(36),
			h2: pxToRem(32),
			h3: pxToRem(28),
			h4: pxToRem(24),
			h5: pxToRem(20),
			h6: pxToRem(18),
			eyebrow: pxToRem(12),

			xs: pxToRem(12),
			sm: pxToRem(14),
			md: pxToRem(16),
			lg: pxToRem(18),

			display_dsktp: pxToRem(80),
			h1_dsktp: pxToRem(56),
			h2_dsktp: pxToRem(48),
			h3_dsktp: pxToRem(40),
			h4_dsktp: pxToRem(32),
			h5_dsktp: pxToRem(24),
			h6_dsktp: pxToRem(20),
			eyebrow_dsktp: pxToRem(12),

			xs_dsktp: pxToRem(14),
			sm_dsktp: pxToRem(16),
			md_dsktp: pxToRem(18),
			lg_dsktp: pxToRem(20),
		},
		lineHeight: {
			display: pxToRem(44),
			h1: pxToRem(40),
			h2: pxToRem(40),
			h3: pxToRem(36),
			h4: pxToRem(32),
			h5: pxToRem(28),
			h6: pxToRem(26),
			eyebrow: pxToRem(20),
			base: pxToRem(24),
			xs: pxToRem(20),
			sm: pxToRem(24),
			md: pxToRem(26),
			lg: pxToRem(28),

			display_dsktp: pxToRem(72),
			h1_dsktp: pxToRem(60),
			h2_dsktp: pxToRem(48),
			h3_dsktp: pxToRem(44),
			h4_dsktp: pxToRem(36),
			h5_dsktp: pxToRem(32),
			h6_dsktp: pxToRem(28),
			eyebrow_dsktp: pxToRem(22),
			base_dsktp: pxToRem(26),
			xs_dsktp: pxToRem(22),
			sm_dsktp: pxToRem(24),
			md_dsktp: pxToRem(28),
			lg_dsktp: pxToRem(30),
		},
		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
		},
      SurfaceColor: (theme) => ({
        ...theme("colors"),
        primary: theme("colors.surface.primary"),
        secondary: theme("colors.surface.secondary"),
        tertiary: theme("colors.surface.tertiary"),
        invert: theme("colors.surface.invert"),
        accent: theme("colors.surface.accent"),
        accentsecondary: theme("colors.surface.accentsecondary"),
        disabled: theme("colors.surface.disabled"),
        error: theme("colors.surface.error"),
        success: theme("colors.surface.success"),
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        primary: theme("colors.darkteal.800"),
        secondary: theme("colors.onyx.400"),
        'primary-invert': theme("colors.surface.primary"),
        'secondary-invert': theme("colors.grey.100"),
        accent: theme("colors.seaweed.500"),
       'accent-secondary': theme("colors.darkteal.500"),
        link: theme("colors.darkteal.500"),
        'link-invert': theme("colors.surface.primary"),
        disabled: theme("colors.grey.300"),
        error: theme("colors.feedback.error"),
        success: theme("colors.feedback.success"),
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: theme("colors.bordercolour.borderprimary"),
        secondary: theme("colors.bordercolour.bordersecondary"),
        invert: theme("colors.bordercolour.borderinvert"),
        accent: theme("colors.bordercolour.borderaccent"),
        error: theme("colors.bordercolour.bordererror"),
        success: theme("colors.bordercolour.bordersuccess"),
      }),
    },
  extend: { 

   
			screens: {
				'sm': '640px',
				// => @media (min-width: 640px) { ... }
		  
				'md': '768px',
				// => @media (min-width: 768px) { ... }
		  
				'lg': '1024px',
				// => @media (min-width: 1024px) { ... }
		  
				'xl': '1280px',
				// => @media (min-width: 1280px) { ... }

				'xl-md': '1360px',
				// => @media (min-width: 1280px) { ... }
		  
				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			  }
		
  },
  plugins: [globalStyles],
};
function pxToRem(pixels, fontSize = 16) {
	return `${pixels / fontSize}rem`;
}