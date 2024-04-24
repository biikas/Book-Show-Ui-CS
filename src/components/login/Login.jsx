import React, { useState } from "react";
import "./Login.css";

import { Button, Form, Input, Radio, Typography } from "antd";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // const errors = {};
    // if (!formData.username.trim()) {
    //   errors.username = "Username is required";
    // } else if (formData.username.length === 0) {
    //   errors.username = "not valid";
    // }
    // if (!formData.password.trim()) {
    //   errors.password = "Password is required";
    // } else if (formData.password.length < 6) {
    //   errors.password = "Password should be of atleast 6 characters";
    // }
    // setValidationError(errors);
    // if (Object.keys(errors).length === 0) {
    //   console.log("form submitted");
    // }
    console.log("Form submitted");
    setLoading(true);
  };

  return (
    <div className="container">
      {/* form */}
      <div className="form">
        <Form
          layout="vertical"
          labelCol={{ span: 20 }}
          wrapperCol={{ span: 20 }}
          className="form-login-container"
          onFinish={handleSubmit}
          requiredMark={false}
        >
          <Typography.Title className="heading">Sign In</Typography.Title>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please enter your username" },
              { whitespace: true },
              { min: 3 },
              { type: "string" },
            ]}
            hasFeedback
          >
            <div>
              <Input
                name="username"
                placeholder="Type username here"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </Form.Item>

          <Form.Item
            label="pasword"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { whitespace: true },
              { min: 6 },
              { type: "string" },
            ]}
            hasFeedback
          >
            <div>
              <Input.Password
                name="password"
                placeholder="Type password here"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              {validationError.password && (
                <span>{validationError.password}</span>
              )}
            </div>
          </Form.Item>

          <Radio value="keep-signed">Keep me signed in</Radio>

          <span>Forgot password?</span>
          <br />
          <Button block type="primary" htmlType="submit" id="button">
            Submit
          </Button>
          <br />
          <span>Register Now</span>
        </Form>
      </div>
    </div>
  );
}

export default Login;
