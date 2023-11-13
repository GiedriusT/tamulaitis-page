import 'styled-components';
import { regularTheme } from './theme';

type ThemeInterface = typeof regularTheme;

// This adds type safety to the theme object when you access it via props.theme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
