import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { Carousel, Typography, Row, Col, Image } from 'antd';

const CarouselInterships = () => {
    const { Title } = Typography;
    const [interships, setInterships] = useState([]);

    useEffect(() => {
        fetchInterships();
    }, []);

    const fetchInterships = async () => {
        try {
            const snap = await db.collection('interships').get();
            const docs = snap.docs.map((doc, index) => {
                console.log('data', doc.data());
                return { ...doc.data(), key: index };
            });
            console.log(docs);
            setInterships(docs);

            console.log('PASANTIAS', docs);
        } catch (e) {
            console.log('ERROR', e);
        }
    };

    return (
        <Carousel autoplay>
            {interships.map((item) => {
                return (
                    <>
                        <Row
                            justify="center"
                            style={{
                                marginTop: '2%',
                                textAlign: 'center',
                                alignContent: 'center',
                                marginLeft: '6%',
                            }}
                        >
                            <Col span={12}>
                                <Title>{item.load}</Title>
                                <Title level={3}>{item.description}</Title>
                            </Col>
                            <Col span={12}>
                                <Image width={400} src={item.photo} />
                            </Col>
                        </Row>
                    </>
                );
            })}
        </Carousel>
    );
};
export default CarouselInterships;