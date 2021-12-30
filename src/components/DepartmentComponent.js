import React from "react";
import { Link } from "react-router-dom";
import {Card , CardBody, CardText, CardTitle} from 'reactstrap'


function RenderDepartment({depart, onClick}) {
    return(
        <div className="depart">
            <Link to = {`/depart/${depart.id}`} className="text-decoration-none">
                <Card>
                    <CardTitle tag='h3' className="fw-bold">{depart.name}</CardTitle>
                    <CardBody>
                        <div>
                            <CardText>Số lượng nhân viên : {depart.numberOfStaff}</CardText>
                        </div>
                    </CardBody>
                </Card>    
            </Link>
        </div>      
    )
}

const Department = (props) => {
    const department = props.departs.map((depart) => {
        return (
            <div className="col-12 col-sm-6 col-md-4" key={depart.id}>              
                    <RenderDepartment depart = {depart} onClick={props.onClick} />                             
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