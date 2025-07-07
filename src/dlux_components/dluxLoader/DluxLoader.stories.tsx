// DluxLoader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { DluxLoader } from './DluxLoader';
import * as Icons from 'lucide-react';

const iconOptions = Object.keys(Icons).sort();

const meta: Meta<typeof DluxLoader> = {
  title: 'Components/DluxLoader',
  component: DluxLoader,
  tags: ['autodocs'],
  argTypes: {
    loaderType: {
      control: 'select',
      options: ['spinner', 'percentage'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: { control: 'color' },
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['inline', 'overlay', 'fullscreen'],
    },
    animationSpeed: {
      control: { type: 'number', min: 100, step: 100 },
      description: 'Spinner speed in ms',
      if: { arg: 'loaderType', eq: 'spinner' },
    },
    overlayBg: {
      control: 'color',
      description: 'Overlay background',
      if: { arg: 'variant', neq: 'inline' },
    },
    useCustomIcon: {
      control: 'boolean',
      if: { arg: 'loaderType', eq: 'spinner' },
    },
    iconName: {
      control: 'select',
      options: iconOptions,
      if: {
        arg: 'loaderType',
        eq: 'spinner',
        and: [{ arg: 'useCustomIcon', truthy: true }],
      },
    },
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      if: {
        arg: 'loaderType',
        eq: 'percentage',
        and: [{ arg: 'autoProgress', truthy: false }],
      },
    },
    autoProgress: {
      control: 'boolean',
      if: { arg: 'loaderType', eq: 'percentage' },
    },
    duration: {
      control: { type: 'number', min: 500, step: 100 },
      description: 'Auto animation duration (ms)',
      if: {
        arg: 'loaderType',
        eq: 'percentage',
        and: [{ arg: 'autoProgress', truthy: true }],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DluxLoader>;

export const SpinnerDefault: Story = {
  args: {
    loaderType: 'spinner',
    size: 'md',
    color: '#6366f1',
    label: 'Loading...',
    variant: 'inline',
    animationSpeed: 800,
    useCustomIcon: false,
  },
};

export const SpinnerWithCustomIcon: Story = {
  args: {
    loaderType: 'spinner',
    size: 'md',
    color: '#22c55e',
    label: 'Please wait...',
    variant: 'inline',
    animationSpeed: 1200,
    useCustomIcon: true,
    iconName: 'RefreshCw',
  },
};

export const PercentageManual: Story = {
  args: {
    loaderType: 'percentage',
    size: 'md',
    color: '#ef4444',
    label: 'Uploading...',
    variant: 'inline',
    duration:3000,
    autoProgress: true,
  },
};

