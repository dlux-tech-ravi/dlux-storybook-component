import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Alert, { AlertProps } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warn", "neutral", "primary"],
    },
    message: { control: "text" },
    dismissible: { control: "boolean" },
    autoDismissAfter: {
      control: "number",
      description: "Auto dismiss alert after (ms)",
      table: {
        category: "Behavior",
        defaultValue: { summary: "undefined" },
      },
    },
    className: { control: false },
    icon: { control: false },
    onClose: { control: false },
  },
};
export default meta;

type Story = StoryObj<AlertProps>;

export const Basic: Story = {
  args: {
    message: "This is a default neutral alert.",
  },
};

export const Neutral: Story = {
  args: {
    type: "neutral",
    message: "Neutral message for general info.",
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
    message: "Primary alert for emphasis.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    message: "Success! Operation completed successfully.",
  },
};

export const Warn: Story = {
  args: {
    type: "warn",
    message: "Warning! Something needs attention.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Error! Something went wrong.",
  },
};

export const Dismissable: Story = {
  args: {
    type: "success",
    message: "This alert is dismissible.",
    dismissible: true,
  },
};

export const AutoDismiss: Story = {
  args: {
    type: "warn",
    message: "This alert will dismiss in 3 seconds.",
    autoDismissAfter: 3000,
  },
};

export const DismissWithCallback: Story = {
  args: {
    type: "primary",
    // message: 'Alert will call onClose after dismissal.',
    autoDismissAfter: 4000,
    // onClose: () => alert("Alert dismissed!"),
  },
};

export const LongMessage: Story = {
  args: {
    type: "success",
    message:
      "This is a long message alert. It shows how the component handles larger bodies of text. Useful for multiline or detailed messages.",
  },
};

export const WithAnimation: Story = {
  args: {
    type: "primary",
    message: "Alert with animation on mount.",
    className: "animate-fade-in",
  },
};

export const VisualTest: Story = {
  args: {
    type: "neutral",
    message: "Visual regression test sample.",
  },
};
