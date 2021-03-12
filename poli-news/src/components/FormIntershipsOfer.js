import React,{useState} from 'react';
import {Form, Input, Button, Upload, Modal} from 'antd';
import { DatePicker, Space } from 'antd';
const {Item}=Form;
const { RangePicker } = DatePicker;

function FormIntershipsOfer() {
	const [isModalVisible, setIsModalVisible] = useState(false  );

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	const onFinish = (values) => {
		console.log('Formulario de Ifertar pasantias', values);
	};
	return (
		<div >
			<>
			<Button type="primary" onClick={showModal}>
				Ofertar Pasantias
			</Button>
			<Modal  title="" visible={isModalVisible} footer={null} onCancel={handleCancel}>

				<Form name="Formulario">
					<h1>Formulario para ofertar pasantías</h1>
					<Item label="Cargo"
						  name="cargo"
						  rules={[{
							  required:true,
							  message:"Por favor ingrese el cargo"
						  }]}>
						<Input/>
					</Item>

					<Item label="Nombre de la empresa"
						  name="nombre de la empresa"
						  rules={[{
							  required:true,
							  message:"Por favor ingrese el nombre de la empresa"
						  }]}>
						<Input/>
					</Item>

					<Item label="Sueldo"
						  name="ingrese el sueldo"
						  rules={[{
							  required:true,
							  message:"Por favor ingrese el sueldo"
						  }]}>
						<Input/>
					</Item>

					<Item label="Duración">
						<Space direction="vertical" size={12}>
							<RangePicker picker="day" />

						</Space>

					</Item>


					<h3>Infomación de contacto</h3>
					<Item label="Nombre del encargado"
						  name="nombre encargado"
						  rules={[{
							  required:true,
							  message:"Por favor ingrese el nombre del encargado"
						  }]}>
						<Input/>
					</Item>

					<Item label="Dirección pasantías"
						  name="direccion"
						  rules={[{
							  required:true,
							  message:"Por favor ingrese la dirección donde se realizará la pasantía"
						  }]}>
						<Input/>
					</Item>

					<Item label="Correo electrónico"
						  name="correo"
						  rules={[{
							  required:true,
							  message:"Por favor ingrese el correo electrónico"
						  }]}>
						<Input/>
					</Item>

					<Item label="Teléfono/celular"
						  name="celular"
						  rules={[{
							  required:true,
							  message:"Por favor ingrese su teléfono/celular"
						  }]}>
						<Input/>
					</Item>

					<h4>Descripción</h4>
					<textarea className="text"
							  label="Descripción"
							  name="descripcion">

                 </textarea>

					<h4>Requisitos del pasante</h4>
					<textarea className="text1"
							  label="Requisitos"
							  name="Requisitos">

                 </textarea>


					<Upload>

						<Button type="upload">Cargar imágenes

						</Button>

					</Upload>


					<Item>
						<Button type="primary" htmlType="submit">Enviar

						</Button>
					</Item>



				</Form>
			</Modal>
				</>
		</div>
	);
}

export default FormIntershipsOfer;
