import React from 'react';
import { Row, Col, Typography } from 'antd';
import { createFromIconfontCN, YoutubeOutlined } from '@ant-design/icons';

const SocialMedia = () => {
	const IconFont = createFromIconfontCN({
		scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
	});
	const { Title } = Typography;
	return (
		<Row justify="center" style={{ marginTop: '50px' }}>
			<Col>
				<Title level={2}>NO TE OLVIDES DE SEGUIRNOS !!!</Title>
				<IconFont
					type="icon-facebook"
					style={{ fontSize: '80px', marginRight: '20%', display: 'inline-block' }}
				/>
				<IconFont
					type="icon-twitter"
					style={{ fontSize: '80px', marginRight: '20%', display: 'inline-block' }}
				/>
				<YoutubeOutlined style={{ fontSize: '90px', display: 'inline-block' }} />
			</Col>
		</Row>
	);
};
export default SocialMedia;
