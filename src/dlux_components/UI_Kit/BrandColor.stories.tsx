import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import BrandColours from '../UI_Kit/BrandColor';



const meta = {
	title: 'UI Kit',
	component: BrandColours,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [],
	argTypes: {},
} satisfies Meta<typeof BrandColours>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandedColour: Story = {
	args: {},
};

