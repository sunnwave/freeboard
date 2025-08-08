// styles/GlobalStyles.tsx
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
    `}
  />
);

export default GlobalStyles;
