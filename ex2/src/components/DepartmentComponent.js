import React from "react";
import {
    Card  , CardTitle , CardFooter , CardBody
} from 'reactstrap';

// xây dựng hiển thị phòng ban gồm tên và số lượng nv
function RenderDepart({depart}) {
    return(
        <Card>
            <CardTitle tag='h5'>{depart.name}</CardTitle>
            <CardBody>
                <CardFooter>Số Lượng nhân viên : {depart.numberOfStaff}</CardFooter>
            </CardBody>
        </Card>
    )
}

// xây dựng bố cục toàn trang (duyệt qua mảng gồm các thành phần trong DEPARTMENT với map)
const Department = (props) => {
    const department = props.departs.map((depart) => {
        return(
            <div className="col-12 col-lg-4 col-sm-6">
                <RenderDepart depart={depart} />
            </div>
        )
    })

    return(
        <div className="container">
            <div className="row">
                {department}
            </div>
        </div>
    )
}

export default Department;