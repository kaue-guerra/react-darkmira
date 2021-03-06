import React from 'react';
import { Menu } from 'antd'
import '../../App.css'
import './index.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo" />
                <Menu selectable={false} theme={'dark'} style={{ alignItems: "" }} mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="atendimento">
                        <Link to="/atendimento">Atendimento</Link>
                    </Menu.Item>
                    <Menu.Item key="admin">
                        <Link to="/admin">Administração</Link>
                    </Menu.Item>
                </Menu>

            </div>
        </div>

    );
}

export default Header;