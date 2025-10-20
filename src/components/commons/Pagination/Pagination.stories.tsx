import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

// ✅ Mock용 refetch 함수
const mockRefetch = async (variables?: { page?: number }) => {
  console.log('📡 refetch called with page:', variables?.page);
  return Promise.resolve({
    data: { fetchBoards: [] },
  }) as any;
};

const meta: Meta<typeof Pagination> = {
  title: 'Commons/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    boardsCount: {
      control: { type: 'number' },
      description: '총 게시글 수',
      defaultValue: 125,
    },
    pageGroupSize: {
      control: { type: 'number' },
      description: '한 그룹당 표시할 페이지 수',
      defaultValue: 10,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// ✅ 기본 스토리
export const Default: Story = {
  args: {
    boardsCount: 125,
    pageGroupSize: 10,
    refetch: mockRefetch,
  },
};

// ✅ 게시글 수가 적은 경우
export const SmallList: Story = {
  args: {
    boardsCount: 23,
    pageGroupSize: 5,
    refetch: mockRefetch,
  },
};

// ✅ 게시글이 매우 많은 경우
export const LargeList: Story = {
  args: {
    boardsCount: 500,
    pageGroupSize: 10,
    refetch: mockRefetch,
  },
};
