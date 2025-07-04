import type { Meta, StoryObj } from '@storybook/react';
import { DluxProductCard } from '../src/dlux_components/dluxProductCard/dluxProductCard';

const meta: Meta<typeof DluxProductCard> = {
  title: 'Components/dluxProductCard',
  component: DluxProductCard,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    materials: { control: 'text' },
    price: { control: 'text' },
    inStock: { control: 'boolean' },
    colors: {
      control: 'object',
      description: 'Array of color hex codes',
    },
    bgColor: {
      control: 'color',
      description: 'Background color (hex or rgb)',
    },
    textColor: {
      control: 'color',
      description: 'Text color (hex or rgb)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DluxProductCard>;

export const Default: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Space Helmet X24',
    description:
      'Introducing the Space Helmet X24: a sleek, durable motorcycle helmet with advanced ventilation, anti-fog visor, and stylish graphics. Experience ultimate protection and comfort for your rides.',
    materials:
      'Made from durable polycarbonate, impact-resistant materials, and anti-fog coating.',
    price: '$120.00',
    inStock: false,
    colors: ["#ffffff", "#2c2c23"],
    bgColor: '#f3f4f6',
    textColor: '#1f2937',
  },
};
