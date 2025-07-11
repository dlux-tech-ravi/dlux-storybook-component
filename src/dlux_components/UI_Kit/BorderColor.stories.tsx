import BorderColors  from '../UI_Kit/BorderColor';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'UI Kit/BorderColor',
	component: BorderColors,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [],
	argTypes: {},
} satisfies Meta<typeof BorderColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderColor: Story = {
	args: {},
};
