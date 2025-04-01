import { createGlobalStyle } from 'styled-components';
import { COLORS, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from './theme';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${COLORS.gray[100]};
        color: ${COLORS.gray[600]};
        font-family: ${FONT_FAMILY.body};
        font-weight: ${FONT_WEIGHT.regular};
        font-size: ${FONT_SIZE.md}
    }
`;