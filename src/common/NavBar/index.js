import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {Icon} from 'antd'
import './NavBar.css'

const Header = Navbar.Header;
const Brand = Navbar.Brand;



class NavBar extends Component {
    render() {
        return (
            <Navbar className={'navbar'}>
                <Header>
                    <Brand>
                        <a href="/">MiniTube</a>
                    </Brand>

                </Header>
                <Nav pullRight>
                        <NavItem className="navItem" eventKey={1} href="#"> 
                            <Icon type="cloud-upload" />
                            Upload Video
                        </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;