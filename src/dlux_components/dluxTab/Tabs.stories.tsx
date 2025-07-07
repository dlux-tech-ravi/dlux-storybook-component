import React from 'react';
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Tabs, { Tab } from "./Tabs";
import { Info, Settings, Globe } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["underline", "boxed", "pills", "vertical", "icon", "segmented"],
    },
    tabBgColor: { control: "color" },
    tabTextColor: { control: "color" },
    activeTabTextColor: { control: "color" },
    activeTabBgColor: { control: "color" },
    contentBgColor: { control: "color" },
    fullWidthTabs: { control: "boolean" },
    showBottomBorder: { control: "boolean" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const sampleTabs: Tab[] = [
  {
    label: "Overview",
    content: <div className="text-sm text-gray-700">Welcome to the overview tab!</div>,
    icon: <Info size={16} />,
  },
  {
    label: "Settings",
    content: <div className="text-sm text-gray-700">Configure your preferences here.</div>,
    icon: <Settings size={16} />,
  },
  {
    label: "Global",
    content: <div className="text-sm text-gray-700">Explore global settings and info.</div>,
    icon: <Globe size={16} />,
  },
];

// Basic Variants
export const UnderlineTabs: Story = {
  args: {
    tabs: sampleTabs,
    variant: "underline",
  },
};

export const BoxedTabs: Story = {
  args: {
    tabs: sampleTabs,
    variant: "boxed",
  },
};

export const PillsTabs: Story = {
  args: {
    tabs: sampleTabs,
    variant: "pills",
  },
};

export const VerticalTabs: Story = {
  args: {
    tabs: sampleTabs,
    variant: "vertical",
    tabBgColor: "#f3f4f6",
    tabTextColor: "#374151",
    activeTabTextColor: "#1d4ed8",
    activeTabBgColor: "#bfdbfe",
    contentBgColor: "#ffffff",
  },
};

export const IconTabs: Story = {
  args: {
    tabs: sampleTabs,
    variant: "icon",
    fullWidthTabs: true,
    tabBgColor: "#e5e7eb",
    tabTextColor: "#4b5563",
    activeTabTextColor: "#ffffff",
    activeTabBgColor: "#8b5cf6",
    contentBgColor: "#ede9fe",
  },
};

export const SegmentedTabs: Story = {
  args: {
    tabs: sampleTabs,
    variant: "segmented",
    fullWidthTabs: true,
    tabBgColor: "#f9fafb",
    tabTextColor: "#6b7280",
    activeTabTextColor: "#ffffff",
    activeTabBgColor: "#10b981",
    contentBgColor: "#e0f2fe",
    showBottomBorder: false,
  },
};

// Colored Variants
export const ColoredUnderline: Story = {
  args: {
    tabs: sampleTabs,
    variant: "underline",
    tabBgColor: "#f9fafb",
    tabTextColor: "#6b7280",
    activeTabTextColor: "#ffffff",
    activeTabBgColor: "#3b82f6",
    contentBgColor: "#e0f2fe",
  },
};

export const ColoredBoxed: Story = {
  args: {
    tabs: sampleTabs,
    variant: "boxed",
    tabBgColor: "#f3f4f6",
    tabTextColor: "#374151",
    activeTabTextColor: "#ffffff",
    activeTabBgColor: "#10b981",
    contentBgColor: "#ecfdf5",
  },
};

export const ColoredPills: Story = {
  args: {
    tabs: sampleTabs,
    variant: "pills",
    tabBgColor: "#e5e7eb",
    tabTextColor: "#4b5563",
    activeTabTextColor: "#ffffff",
    activeTabBgColor: "#8b5cf6",
    contentBgColor: "#ede9fe",
  },
};
