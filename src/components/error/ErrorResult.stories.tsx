import type { Meta, StoryObj } from '@storybook/react';
import ErrorResult from './ErrorResult';

const meta = {
  title: 'COMPONENTS/error/ErrorResult',
  component: ErrorResult,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ErrorResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    result: {
      code: 'storybook/sample-error',
      message: 'SampleError: This is sample error for storybook.',
    },
  },
};
