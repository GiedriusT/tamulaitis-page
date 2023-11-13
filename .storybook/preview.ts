import type { Preview } from "@storybook/react";

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyles from '../src/theme/GlobalStyle';
import { regularTheme } from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: regularTheme.colors.primaryBackround,
        },
      ],
    },
  },

  decorators: [withThemeFromJSXProvider({
    themes: {
      regular: regularTheme,
    },
    defaultTheme: 'regular',
    Provider: ThemeProvider,
    GlobalStyles,
  })]
};

export default preview;
