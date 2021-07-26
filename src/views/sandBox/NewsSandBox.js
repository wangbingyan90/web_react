import React from 'react'
import SideMent from '../../components/sandbox/SideMent'
import TopHeader from '../../components/sandbox/TopHeader'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import UserList from '../user-manager/UserList'
import RoleList from '../right-manager/RoleList'
import RightList from '../right-manager/RightList'
import Nopermission from '../nopermission/Nopermission'

import './NewSandBox.css'
import {Layout} from 'antd'
const { Content } = Layout

export default function NewsSandBox() {
    return (
        <Layout>
            <SideMent></SideMent>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                            className="site-layout-background"
                            style={{
                              margin: '24px 16px',
                              padding: 24,
                              minHeight: 280,
                            }}
                >
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/user-manage/list" component={UserList} />
                        <Route path="/right-manage/role/list" component={RoleList} />
                        <Route path="/right-manage/right/list" component={RightList} />
                        <Redirect from="/" to="/home" exact />
                        <Route path="*" component={Nopermission} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}
