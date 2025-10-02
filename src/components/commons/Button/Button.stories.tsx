import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Meta 설정
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

// Story 타입 정의
type Story = StoryObj<typeof Button>;

// Primary 버튼 스토리
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    primary: true,
  },
};

// Secondary 버튼 스토리
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    primary: false,
  },
};
