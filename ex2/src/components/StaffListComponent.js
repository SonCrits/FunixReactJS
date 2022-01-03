import React from "react";
import {Card , CardBody , CardTitle , CardImg} from 'reactstrap';
import { Link } from "react-router-dom";

// xây dựng hiển thị của nhân viên gồm ảnh và tên
function RenderStaff ({staffp}) {
    return(
        <Link to={`/staff/${staffp.id}`} className="text-decoration-none">
            <Card>
                <CardImg width='100%' src={staffp.image} alt={staffp.name} />
                <CardBody>
                    <CardTitle tag='h4'>{staffp.name}</CardTitle>
                </CardBody>
            </Card>
        </Link>
    )
}

// xây dựng bố cục trang
const StaffList = (props) => {
    const staff = props.staffs.map((staff) => {
        return(
            <div className="col-12 col-lg-2 col-sm-4"  key={staff.id}>
                <RenderStaff staffp={staff} />
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <h3>Nhân Viên</h3>
                <hr></hr>
            </div>
            <div className="row">
                {staff}
            </div>
        </div>
    )
}

export default StaffList;