import React, { useState } from 'react'
import "./Login.css"
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";
import { UserLogin } from "../../Api/Api"
import Header from '../Header/Header';
function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname)
    const onFinish = async (values) => {
        let data = await UserLogin(values.username, values.password)
        if (data.Message === "Success") {
            navigate("/CallScreen")
        }
        console.log('Success:', data);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='mainLogin' >
            <Header logout={false} />
            <div className='LoginDiv' >
                <div className='innerDiv'>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            required={true}
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input

                                prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <Button

                                type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Login