import styles from '../style/login/Login.module.css';
import {Button, Checkbox, ConfigProvider, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const themeConfig = {
        token: {
            colorPrimary:  '#1890ff',
            colorBgBase: '#ffffff',
            colorTextBase: '#000000',
            colorBorder: '#d1d1d1'
        }
    };

    return (
        <ConfigProvider theme={themeConfig}>
        <div className={styles.loginBackground}>
            <div className={styles.loginForm}>
                <div className={styles.loginFormHeader}/>

                <h2>Login</h2>
                <Form
                    name="basic"
                    initialValues={{remember: true,}}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '아이디를 입력 해주세요 !',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '비밀번호를 입력 해주세요!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        style={{float: 'left'}}
                    >
                        <Checkbox>로그인 기억하기</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{float: 'right'}}
                            onClick={() => {
                                navigate('/dashboard');
                            }}
                        >
                            로그인
                        </Button>
                    </Form.Item>
                </Form>

                <p
                   onClick={() => {
                       navigate('/signup');
                   }}
                >
                    회원가입이 필요하신가요?
                </p>
            </div>


            <footer>
                <img src="#" alt="logo"/>
            </footer>
        </div>
        </ConfigProvider>
    )
}
export default Login;
