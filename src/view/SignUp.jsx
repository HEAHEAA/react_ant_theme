import signup from '../style/login/Signup.module.css';
import React, {useState} from 'react';
import {Button, ConfigProvider, Form, Input, Result, Select} from 'antd';
import {useNavigate} from "react-router-dom";

const {Option} = Select;


const SignUp = () => {
    const navigate = useNavigate();
    const [signupSuccess, setSignupSuccess] = useState(false);

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 1
            },
            sm: {
                span: 5,
            },
        },
    };


    const [form] = Form.useForm();
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{width: 70}}>
                <Option value="82">+82</Option>
                <Option value="86">+86</Option>
            </Select>
        </Form.Item>
    );

    const themeConfig = {
        token: {
            colorPrimary: '#1890ff',
            colorBgBase: '#ffffff',
            colorTextBase: '#000000',
            colorBorder: '#d1d1d1'
        }
    };

    return (
        <ConfigProvider theme={themeConfig}>
            <div className={signup.SignupBackground}>
                <div className={signup.signUpForm}>
                    <div className={signup.signUpFormHeader}/>
                    <h2>회원가입</h2>


                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        scrollToFirstError
                    >
                        <Form.Item
                            name="user_id"
                            label="아이디"
                            rules={[
                                {required: true, message: '아이디를 입력해주세요!',},
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="user_pwd"
                            label="비밀번호"
                            rules={[
                                {required: true, message: '비밀번호를 입력 해주세요!',},
                            ]}
                            hasFeedback
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            name="user_pwd_check"
                            label="비밀번호 확인"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '비밀번호가 맞지 않습니다!',
                                },
                                ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            name="user_name"
                            label="(성)이름"
                            rules={[
                                {
                                    required: true,
                                    message: '이름을 입력해주세요!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="핸드폰번호"
                            tooltip=" '-' 제외 입력 "
                            rules={[{required: true, message: '- 제외 번호를 입력주세요!',},]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{width: '100%',}}
                            />
                        </Form.Item>

                        <Form.Item
                            name="user_company"
                            label="소속"
                            rules={[
                                {
                                    required: true,
                                    message: '소속을 선택해주세요!',
                                },
                            ]}
                        >
                            <Select placeholder="선택">
                                <Option value="male">영진기술</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="user_rank"
                            label="직급"
                            rules={[
                                {
                                    required: true,
                                    message: '직급을 입력해주세요!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="gender"
                            label="성별"
                            rules={[
                                {
                                    required: true,
                                    message: '성별을 선택해주세요!',
                                },
                            ]}
                        >
                            <Select placeholder="선택">
                                <Option value="male">남자</Option>
                                <Option value="female">여자</Option>
                                <Option value="other">그 외</Option>
                            </Select>
                        </Form.Item>

                        <br/>

                        <Form.Item>
                            <Button htmlType="submit" style={{float: 'left', marginLeft: 10}} onClick={() => {
                                navigate(-1);
                            }}>
                                뒤로
                            </Button>
                            <Button type="primary" htmlType="submit" style={{float: 'right'}} onClick={() => {
                                setSignupSuccess(true);
                            }}>
                                회원가입
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                {
                    signupSuccess === true ?
                        <div className={signup.signUpSuccess}>
                            <Result
                                className={signup.signUpSuccessPopUp}
                                status="success"
                                title="회원가입 성공!"
                                subTitle="로그인 페이지에서 로그인을 할 수 있습니다."
                                extra={[
                                    <Button type="primary" key="console" onClick={() => {
                                        navigate('/login');
                                    }}>
                                        로그인 페이지 이동
                                    </Button>
                                ]}
                            />
                        </div> : null
                }

            </div>
        </ConfigProvider>
    )
}
export default SignUp;
