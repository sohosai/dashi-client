import type { Meta, StoryObj } from '@storybook/react';
import AllTrashItemsLi from './AllTrashItemsLi';
import { allTrashItemsResponseData } from './dummyData';

const meta = {
  title: 'COMPONENTS/all_trash_items/AllTrashItemsLi',
  component: AllTrashItemsLi,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AllTrashItemsLi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: allTrashItemsResponseData.trash_items[0],
  },
};
