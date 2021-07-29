import React,{useEffect, useState} from 'react'
import { Layout, Menu} from 'antd';
import './index.css'
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const iconList = {
    "/home": <UserOutlined />,
    "/user-manage/list": <VideoCameraOutlined />,
    "/right-manage/role/list": <UploadOutlined />,
    "/right-manage/right/list": <VideoCameraOutlined />,
    "/user-manage": <UploadOutlined />,
    "/right-manage": <UserOutlined />
}

 function SideMent(props) {
    const [menu,setMenu] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/posts").then(
                res=>{
                    console.log(res.data)
                    setMenu(res.data)
                }
        )
    },[])
    
    const renderMenu = (menuList) =>{
        return menuList.map(item=>{
            if(item.children){
                return <SubMenu key={item.key} 
                                icon={iconList[item.key]}
                                title={item.title}>
                                {renderMenu(item.children)}
                                </SubMenu>
                
            }
            return <Menu.Item key={item.key} icon={iconList[item.key]} onClick={()=>{
                props.history.push(item.key)
            }}>{item.title}</Menu.Item>
        }

        )
    }

    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo">loglalal</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
            {renderMenu(menu)}
            </Menu>
        </Sider>
    )
}
export default withRouter(SideMent)
