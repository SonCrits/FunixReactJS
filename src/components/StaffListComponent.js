import React  from "react";
import {Card ,CardBody,CardTitle, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderStaffList({staff}) {
    return (
        <Card>
            <Link to={`/staff/${staff.id}`} className='text-decoration-none'>
                <CardImg width='100%' src={staff.image} alt={staff.name} />
                <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    )
}

const StaffList = (props) => {
    const staff = props.staffs.map((staff) => {
        return (
            <div className="col-12 col-lg-2 col-sm-4" key={staff.id}>
                <RenderStaffList staff={staff}/>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <h3>Nhân Viên</h3>
                <hr/>
            </div>
            <div className="row">
                {staff}
            </div>
        </div>
    )
}

export default StaffList;