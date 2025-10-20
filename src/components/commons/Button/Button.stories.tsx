import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => (
  <button
    style={{
      padding: '8px 16px',
      borderRadius: '6px',
      background: '#1890ff',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    }}
    onClick={onClick}
  >
    {label}
  </button>
);

const meta: Meta<typeof Button> = {
  title: 'Commons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me',
  },
};
