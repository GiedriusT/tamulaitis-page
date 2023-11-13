import type { Meta, StoryObj } from '@storybook/react';

import ArticleTitle from './ArticleTitle';

const meta = {
  title: 'Components/ArticleTitle',
  component: ArticleTitle,
} satisfies Meta<typeof ArticleTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Article Title',
  },
};
