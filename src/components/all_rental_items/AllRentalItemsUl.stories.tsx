import type { Meta, StoryObj } from '@storybook/react';
import AllRentalItemsUl from './AllRentalItemsUl';
import { allRentalItemsResponseData } from './dummyData';

const meta = {
  title: 'COMPONENTS/all_rental_items/AllRentalItemsUl',
  component: AllRentalItemsUl,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AllRentalItemsUl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: allRentalItemsResponseData,
  },
};
