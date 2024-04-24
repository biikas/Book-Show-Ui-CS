import React, { useState } from "react";
import "./Signup.css";

import { Button, Checkbox, Form, Input, Radio, Tag, Typography } from "antd";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    middleName: "",
    lastName: "",
    state: "",
    district: "",
    email: "",
    contact: "",
    profile: "",
    verifed: false,
    active: false,
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const errors = {};
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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <div className="container">
      {/* form */}
      <div className="form">
        <Form
          layout="vertical"
          labelCol={{ span: 20 }}
          wrapperCol={{ span: 20 }}
          className="form-container"
          onFinish={handleSubmit}
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
          >
            <div>
              <Input
                name="username"
                type="text"
                placeholder="Type username here"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </Form.Item>

          <Form.Item
            label="firstName"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your firstName" },
              { whitespace: true },
              { min: 3 },
              { type: "string" },
            ]}
          >
            <div>
              <Input
                name="firstName"
                type="text"
                placeholder="Type firstName here"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </Form.Item>
          <Form.Item
            label={
              <>
                Password
                <span style={{ color: "gray" }}>(optional)</span>
              </>
            }
            name="middleName"
            rules={[{ whitespace: true }, { min: 3 }, { type: "string" }]}
          >
            <div>
              <Input
                name="middleName"
                type="text"
                placeholder="Type middleName here"
                id="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
              {validationError.middleName && (
                <span>{validationError.middleName}</span>
              )}
            </div>
          </Form.Item>
          <Form.Item
            label="lastName"
            name="lastName"
            rules={[
              { required: true, message: "Please enter your Last name" },
              { whitespace: true },
              { min: 3 },
              { type: "string" },
            ]}
          >
            <div>
              <Input
                name="lastName"
                type="text"
                placeholder="Type lastName here"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[
              { required: true, message: "Please enter your state" },
              { whitespace: true },
              { type: "string" },
            ]}
          >
            <div>
              <Input
                name="state"
                type="text"
                placeholder="Enter state here"
                id="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </Form.Item>
          <Form.Item
            label="District"
            name="district"
            rules={[
              { required: true, message: "Please enter your district" },
              { whitespace: true },
              { type: "string" },
            ]}
          >
            <div>
              <Input
                name="district"
                type="text"
                placeholder="Enter district here"
                id="district"
                value={formData.district}
                onChange={handleChange}
              />
            </div>
          </Form.Item>
          <Form.Item
            label={
              <>
                Email
                <span style={{ color: "gray" }}>(optional)</span>
              </>
            }
            name="email"
            rules={[
              { pattern: emailRegex, message: "please enter a valid email" },
              { whitespace: true },
              { type: "string" },
            ]}
          >
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Type email here"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </Form.Item>
          <Form.Item
            label="Contact"
            name="contact"
            rules={[
              { required: true, message: "Please enter your contact" },
              { whitespace: true },
              { min: 10 },
              { max: 10 },
            ]}
          >
            <div>
              <Input
                name="contact"
                type="number"
                placeholder="Type contact here"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              {validationError.contact && (
                <span>{validationError.contact}</span>
              )}
            </div>
          </Form.Item>

          <Form.Item name="verified">
            <div>
              <Checkbox
                id="verified"
                name="verified"
                value={formData.verifed}
                onChange={handleChange}
              >
                verfied?
              </Checkbox>
            </div>
          </Form.Item>
          <Form.Item name="active">
            <div>
              <Checkbox
                id="active"
                name="active"
                value={formData.active}
                onChange={handleChange}
              >
                Active?
              </Checkbox>
            </div>
          </Form.Item>

          <Radio value="keep-signed">Keep me signed in</Radio>

          <span>Forgot password?</span>
          <br />
          <Button block type="primary" htmlType="submit" id="button">
            Submit
          </Button>
          <br />
          <span>Sign In Now</span>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
