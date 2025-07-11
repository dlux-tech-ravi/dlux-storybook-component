import TextColours  from '../UI_Kit/TextColour';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'UI Kit/Text Colour',
    component: TextColours,
    parameters: {
        layout: 'fullscreen',
    },
    tags: [],
    argTypes: {},
} satisfies Meta<typeof TextColours>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextColour: Story = {
    args: {},
};
