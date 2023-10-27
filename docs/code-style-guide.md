# Code Style Guide

Project uses [airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) coding style and ESLint is set-up to lint the code in IDE and when comitting. Additionally we have some additional style rules.

## Styled Components

We use [styled-components](https://github.com/styled-components/styled-components) package for working with CSS styles.

### Naming files

Styled components should be defined in a separate file from the main React component that they style. Filename should have `.styles.ts` suffix.

```
MyComponent.tsx
MyComponent.style.ts
```

### Importing styled components

When importing styled components we use the approach of always importing all of them under the `S` namespace;

```tsx
import * as S from './MyComponent.styles';

const MyComponent: React.FC = () => {
  // ...
  
  return (
    <S.MyComponent>
      Contents
    </S.MyComponent>
  );
};
```

This way you have nice auto-complete functionality in IDE for your styled components, also there are never any name collisions with functional components.

### Using props

We use [transient props](https://styled-components.com/docs/api#transient-props) to pass data to styled components as it is currently suggested as best practice. That means that all props of styled components should have `$` prefix.

```tsx
import styled from 'styled-components';

export type ArticleContainerProps = {
  $minHeight: number
};

export const ArticleContainer = styled.div<ArticleContainerProps>`
  min-height: ${props => props.$minHeight}vh;
`;
```