import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'


export class NavbarMod extends Component {
    render() {
        return (
            <div>
                <Navbar dark color='success'>
                    <div className='container'>
                        <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default NavbarMod