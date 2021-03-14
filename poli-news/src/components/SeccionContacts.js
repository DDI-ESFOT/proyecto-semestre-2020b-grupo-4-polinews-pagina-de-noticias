import React from 'react';
import { Col, Layout, Row, Typography, Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import celular from '../images/celular.jpg';
import { useAuth } from '../lib/Auth';
import menuItems from '../constants/Items';
import contactItems from '../constants/Contacts';
import menuLogout from '../constants/ItemsLogout';

const SeccionContacts = () => {
    const { Title } = Typography;

    return (
        <div className="contacts" style={{ textAlign: 'center'}}>
            <Row>
                <Col span={24}>
                    <Title level={3}> Promociona tu evento aquí!</Title>
                </Col>
            </Row>
            <Row>

                <Col span={12}>

                    <Image src={celular} width={420} />
                </Col>

                <Col span={6}>
                   <h1>Crezcamos juntos</h1>
                    <p style={{ textAlign: 'top'}}>
                        Si deseas hacer un evento o saber de alguno
                        que sea referente a la comunidad politécnica te invitamos
                        a contactarnos.
                    </p>

                    <Button> Contáctanos </Button>
                </Col>

            </Row>

        </div>
    );
};
export default SeccionContacts;