import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { MOCK_USER } from '../../../utils/constants';
import { User } from '../../../types/auth';
import { authActions } from '../../../store/slices/authSlice';

const FormItem = Form.Item;

export const initValues: User = MOCK_USER;

const SignInForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // handle submit form
    const handleSubmitSignIn = (values: User) => {
        dispatch(authActions.signIn(values))
        navigate('/')
    }
    return (
        <Form
            layout="vertical"
            onFinish={handleSubmitSignIn}
            initialValues={initValues}
        >
            <FormItem label="Username" name="email">
                <Input />
            </FormItem>
            <FormItem label="Password" name="password">
                <Input type="password" />
            </FormItem>
            <div>
                <Button type="primary" htmlType="submit">Sign In</Button>
            </div>
        </Form>
    );
}

export default SignInForm;