import React from 'react'
import { Layout, Menu} from 'antd';
import './index.css'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList = [
    {
        key:"",
        title:"",
        icon:""
    }
]

export default function SideMent() {
    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo">loglalal</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
            </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
            </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
            </Menu.Item>
            <SubMenu key="sub4" icon={<UploadOutlined/>} title="asasd">
                <Menu.Item key="9">9</Menu.Item>
                <Menu.Item key="10">10</Menu.Item>
                <Menu.Item key="11">11</Menu.Item>
                <Menu.Item key="12">12</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
    )
}
