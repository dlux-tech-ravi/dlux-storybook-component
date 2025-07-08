// src/components/Header.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    bgColor: { control: "color" },
    textColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const defaultProps = {
  title: "DLUX",
  logoSrc: "https://placehold.co/100x40?text=Logo",
  bgColor: "#000000",
  textColor: "#ffffff",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Users", href: "/users" },
  { label: "Reports", href: "/reports" },
];

export const Default: Story = {
  args: {
    ...defaultProps,
    variant: "default",
    navItems,
  },
};

export const WithNav: Story = {
  args: {
    ...defaultProps,
    variant: "with-nav",
    navItems,
  },
};

export const WithSearch: Story = {
  args: {
    ...defaultProps,
    variant: "with-search",
  },
};

export const WithActions: Story = {
  args: {
    ...defaultProps,
    variant: "with-actions",
  },
};

export const WithSwitcher: Story = {
  args: {
    ...defaultProps,
    variant: "with-switcher",
  },
};

export const WithSideNav: Story = {
  args: {
    ...defaultProps,
    variant: "with-sidenav",
  },
};

export const WithUserInfo: Story = {
  args: {
    ...defaultProps,
    variant: "with-user-info",
  },
};

export const WithBreadcrumb: Story = {
  args: {
    ...defaultProps,
    variant: "with-breadcrumb",
  },
};

export const AuthHeader: Story = {
  args: {
    ...defaultProps,
    variant: "auth-header",
  },
};

export const Dashboard: Story = {
  args: {
    ...defaultProps,
    variant: "dashboard",
    navItems,
  },
};
