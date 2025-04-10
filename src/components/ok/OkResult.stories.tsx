import type { Meta, StoryObj } from '@storybook/react';
import OkResult from './OkResult';

const meta = {
  title: 'COMPONENTS/OkResult',
  component: OkResult,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OkResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    result: 'ok',
  },
};
