import type { Meta, StoryObj } from '@storybook/react';
import PageNotFoundComponent from './PageNotFoundComponent';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'COMPONENTS/page_not_found/PageNotFoundComponent',
  component: PageNotFoundComponent,
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
} satisfies Meta<typeof PageNotFoundComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
