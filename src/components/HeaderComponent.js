import React ,  {Component} from "react";
import { Navbar, NavbarBrand ,Nav ,NavbarToggler , Collapse, NavItem} from "reactstrap";
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }


    render () {
        return (
            <div>
                <Navbar dark expand = 'md'>                    
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo_funix.png' height="30" width="41" alt='Funix' /></NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem><NavLink className='nav-link' to='/staff'><span className="fa fa-home fa-lg"></span>Nhân Viên</NavLink></NavItem>
                                <NavItem><NavLink className='nav-link' to='/depart'><span className="fa fa-info fa-lg"></span>Phòng Ban</NavLink></NavItem>
                                <NavItem><NavLink className='nav-link' to='/salary'><span className="fa fa-address fa-lg"></span>Bảng Lương</NavLink></NavItem>
                            </Nav>
                        </Collapse>             
                </Navbar>            
            </div>         
        )
    }
}

export default Header;