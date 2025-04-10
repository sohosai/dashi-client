import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta = {
  title: 'COMPONENTS/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'タイトル',
  },
};
