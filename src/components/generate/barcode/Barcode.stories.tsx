import type { Meta, StoryObj } from '@storybook/react';
import Barcode from './Barcode';

const meta = {
  title: 'COMPONENTS/generate/barcode/Barcode',
  component: Barcode,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Barcode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    visible_id: '0000',
  },
};
