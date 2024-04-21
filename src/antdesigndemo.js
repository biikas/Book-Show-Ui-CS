import React, { useState } from "react";
import { Form, Input, Button, Modal, Card, DatePicker } from "antd";
import 'antd/dist/reset.css';


const AntDesignDemo = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false); // change name acc to requirement

  const onFinish = (values) => {
    console.log("values for api:", values);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => { //clicked on ok
    setIsModalVisible(false);
  };

  const handleCancel = () => { // oncancel
    setIsModalVisible(false);
  };

  return (
    <div>
      <h1>Components</h1>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "input ur name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: " enter ur email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>

      <Card title="Default Card" style={{ width: 300 }}>
        <p>Card content</p>
      </Card>

      <DatePicker />
    </div>
  );
};

export default AntDesignDemo;
