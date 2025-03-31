import { memo } from "react";
import { Row, Col, Card, Form, Input, Button } from "antd";
import { useDispatch } from 'react-redux';
import { authActions } from "./store/slices/authSlice";

import { ConfigProvider } from 'antd';
import { GlobalStyle } from './styles/GlobalStyle';
import { COLORS, FONT_FAMILY } from './styles/theme';

type User = {
    email: string;
    password: string;
}

const App = () => {
    const dispatch = useDispatch();

    const onFinish = (values: User) => {
        dispatch(authActions.signIn(values));
    }
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
                <Row align="middle" justify="center" style={{ height: '100vh' }}>
                    <Col xs={24} lg={8}>
                        <Card>
                            <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label="Username" name="email">
                                    <Input placeholder="Username" />
                                </Form.Item>
                                <Form.Item label="Password" name="password">
                                    <Input placeholder="Password" />
                                </Form.Item>
                                <Button type="primary" htmlType="submit">Sign In</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </ConfigProvider>
        </>
    );
}

export default memo(App);