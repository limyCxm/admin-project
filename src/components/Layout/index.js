import React from 'react'

import { Layout, Menu, Icon } from 'antd';

import './index.less'

const { Header, Sider, Content } = Layout;



class SideBar extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
          <div className="sidebar">
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" >LIMY</div>
                <div className="userInfo">
                    
                </div>
                <Menu theme="white"  defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                    <Icon type="user" />
                    <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            
            </Sider>
            </div>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SideBar;