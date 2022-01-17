import React , {Component} from 'react';
import {Breadcrumb , BreadcrumbItem,
    Form, FormGroup , Col, Label , Input , Button, Row, FormFeedback
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : '',
            agree : false,
            contacType : 'Tel.',
            message : '',
            // theo dõi 1 trường field cụ thể đã được gọi đến hay chưa
            // Trong bài này chỉ có 4 field
            // Cài đặt giá trị boolean để cho biết cụ thể liệu điều đó được gọi đến hay chưa
            // lý do theo dõi nếu giá trị form k có ,
            // thậm chí dk touched bởi ngưởi dùng, người dùng k thể thực hiện
            // thay đổi nào đối với giá trị biểu mẫu đó
            // => theo dõi state cho mỗi input box
            // bất cứ khi nào người dùng thay đổi giá trị input 
            //  giá trị boolean sẽ đổi thành true
            touched : {
                firstname : false,
                lastname : false,
                telnum : false,
                email : false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(event) {
        alert('Current state is : ' + JSON.stringify(this.state))
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    // hàm handleBlur cho biết trường cụ thể nào đã dk sửa đổi
    // đặt giá trị touched tương ứng
    // bat cu thay doi la gi,chi sua truong cu the do va dat no thanh true
    handleBlur = (field) => (evt) => {
        this.setState({
            touched : {...this.state.touched , [field] : true}
        });
    }

    // xac thuc form vs validate
    validate(firstname, lastname , telnum, email) {
        const errors = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : ''
        };

        if(this.state.touched.firstname && firstname.length < 3) {
            errors.firstname = 'First name should be >=3 characters'
        }
        else if(this.state.touched.firstname && firstname.length > 10) {
            errors.firstname = 'First name should be <=10 characters'
        }

        if(this.state.touched.lastname && lastname.length < 3) {
            errors.lastname = 'Last name should be >=3 characters'
        }
        else if(this.state.touched.lastname && lastname.length > 10) {
            errors.lastname = 'Last name should be <=10 characters'
        }

        // reg.test là 1 phương thức dk tích hợp sẵn cho biểu thức chính quy
        // vì vậy, reg.test cho biết nếu bạn cung cấp cho nó 1 chuỗi ở đó
        // nó sẽ trả về giá trị boolean thực hiện tìm kiếm
        // và cho biết liệu form tồn tại trong chuỗi hoặc không
        const reg = /^\d+$/
        if(this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum = "Tel. Number should contain only Number"
        }

        if(this.state.touched.email && email.split('').filter( x => x==='@').length !== 1) {
            errors.email = 'Email should contain a @'
        }

        return errors;
    }

    render() {
        // Cung cấp giá trị hiện tại của fname, lname, tel, email
        // nếu trong chúng có lỗi bất kỳ ( chuỗi lỗi hoặc đối tượng lỗi)
        // từ đây sẽ chứa thông báo lỗi cho hình ảnh tương ứng ( validate)
        const errors = this.validate(
            this.state.firstname , 
            this.state.lastname,
            this.state.telnum, 
            this.state.email
            );
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact US</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact US</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label md={2} htmlFor='firstname'>First Name</Label>
                            <Col md={10}>
                                <Input type='text' name='firstname' id='firstname'
                                    placeholder='First Name'
                                    value={this.state.firstname}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor='lastname'>Last Name</Label>
                            <Col md={10}>
                                <Input type='text' name='lastname' id='lastname'
                                    placeholder='Last Name'
                                    value={this.state.lastname}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor='telnum'>Tel Num</Label>
                            <Col md={10}>
                                <Input type='number' name='telnum' id='telnum'
                                    placeholder='Tel Num'
                                    value={this.state.telnum}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor='email'>EMail</Label>
                            <Col md={10}>
                                <Input type='email' name='email' id='email'
                                    placeholder='EMail'
                                    value={this.state.email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size : 6 , offset : 2}}>
                                <FormGroup check>
                                    <Label check htmlFor='agree'>
                                        <Input type='checkbox' name='agree'
                                            value={this.state.agree}
                                            onChange={this.handleInputChange} />
                                        <strong>May be contact You?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size : 3, offset : 1}}>
                                <Input type='select' name='contacType'
                                    value={this.state.contacType}
                                    onChange={this.handleInputChange}>
                                    <option>Tel.</option> 
                                    <option>Email</option>       
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor='message'>Feedback</Label>
                            <Col md={10}>
                                <Input type='textarea' name='message' id='message'
                                    rows = '9'
                                    value={this.state.message}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size : 4 , offset : 2}}>
                                <Button type='submit' color='primary'>Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }   
}

export default Contact;