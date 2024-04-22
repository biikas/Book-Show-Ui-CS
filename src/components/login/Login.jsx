import React, { useState } from "react";
import "./Login.css";

import { Button, Form, Input, Radio, Typography } from "antd";
import Title from "antd/es/skeleton/Title";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    } else if (formData.username.length === 0) {
      errors.username = "not valid";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password should be of atleast 6 characters";
    }
    setValidationError(errors);

    if (Object.keys(errors).length === 0) {
      console.log("form submitted");
    }
    setLoading(true);
  };

  return (
    <div className="container">
      {/* form */}
      <div className="form">
        <Form className="form-container" onFinish={handleSubmit}>
          <Typography.Title className="heading">Sign In</Typography.Title>
          <Form.Item label="Username" name="username">
            <div>
              <Input
                name="username"
                type="text"
                placeholder="Type username here"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
              {validationError.username && (
                <span>{validationError.username}</span>
              )}
            </div>
          </Form.Item>

          <Form.Item label="password" name="password">
            <div>
              <Input
                name="password"
                type="password"
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
