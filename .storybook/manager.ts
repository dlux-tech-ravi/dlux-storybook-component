// .storybook/manager.ts
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const myTheme = create({
  base: 'light',
  brandTitle: 'My Design System',
  brandUrl: 'https://your-site.com',
  brandImage:
    '/DLUX-dark-logo.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme: myTheme,
});
