import { memo } from "react";
import { ConfigProvider } from 'antd';
import { GlobalStyle } from '../styles/GlobalStyle';
import { COLORS, FONT_FAMILY } from '../styles/theme';
import AppRouter from './router/AppRouter';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: COLORS.teal[400],
                        fontFamily: FONT_FAMILY.body
                    }
                }}
            >
                <AppRouter />
            </ConfigProvider>
        </>
    );
}

export default memo(App);