import React from "react";
import {
    CardImg , CardTitle,CardText,
    BreadcrumbItem, Breadcrumb
} from 'reactstrap';
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
//xây dựng khung trả về nhân viên được chọn
function RenderStaff ({staff}) {
    if(staff != null) {
        return(
            <div className="row">
                <div className="col-12 col-lg-3 col-sm-4">
                    <CardImg width='100%' src={staff.image} alt={staff.name} />
                </div>
                <div className="col-12 col-lg-9 col-sm-8">
                    <CardTitle tag='h4'>Họ và Tên : {staff.name}</CardTitle>
                    <CardText>Ngày Sinh : {dateFormat(staff.doB,'dd/mm/yyyy')}</CardText>
                    <CardText>Ngày vào công ty : {dateFormat(staff.startDate,'dd/mm/yyyy')}</CardText>
                    <CardText>Phòng Ban : {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại : {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm : {staff.overTime}</CardText>
                </div>
            </div>
        )
    } else return <div></div>
}
// trả về dưới dạng bootstrap và bố cục toàn trang (thêm 2 breadcumbItem)
const DetailStaff = (props) => {
    if(props.staff != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/staff'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <RenderStaff staff={props.staff} />
            </div>
        )
    } else return <div></div>
}

export default DetailStaff;