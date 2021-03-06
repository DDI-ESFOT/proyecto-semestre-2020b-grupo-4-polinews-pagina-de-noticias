import React, { useState } from "react";
import moment from "moment";
import {
  Modal,
  Form,
  Input,
  TimePicker,
  Button,
  DatePicker,
  Select,
} from "antd";

const FormEvent = () => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} es obligatorio!",
    types: {
      date: "${label} no es una fecha valida",
      number: "${label} no es un numero valido",
    },
    number: {
      range: "${label} valores entre ${min} y ${max}",
    },
  };

  const onFinish = (values) => {
    console.log("Formulario de Evento", values);
  };

  return (
    <div>
      <>
        <Button type="primary" onClick={showModal}>
          Crear Evento
        </Button>
        <Modal
          title="Crear Evento"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <Form
            {...layout}
            name="create_event"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name='name_event'
              label="Nombre del evento:"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["event", "date"]}
              label="Fecha del evento:"
              rules={[{ required: true }]}
            >
              <RangePicker
                dateRender={(current) => {
                  const style = {};
                  if (current.date() === 1) {
                    style.border = "1px solid #1890ff";
                    style.borderRadius = "50%";
                  }
                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Form.Item>
            <Form.Item
              name={["event", "status"]}
              label="Tipo de evento:"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select type"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="private">Privado</Option>
                <Option value="public">Publico</Option>
                <Option value="alone">Solo yo</Option>
              </Select>
            </Form.Item>
            <Form.Item name={["event", "time"]} label="Hora de inicio:">
              <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
            </Form.Item>
            <Form.Item name={["event", "description"]} label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Crear
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    </div>
  );
};

export default FormEvent;
