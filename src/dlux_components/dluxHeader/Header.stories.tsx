import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    headerType: {
      control: 'select',
      options: ['default', 'with-nav', 'with-actions', 'full'],
      description: 'Layout preset that shows specific groups of header elements.',
    },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
    navItems: { control: 'object' },
    actions: { control: 'object' },
    logoSrc: { control: 'text' },
    avatarUrl: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A fully flexible and customizable header with selectable layout types.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const navList = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const actionList = [
  { label: 'Dashboard' },
  { label: 'Logout' },
];

export const Default: Story = {
  args: {
    title: 'DLUX App',
    headerType: 'default',
    bgColor: '#2563EB',
    textColor: '#FFFFFF',
  },
};

export const WithNav: Story = {
  args: {
    title: 'DLUX Navigation',
    headerType: 'with-nav',
    navItems: navList,
    bgColor: '#1E40AF',
  },
};

export const WithActions: Story = {
  args: {
    title: 'DLUX Actions',
    headerType: 'with-actions',
    actions: actionList,
    bgColor: '#4B5563',
  },
};

export const Full: Story = {
  args: {
    logoSrc: '/logo.png',
    navItems: navList,
    headerType: 'full',
    actions: actionList,
    avatarUrl: 'https://i.pravatar.cc/40',
    notificationCount: 3,
    bgColor: '#111827',
    textColor: '#FFFFFF',
  },
};
