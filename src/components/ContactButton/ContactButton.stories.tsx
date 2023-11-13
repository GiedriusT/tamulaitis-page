import type { Meta, StoryObj } from '@storybook/react';

import ContactButton from './ContactButton';

const meta = {
  title: 'Components/ContactButton',
  component: ContactButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContactButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    $footerVariation: false,
  },
};

export const Footer: Story = {
  parameters: {
    backgrounds: {
      default: 'footer',
    },
  },
  args: {
    $footerVariation: true,
  },
};
