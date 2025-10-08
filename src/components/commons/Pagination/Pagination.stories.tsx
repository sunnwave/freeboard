import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

// Meta 설정
const meta: Meta<typeof Pagination> = {
  title: 'Example/Pagination',
  component: Pagination,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

// Story 타입 정의
type Story = StoryObj<typeof Pagination>;

// Primary 버튼 스토리
export const Primary: Story = {
  args: {
    label: 'Pagination',
    primary: true,
  },
};
