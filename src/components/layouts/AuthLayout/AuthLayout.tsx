import { Outlet } from 'react-router-dom';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const AuthLayout = () => {
    return (
        <AntRow align="middle" justify="center">
            <Col xs={24} lg={8}>
                <Outlet />
            </Col>
        </AntRow>
    );
}

const AntRow = styled(Row)`
    height: 100vh
`;

export default AuthLayout;