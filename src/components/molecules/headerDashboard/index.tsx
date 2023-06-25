import React from "react";
import type { MenuProps } from 'antd';
import {Layout, Menu,} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Header } = Layout;




function HeaderDashboard() {
	return (
		
		
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}  />
      </Header>
      
		
	);
}

export default HeaderDashboard;
