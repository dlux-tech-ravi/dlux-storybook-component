import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DluxFooter } from './DluxFooter';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const meta: Meta<typeof DluxFooter> = {
  title: 'Components/DluxFooter',
  component: DluxFooter,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#111827' },
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f3f4f6' },
      ],
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    headingColor: { control: 'color' },
    gradientFrom: { control: 'color' },
    gradientTo: { control: 'color' },
    gradientDirection: {
      control: 'text',
      description: 'e.g. to right, to bottom, circle',
    },
    backgroundBlendMode: {
      control: 'select',
      options: [
        '',
        'overlay',
        'multiply',
        'screen',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
      ],
    },
    useGradientBackground: { control: 'boolean' },
    backdropBlur: { control: 'boolean' },

    headingFontSize: {
      control: 'select',
      options: ['text-base', 'text-lg', 'text-xl', 'text-2xl'],
    },
    linkFontSize: {
      control: 'select',
      options: ['text-sm', 'text-base', 'text-lg'],
    },
    linkHoverColor: {
      control: 'text',
      description: 'Tailwind class (e.g. hover:text-blue-400)',
    },

    showQuickLinks: { control: 'boolean' },
    showFourthColumn: { control: 'boolean' },
    showLogoText: { control: 'boolean' },

    paddingY: {
      control: 'select',
      options: ['py-4', 'py-6', 'py-8', 'py-10', 'py-12', 'py-16'],
    },
    paddingX: {
      control: 'select',
      options: ['px-4', 'px-6', 'px-8', 'px-10', 'px-12'],
    },
    borderTop: { control: 'boolean' },
    borderColor: {
      control: 'text',
      description: 'Tailwind border color class (e.g. border-gray-200)',
    },
    shadow: {
      control: 'select',
      options: ['', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DluxFooter>;

const baseArgs = {
  logoText: 'DLUX',
  showLogoText: false,
  logoImageUrl: 'https://images.ctfassets.net/pj0maraabon4/Q6PwYeP5BySxbfN7iGa7J/7aed2e5efb07f0ab6dfad0343f2ffcbd/logo_gif.gif',
  description: 'Sound Healing & Music Therapy Elementor Template Kit',
  socialIcons: [
    { label: 'Facebook', icon: <Facebook size={20} />, url: '#' },
    { label: 'Instagram', icon: <Instagram size={20} />, url: '#' },
    { label: 'YouTube', icon: <Youtube size={20} />, url: '#' },
  ],
  column2: {
    heading: 'Shop',
    links: [
      { label: 'Sound Baths', url: '#' },
      { label: 'Meditation', url: '#' },
      { label: 'Yoga Music', url: '#' },
    ],
  },
  column3: {
      heading: 'Quick Links',
      links: [
        { label: 'Retreats', url: '#' },
        { label: 'Workshops', url: '#' },
        { label: 'Events', url: '#' },
      ],
    },
    column4: {
      heading: 'Stay in Touch',
      links: [
        { label: 'Contact', url: '#' },
        { label: 'Newsletter', url: '#' },
      ],
    },
  copyrightText: '© 2025 DLUX. All rights reserved.',
  legalLinks: [
    { label: 'Privacy Policy', url: '#' },
    { label: 'Terms of Service', url: '#' },
  ],
  headingFontSize: 'text-lg',
  linkFontSize: 'text-sm',
  linkHoverColor: 'hover:text-pink-400',
  backgroundColor: '#111827',
  textColor: '#ffffff',
  headingColor: '#ffffff',
  paddingY: 'py-10',
  paddingX: 'px-6',
  borderTop: true,
  borderColor: 'border-white/20',
  shadow: '',
  useGradientBackground: false,
  gradientFrom: '#111827',
  gradientTo: '#1f2937',
  gradientDirection: 'to right',
  backgroundBlendMode: '',
  backdropBlur: false,
};

export const TwoColumn: Story = {
  args: {
    ...baseArgs,
    showQuickLinks: false,
    showFourthColumn: false,
  },
};

export const ThreeColumn: Story = {
  args: {
    ...baseArgs,
    showQuickLinks: true,
    showFourthColumn: false,
    column3: {
      heading: 'Quick Links',
      links: [
        { label: 'Retreats', url: '#' },
        { label: 'Workshops', url: '#' },
        { label: 'Events', url: '#' },
      ],
    },
  },
};

export const FourColumn: Story = {
  args: {
    ...baseArgs,
    showQuickLinks: true,
    showFourthColumn: true,
    column3: {
      heading: 'Quick Links',
      links: [
        { label: 'Retreats', url: '#' },
        { label: 'Workshops', url: '#' },
        { label: 'Events', url: '#' },
      ],
    },
    column4: {
      heading: 'Stay in Touch',
      links: [
        { label: 'Contact', url: '#' },
        { label: 'Newsletter', url: '#' },
      ],
    },
  },
};

export const GradientWithBlur: Story = {
  args: {
    ...FourColumn.args,
    useGradientBackground: true,
    gradientFrom: '#9333ea',
    gradientTo: '#f43f5e',
    gradientDirection: 'to bottom',
    backgroundBlendMode: 'overlay',
    backdropBlur: true,
    shadow: 'shadow-xl',
  },
};
