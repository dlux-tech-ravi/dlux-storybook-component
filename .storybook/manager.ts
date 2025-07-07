import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create"; // 👈 import create

addons.setConfig({
  theme: create({
    base: 'light',

    brandTitle: 'DLUX Storybook',
    brandUrl: 'http://localhost:6007/?path=/docs/',
    brandImage: './public/dlux-logo_gif.gif', // ✅ use public-relative URL (placed in public folder)
    brandTarget: '_self',
  }),
});
