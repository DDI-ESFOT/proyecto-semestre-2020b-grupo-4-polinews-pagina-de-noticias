import React, {useState} from 'react';
import {Button, Form, Image, Input, InputNumber, Select, Upload, message} from "antd";
import Modal from "antd/es/modal/Modal";
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';


const FormPublicarCurso = () =>{

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
        console.log('Formulario de Publicacion de Curso: ', values);
    };

    function onChange(value) {
        console.log(value);
    }


    const { Option } = Select;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 80 }}>
                <Option value="593">+593</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    function onSearch(val) {
        console.log('search:', val);
    }

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: '',
        },
    ]);

    const onChange1 = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
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


    return(
      <>
          <Button type="primary" onClick={showModal}>
              Publicar Curso
          </Button>
          <Modal title="Formulario Publicar Curso" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                 footer={null}>



              <Form
                  {...formItemLayout}
                  form={form}
                  onFinish={onFinish}
                  initialValues={{
                      prefix: '593'
                  }}
                  scrollToFirstError>


                  <Form.Item name="name" label="Nombre" rules={[
                      { required: true, message: 'Nombre es requerido!' }]}>
                      <Input allowClear/>
                  </Form.Item>

                  <Form.Item name="lastName" label="Apellido" rules={[
                      { required: true, message: 'Apellido es requerido!' }]}>
                      <Input allowClear/>
                  </Form.Item>

                  <Form.Item  name="email"
                              label="E-mail"
                              rules={[
                                  {
                                      type: 'email',
                                      message: 'El correo no es valido!',
                                  },
                                  {
                                      required: true,
                                      message: 'Correo es requerido!',
                                  },
                              ]} >

                      <Input placeholder="Correo institucional" allowClear/>
                  </Form.Item>

                  <Form.Item
                      name="phone"
                      label="Celular"
                      rules={[{ required: true, message: 'Ingrese su numero de celular!' }]}
                  >
                      <Input addonBefore={prefixSelector}
                             style={{
                                 width: '100%',
                             }} />
                  </Form.Item>
                  <Form.Item name="CURSO" label="Curso" rules={[
                      { required: true, message: 'Nombre de curso requerido!' }]}>
                      <Input placeholder="Ingrese nombre de Curso" allowClear/>
                  </Form.Item>

                  <Form.Item name="album"
                  label="Cargar imagenes"
                  rules={[{required: false, message: 'Es requerido imagenes'}]}>
                      <ImgCrop rotate>
                          <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture-card"
                              fileList={fileList}
                              onChange={onChange1}
                              onPreview={onPreview}
                          >
                              {fileList.length < 5 && '+ Upload'}
                          </Upload>
                      </ImgCrop>
                  </Form.Item>


                      <Form.Item name="modality"
                                 label="Modalidad"
                                 rules={[{ required: true, message: 'La modalidad es requerida!' }]}>
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
                          name= "ubication"
                          label="Ubicacion"
                          rules={[{ required: true, message: 'La ubicacion es requerida' }]}
                      >
                          <Input style={{ width: '50%' }} placeholder="Ingrese ubicacion" />
                      </Form.Item>



                      <Form.Item name="costo"
                                 label="Costo"
                                 rules={[{ required: true, message: 'Un valor es requerido!' }]}>
                          <Select
                              showSearch
                              placeholder="Selecciona un valor"
                              style={{ width: 200 }}
                              onChange={onChange}
                              onSearch={onSearch}
                              allowClear
                          >
                              <Option value="gratuito">Gratuito</Option>
                              <Option value="pago">No Gratuito</Option>
                          </Select>
                      </Form.Item>
                      <Form.Item name= "valor"
                          label="Valor">
                          <InputNumber
                              defaultValue={0}
                              min={0}
                              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                              parser={value => value.replace(/\$\s?|(,*)/g, '')}
                              onChange={onChange}
                          />
                      </Form.Item>
                      <Form.Item name= "cupos"
                                 label="Cupos"
                                 rules={[{ required: true, message: 'Cupos requeridos' }]}>
                          <InputNumber min={1} placeholder="Cupos" onChange={onChange} allowClear/>
                      </Form.Item>

                  <Form.Item name= "duracion"
                             label="Duracion">
                      <InputNumber defaultValue={0} min={1} placeholder="Ingrese Duracion"
                                   formatter={value => `${value} dias`}
                                   onChange={onChange} allowClear/>
                  </Form.Item>

                  <Form.Item name="silabo"
                  label="Silabo" rules={[{ required: true, message: 'Silabo requerido!' }]}>
                      <Upload {...props}>
                          <Button icon={<UploadOutlined />}>Subir</Button>
                      </Upload>
                  </Form.Item>

                  <Form.Item name="textArea"
                             label="Descripcion" rules={[{ required: true, message: 'descripcion requerido!' }]}>
                      <TextArea rows={4} />
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

}
export default FormPublicarCurso;