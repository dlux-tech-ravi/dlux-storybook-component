import Typographys  from '../UI_Kit/Typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'UI Kit/Typography',
    component: Typographys,
    parameters: {
        layout: 'fullscreen',
    },
    tags: [],
    argTypes: {},
} satisfies Meta<typeof Typographys>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
    args: {},
};
