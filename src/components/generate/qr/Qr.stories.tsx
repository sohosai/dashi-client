import type { Meta, StoryObj } from '@storybook/react';
import Qr from './Qr';

const meta = {
  title: 'COMPONENTS/generate/qr/Qr',
  component: Qr,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Qr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    visible_id: '0000',
  },
};
