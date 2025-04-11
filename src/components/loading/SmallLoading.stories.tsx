import type { Meta, StoryObj } from '@storybook/react';
import SmallLoading from './SmallLoading';

const meta = {
  title: 'COMPONENTS/loading/SmallLoading',
  component: SmallLoading,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SmallLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
