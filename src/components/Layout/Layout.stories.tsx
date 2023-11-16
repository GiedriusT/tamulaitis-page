import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './Layout';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    children: 'Welcome to the creative world of Giedrius Tamulaitis! As an interdisciplinary artist, I explore the intersection of themes to craft unique and thought-provoking works. My portfolio is a tapestry of visual art and interactive installation, inviting you to delve into a realm where boundaries dissolve, and creativity knows no limits.Within these virtual walls, you will encounter a synthesis of art and technology that reflect my passion for life. Each piece is a journey, inviting you to contemplate the connections between disciplines and experience the power of artistic convergence.',
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/index']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
