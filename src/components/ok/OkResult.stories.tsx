import type { Meta, StoryObj } from '@storybook/react';
import OkResult from './OkResult';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'COMPONENTS/OkResult',
  component: OkResult,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof OkResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    result: 'ok',
  },
};
