import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import SurfaceColor from '../UI_Kit/SurfaceColor';



const meta: Meta<typeof SurfaceColor> = {
  title: 'UI Kit/ Surface Color',
  component: SurfaceColor,
  tags: [],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
}

export default meta

type Story = StoryObj<typeof SurfaceColor>

export const Default: Story = {
  render: () => <SurfaceColor />,
  name: 'Surface Color',
}

