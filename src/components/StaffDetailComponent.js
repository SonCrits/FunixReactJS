import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, NavItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Breadcrumb , BreadcrumbItem} from 'reactstrap';
import dateFormat from 'dateformat'; 

function RenderStaff({staff}) {
    if (staff != null) {
        return (
            <div className="row">
                <div className="col-12 col-lg-3 col-md-4">
                    <CardImg width='100%' src={staff.image} alt={staff.name}></CardImg>
                </div>
                <div className="col-12 col-lg-9 col-md-8">
                    <CardTitle>Họ và Tên : {staff.name}</CardTitle>
                    <CardText>
                        Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}
                    </CardText>
                    <CardText>
                        Ngày vào công ty : {dateFormat(staff.doB, "dd/mm/yyyy")}
                    </CardText>
                    <CardText>Phòng Ban : {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại : {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm : {staff.overTime}</CardText>
                </div>
            </div>
        )
    }
}



const StaffDetail = (props) => {
    if (props.staff != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/staff'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <RenderStaff staff = {props.staff} />
            </div>
        )
    } else return <div></div>
}

export default StaffDetail;