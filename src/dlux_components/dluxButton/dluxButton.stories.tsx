import type { Meta, StoryObj } from "@storybook/react";
import { DluxButton } from "./dluxButton";
import * as Icons from "lucide-react";

// Extract all lucide icon names (as strings)
const iconOptions = Object.keys(Icons).sort();

const meta: Meta<typeof DluxButton> = {
  title: "Components/dluxButton",
  component: DluxButton,
  tags: ["autodocs"],
 
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    bgColor: { control: "color" },
    hoverBgColor: { control: "color" },
    hoverTextColor: { control: 'color' },
    textColor: { control: "color" },
    borderRadius: { control: "text" },
    showIcon: { control: "boolean" },
    iconName: {
      control: "select",
      options: iconOptions,
      if: { arg: "showIcon", truthy: true },
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      if: { arg: "showIcon", truthy: true },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof DluxButton>;

export const Default: Story = {
  args: {
    label: "Click Me",
    variant: "primary",
    size: "md",
    borderRadius:"100px",
    bgColor:"#000000",
    fullWidth:false,
    disabled:false,
    hoverBgColor:"#004fff",
    textColor:"#ffffff",
    showIcon:false,
  },
};

export const primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "md",
     fullWidth:false,
    disabled:false,
  },
};

export const secondary: Story = {
  args: {
    label: "secondary Button",
    variant: "secondary",
    size: "lg",
     fullWidth:false,
    disabled:false,
    borderRadius:"0px",
    showIcon:false,
  },
};
export const outline: Story = {
  args: {
    label: "Outline Button",
    variant: "outline",
    size: "md",
     fullWidth:false,
    disabled:false,
    showIcon:false,
    borderRadius:"5px"
  },
};

export const iconButton: Story = {
  args: {
    label: "Button with Icon",
    variant: "primary",
    size: "md",
    showIcon: true,
    iconName: "ArrowRight",
    iconPosition: "right",
     fullWidth:false,
    disabled:false,
    bgColor:"#000000",
    hoverTextColor:"#000000",
    hoverBgColor:"#ffffff",
    borderRadius:"5px",
  },
};
