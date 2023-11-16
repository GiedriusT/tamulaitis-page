import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const meta = {
  title: 'Components/Layout/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Regular: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/project/skraidantis-radijas']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};
