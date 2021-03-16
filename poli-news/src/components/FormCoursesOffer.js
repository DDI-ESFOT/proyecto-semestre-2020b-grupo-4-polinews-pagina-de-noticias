import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  TimePicker,
  DatePicker,
} from "antd";
import Modal from "antd/es/modal/Modal";
import { UploadOutlined } from "@ant-design/icons";
import { useAuth } from "../lib/Auth";
import FormItem from "antd/lib/form/FormItem";

const FormPublicarCurso = () => {
  const { RangePicker } = DatePicker;
  const { registerFormCourses } = useAuth();

  const { Option } = Select;
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = (values) => {
    console.log("Formulario de Publicación de Curso: ", values);
    registerFormCourses(values);
  };

  function onChange(value) {
    console.log(value);
  }

  const [state, setState] = useState(true);

  function changeState(value) {
    console.log(value);
    if (value == "gratuito") {
      setState(true);
      console.log(state);
    } else {
      setState(false);
      console.log(state);
    }
  }

  InputNumber.defaultProps = {
    defaultValue: 0,
    value: 0,
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="593">+593</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  function onSearch(val) {
    console.log("search:", val);
  }

  const normFile = (e) => {
    console.log("Upload course:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { TextArea } = Input;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Publicar Curso
      </Button>
      <Modal
        title="Formulario Publicar Curso"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...formItemLayout}
          form={form}
          onFinish={onFinish}
          initialValues={{
            prefix: "593",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Nombre"
            rules={[{ required: true, message: "Nombre es requerido!" }]}
          >
            <Input allowClear />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Apellido"
            rules={[{ required: true, message: "Apellido es requerido!" }]}
          >
            <Input allowClear />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "El correo no es válido!",
              },
              {
                required: true,
                message: "Correo es requerido!",
              },
            ]}
          >
            <Input placeholder="Correo institucional" allowClear />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Celular"
            rules={[
              { required: true, message: "Ingrese su número de celular!" },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="courseName"
            label="Curso"
            rules={[{ required: true, message: "Nombre de curso requerido!" }]}
          >
            <Input placeholder="Ingrese nombre de Curso" allowClear />
          </Form.Item>

          <Form.Item
            name="photo"
            label="Imagen del curso"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Selecciona un archivo .jpg"
          >
            <Upload name="logo" action={null} listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="modality"
            label="Modalidad"
            rules={[{ required: true, message: "La modalidad es requerida!" }]}
          >
            <Select
              showSearch
              placeholder="Seleccionar la modalidad"
              style={{ width: 200 }}
              onChange={onChange}
              onSearch={onSearch}
              allowClear
            >
              <Option value="virtual">Virtual</Option>
              <Option value="presencial">Presencial</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="ubication"
            label="Ubicación"
            rules={[
              {
                required: true,
                message:
                  "La ubicación es requerida, si es modalidad virtual escribir el nombre de la plataforma",
              },
            ]}
          >
            <TextArea rows={2} placeholder="Ingrese ubicación" />
          </Form.Item>

          <Form.Item
            name="cost"
            label="Costo"
            rules={[{ required: true, message: "Un valor es requerido!" }]}
          >
            <Select
              showSearch
              placeholder="Selecciona un valor"
              style={{ width: 200 }}
              onChange={changeState}
              onSearch={onSearch}
              allowClear
            >
              <Option value="gratuito">Gratuito</Option>
              <Option value="pago">No Gratuito</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="value"
            label="Valor"
            //getValueProps={{ defaultValue: 0 }}
          >
            <InputNumber
              //min={0}
              formatter={(value) => `$ ${value}`}
              //disabled={state}
              rules={[
                {
                  required: true,
                  message: "valor requerido, si el valor es gratuito ingrese 0",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="quota"
            label="Cupos"
            rules={[{ required: true, message: "Cupos requeridos" }]}
          >
            <InputNumber
              min={1}
              placeholder="Cupos"
              onChange={onChange}
              allowClear
            />
          </Form.Item>

          <Form.Item
            name="date"
            label="Fecha de duración:"
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
            name="time"
            label="Hora de inicio"
            rules={[{ required: true }]}
          >
            <TimePicker />
          </Form.Item>

          <Form.Item
            name="hours"
            label="Horas de duración"
            rules={[{ required: true, message: "Horas requeridos" }]}
          >
            <InputNumber
              min={1}
              onChange={onChange}
              formatter={(value) => `${value} horas`}
              allowClear
            />
          </Form.Item>

          <Form.Item
            name="description"
            label="Descripción"
            rules={[{ required: true, message: "descripción requerido!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="silabo"
            label="Sílabo"
            rules={[{ required: true, message: "Sílabo requerido!" }]}
          >
            <TextArea rows={8} />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default FormPublicarCurso;
