import React from "react";
import { Card, Col, Row, Typography } from "antd";

function Analitics() {
	return (
		<div>
			<Row gutter={16}>
				<Col span={8}>
					<Card title="Total Orders:" bordered={false}>
						<Typography.Title level={1} style={{ margin: 0 }}>
							7
						</Typography.Title>
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Total Products Catagories:" bordered={false}>
						<Typography.Title level={1} style={{ margin: 0 }}>
							7
						</Typography.Title>
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Card title" bordered={false}>
						<Typography.Title level={1} style={{ margin: 0 }}>
							7
						</Typography.Title>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default Analitics;
