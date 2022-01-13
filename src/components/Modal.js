import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import {Control, Errors , LocalForm } from 'react-redux-form';
import { Button, Col, FormGroup, Label, Row,
     Modal, ModalBody, ModalHeader } 
     from 'reactstrap';

const required = (val) => val && val.length;

// hàm maxlength nhận len làm tham số
// len nhỏ hơn hoặc = giá trị độ dài mà tham số dk chỉ định
// đảm bảo độ dài tối đa được nhập vào ô input
const maxLength = (len) => (val) => !(val) || (val.length <= len)
// tương tự với minlength
const minLength = (len) => (val) => (val) && (val.length >= len)

const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function ModalComponent () {
    const [modal,setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div style={{
            display: 'block' , width: 700, padding: 30
        }}>
            <Button color='primary' onClick={toggle}>
                <span className='fa fa-pencil'></span>
                Submit Comment
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className='fw-bold'>
                  <h3>Submit Comment</h3>  
                </ModalHeader>
                <ModalBody className='row row-content'>
                    <LocalForm>
                        <Row className='form-group'>
                            <Label htmlFor='raiting' className='fw-bold'>Raiting</Label>
                            <Col>
                                <Control.select model='.raiting' id='raiting' name='raiting'
                                    className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='yourname' className='fw-bold'>Your Name</Label>
                            <Col>
                                <Control.text model='.yourname' id='yourname' name='yourname'
                                    className='form-control' 
                                    validators={{
                                        required,
                                        minLength : minLength(3),
                                        maxLength : maxLength(15)
                                    }}
                                />
                                    
                                
                                <Errors 
                                    className='text-danger'
                                    model='.yourname'
                                    show = 'touched'
                                    messages={{
                                        required : 'Required',
                                        minLength : 'Must be greater than 2 character',
                                        maxLength : 'Must be 15 character or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='comment' className='fw-bold'>Comments</Label>
                            <Col>
                                <Control.textarea model='.comment' id='comment' name='comment'
                                    className='form-control'
                                    rows='6'
                                >

                                </Control.textarea>

                            </Col>
                        </Row>
                        <br />
                        <Row className='form-group md' style={{
                            textAlign : 'left'
                        }}>
                            <Col>
                                <Button type='submit' color='primary'>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>        
            </Modal>
        </div>
    )
}

export default ModalComponent;
