import type { Meta, StoryObj } from '@storybook/react';
import AllTrashItemsUl from './AllTrashItemsUl';
import { allTrashItemsResponseData } from './dummyData';

const meta = {
  title: 'COMPONENTS/all_trash_items/AllTrashItemsUl',
  component: AllTrashItemsUl,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AllTrashItemsUl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: allTrashItemsResponseData,
  },
};
