import React from 'react'
import { Layout, Menu} from 'antd';
import './index.css'
import {withRouter} from 'react-router-dom'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList = [
    {
        key:"/home",
        title:"首页",
        icon: <UserOutlined />
    },
    {
        key:"/user-manage",
        title:"用户管理",
        icon: <UploadOutlined />,
        children:[{
            key:"/user-manage/list",
            title:"用户列表",
            icon: <VideoCameraOutlined />
        }]
    },
    {
        key:"/right-manage",
        title:"权限管理",
        icon: <UserOutlined />,
        children:[{
            key:"/right-manage/role/list",
            title:"角色列表",
            icon: <UserOutlined />  
        },
        {
            key:"/right-manage/right/list",
            title:"权限列表",
            icon: <UserOutlined />
        }
    ]
    }
]


 function SideMent(props  ) {
    
    const renderMenu = (menuList) =>{
        return menuList.map(item=>{
            if(item.children){
                return <SubMenu key={item.key} 
                                icon={item.icon}
                                title={item.title}>
                                {renderMenu(item.children)}
                                </SubMenu>
                
            }
            return <Menu.Item key={item.key} icon={item.icon} onClick={()=>{
                props.history.push(item.key)
            }}>{item.title}</Menu.Item>
        }

        )
    }

    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo">loglalal</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
            {renderMenu(menuList)}
            </Menu>
        </Sider>
    )
}
export default withRouter(SideMent)
