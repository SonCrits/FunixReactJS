import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {
    constructor (props) {
        super (props);
        this.state = {
            selectStaff : null
        }
    };

    onStaffSelect(staff) {
        this.setState({selectStaff : staff})
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card key={staff.id}>
                    <CardBody>
                    <CardTitle tag="h1">Họ và tên : {staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày Làm thêm: {staff.overTime}</CardText>
                </CardBody>
            </Card>
            );

        }
        else {
            return (
                <div></div>
            );
        }
    };

    render() {

        const staffList = this.props.staffs.map((staff) => {
            return (
                <div className="col-md-3 m-1 p-1 col-sm-4"> 
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });
    return (
        <div className="container">
            <div className="row">
                {staffList}
            </div>
            <div className="row">
                {this.renderStaff(this.state.selectStaff)}
            </div>
        </div>
    )

    }
};

export default StaffList;