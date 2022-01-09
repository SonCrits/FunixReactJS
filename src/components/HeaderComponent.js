import React ,  {Component} from "react";
import { Navbar, NavbarBrand ,Nav ,NavbarToggler , Collapse, NavItem ,
        Button , Modal , ModalHeader , ModalBody
    } from "reactstrap";
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false,
            // phương thức lúc đầu là false
            // biến boolean sẽ theo dõi trạng thái của phương thức nà có đang mở hay không
            // cần triển khai 1 hàm có tên toggleModal
            isModalOpen : false 
        };
        this.toggleNav = this.toggleNav.bind(this);
        //setup toggleModal ràng buộc ( bind ) nó ở đây
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }   

    render () {
        return (
            <div>
                <Navbar dark expand = 'md'>                    
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem><NavLink className='nav-link' to='/home'><span className="fa fa-home fa-lg"></span>Home</NavLink></NavItem>
                                <NavItem><NavLink className='nav-link' to='/aboutus'><span className="fa fa-info fa-lg"></span>About Us</NavLink></NavItem>
                                <NavItem><NavLink className='nav-link' to='/menu'><span className="fa fa-list fa-lg"></span>Menu</NavLink></NavItem>
                                <NavItem><NavLink className='nav-link' to='/contactus'><span className="fa fa-address fa-lg"></span>Contact Us</NavLink></NavItem>
                            </Nav>
                            {/* Thêm 1 thanh điều hướng tại đây */}
                            {/* ml-auto đặt lề trái nhiều nhất có thể tại đây */}
                            {/* nó sẽ đẩy bất cứ thứ j sang cạnh bên phải của navbar */}
                            <Nav className="ml-auto" navbar>
                                {/* Vì đây là 1 navbar khác - 1 phần tử dk điều hướng bên trong navbar */}
                                {/* chúng ta sẽ dùng button - outline button khi dk nhấp vào sẽ chỉ dùng toggleModal*/}
                                {/* Những gì muốn button này thực hiện */}
                                {/* nút này có thể hiển thị và ẩn modal ở đây */}
                                {/* ẩn hiện 1 số icon trong button */}
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>             
                </Navbar>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
                {/* thêm uncontrolled form */}
                {/* Giới thiệu form vào Modalbody */}
                {/* Cần thiết lập 1 phương thức trong state */}
                {/* có thêm thuộc tính isOpen được gán với trạng thái này */}
                {/* Sau đó gọi toggleModal */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                </Modal>
            </div>
            
        )
    }
}

export default Header;