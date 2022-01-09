import React , {Component} from 'react';
import {Breadcrumb , BreadcrumbItem,
    Button, Form, FormGroup , Label, Input, Col , Row, FormFeedback
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacType : 'Tel.' , 
            message: '',
            // cai dat gia tri boolean de xem gia tri da duoc goi hay chua ??
            // mỗi trường sau khi đúng sẽ tự động đổi thành giá trị true
            touched : {
                firstname : false,
                lastname : false,
                telnum : false,
                email : false
            }
        }

        this.handSubmit = this.handSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this)
    }
    // sự kiện trong các ô input
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }
    // sự kiện nút button submit
    handSubmit(event) {
        console.log('Current State is : ' + JSON.stringify(this.state));
        alert('Current State is : ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        // bất kể trường hợp input nào thay đổi, sẽ dk đặt là true
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    // chức năng check lỗi
    validate(firstname, lastname, telnum, email) {
        // Xấy dựng 1 đối tượng error ở đây. nếu có lỗi, giá trị cụ thể đó sẽ dk đặt thành thông báo lỗi
        const errors = {
            firstname : '',
            lastname: '',
            telnum: '',
            email: ''
        }

        // Xây dựng 1 số xác nhận
        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 character';
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be < 10 character';

        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 character';
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be < 10 character';

        //các ký tự , chuỗi ký tự toàn là số mà k phải chữ. dành cho sđt 
        const reg = /^\d+$/;
        // kiểm tra điều kiện input của sđt.
        //  reg.test là 1 phương thức dk tích hợp sẵn cho biểu thức chính quy ở đó
        // vì vậy, reg.test cho biết nếu bạn cung cấp cho nó 1 chuỗi ở đó
        // nó sẽ trả về giá trị boolean thực hiện tìm kiếm cho biết form tồn tại trong chuỗi hoặc k
        // kiểm tra tel num xem nhập đúng kiểu reg hay chưa
        // kiểm tra chuỗi phải là số từ 0 đến 9
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'tel. NUmber should contain only numbers';
        else if(this.state.touched.telnum && telnum.length !== 10)
            errors.telnum = 'tel. Number has 10 number'

        // kiểm tra xem từng phần tử của email có @ hay không
        if(this.state.touched.email && email.split('').filter(x => x==='@').length !== 1)
            errors.email = 'Email should contain a @';

        // từ 4 chức năng kiểm tra trên, nó sẽ trả về trường lõi
        return errors;
    }

   
    // kiểm tra trường lỗi ở đây

    render() {
        // cung cấp giá trị hiện tại của fname, lname, tel, mail tới hàm validate
        // nếu bất kỳ lỗi trong chúng xảy ra, sẽ dk trả về hàm validate ở trên
        // thông báo lỗi tương ứng
        const errors = this.validate(this.state.firstname , this.state.lastname , this.state.telnum , this.state.email);
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

                {/* // tạo form feed back */}
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handSubmit}>
                            <FormGroup row>
                                {/* md 2 la voi col-md-2 */}
                                <Label htmlFor="firstname" md={2}>FirstName</Label> 
                                <Col md={10}>
                                    <Input type = "text" id = "firstname" name = "firstname" 
                                        placeholder = "First Name"
                                        value = {this.state.firstname}
                                        // đặt flag hợp lệ cho cả 4 trường với validate và invalidate
                                        // sau đó là lỗi tương ứng sẽ dk thiết lập 1 cách thích hợp
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        // nơi gán touched ở hand Blur
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>   
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>LastName</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname' name='lastname'
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
                                <Label htmlFor='telnum' md={2}>Tel </Label>
                                <Col md={10}>
                                    <Input type='tel' id='telnum' name='telnum'
                                        placeholder='Tel Number'
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}  
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email </Label>
                                <Col md={10}>
                                    <Input type='email' id='email' name='email'
                                        placeholder='Email'
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}  
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                {/* cung giong nhu cach chia cot trong bootstrap */}
                                <Col md={{size :6, offset: 2}}>
                                    {/* checkbox */}
                                    <FormGroup check> 
                                        <Label check>
                                            <Input type='checkbox' name='agree'
                                                checked={this.state.agree} 
                                                onChange={this.handleInputChange}/> {' '}
                                                <strong>May be contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size :3, offset: 1}}>
                                    <Input type='select' name='contactType'
                                        value={this.state.contacType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback </Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name='message'
                                    // thiet lap so hang la 12
                                        rows='12'
                                        value={this.state.message} 
                                        onChange={this.handleInputChange}
                                        />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size : 10 , offset : 2}}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Contact;