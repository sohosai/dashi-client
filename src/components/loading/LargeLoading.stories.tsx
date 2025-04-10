import type { Meta, StoryObj } from '@storybook/react';
import LargeLoading from './LargeLoading';

const meta = {
  title: 'COMPONENTS/LargeLoading',
  component: LargeLoading,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LargeLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
