import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta = {
  title: 'COMPONENTS/title/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllRentalItems: Story = {
  args: {
    title: '貸し出し中物品管理',
  },
};

export const AllRentalItem: Story = {
  args: {
    title: '貸し出し中物品管理',
  },
};

export const AllTrashItems: Story = {
  args: {
    title: '削除物品情報の履歴',
  },
};

export const Color: Story = {
  args: {
    title: 'ケーブル識別色管理',
  },
};

export const Connector: Story = {
  args: {
    title: '端子名管理',
  },
};

export const Generate: Story = {
  args: {
    title: 'ラベル / csv の生成',
  },
};

export const RegisterItem: Story = {
  args: {
    title: '物品情報の登録',
  },
};

export const UpdateItem: Story = {
  args: {
    title: '物品情報の更新',
  },
};
