import type { Meta, StoryObj } from '@storybook/react';
import AllRentalItemsLi from './AllRentalItemsLi';
import { allRentalItemsResponseData } from './dummyData';

const meta = {
  title: 'COMPONENTS/all_rental_items/AllRentalItemsLi',
  component: AllRentalItemsLi,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AllRentalItemsLi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: allRentalItemsResponseData.rental_items[0],
  },
};
