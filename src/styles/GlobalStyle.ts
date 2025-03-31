import { createGlobalStyle } from 'styled-components';
import { COLORS } from './theme';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${COLORS.gray[100]};
        color: ${COLORS.gray[600]};
    }
`;