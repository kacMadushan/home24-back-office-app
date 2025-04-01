import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const SignUpForm = () => {
    return (
        <Form layout="vertical">
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

export default SignUpForm;