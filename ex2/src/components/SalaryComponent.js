import React, {useState} from "react";
import {
    Card,CardBody,CardText,CardTitle,
    BreadcrumbItem,Breadcrumb
} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderSalary({staffs}) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const [value , setValue] = useState("idAscending");
    const choice = (e) => {
        setValue(e.target.value);
    }

    if(value === "idAscending") {
        staffs.sort((a,b) => {
            return(
                a.id - b.id
            );
        });
    }
    if(value === "idDescending") {
        staffs.sort((a,b) => {
            return(
                b.id - a.id
            );
        });
    }
    if(value === "salaryAscending") {
        staffs.sort((a,b) => {
            return(
                a.salaryScale * basicSalary + a.overTime * overTimeSalary-
                (b.salaryScale * basicSalary + b.overTime * overTimeSalary)
            );
        });
    }
    if(value === "salaryDescending") {
        staffs.sort((a,b) => {
            return(
                b.salaryScale * basicSalary + b.overTime * overTimeSalary -
                (a.salaryScale * basicSalary + a.overTime * overTimeSalary)
            );
        });
    }

    const salaryList = staffs.map((staff) => {
        var salary = staff.salaryScale * basicSalary + staff.overTime * overTimeSalary;
        return (
            <div className="col-12 col-lg-4 col-sm-6 p-3" tooltipConta>
                <Card key={staff.id} className="border border-success py-2">
                    <CardTitle tag='h4' className="text-center fw-bold text-success">{staff.name}</CardTitle>
                    <hr />
                    <CardText>
                        Mã nhân viên : {' '} <span className="text-danger">{staff.id}</span>
                    </CardText>
                    <CardText>
                        Hệ Số Lương : {' '} <span className="text-danger">{staff.salaryScale}</span>
                    </CardText>
                    <CardText>
                        Giờ tăng ca : {' '} <span className="text-danger">{staff.overTime}</span>
                    </CardText>
                    <CardText>
                        Lương : {' '} <span className="text-danger border border-warning rounded">{salary.toLocaleString("it-IT",{
                            style : 'currency',
                            currency : "VND"
                        })}</span>
                    </CardText>
                </Card>
            </div>
          );
    })

    return (
        <div className="container my-3">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/staff'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Salary</BreadcrumbItem>
            </Breadcrumb>
            <hr />
            <div className="container">
                <select
                    className="my-3 border border-success rounded py-1"
                    value={value}
                    onChange={choice}
                >
                    <option selected disabled value='idAscending'>Sort</option>
                    <option value='idAscending'>ID up</option>
                    <option value='idDescending'>Id down</option>
                    <option value='salaryAscending'>salary Up</option>
                    <option value='salaryDescending'>salary Down</option>
                </select>
            </div>
            <div className="row">
                {salaryList}
            </div>
        </div>
      );
}

export default RenderSalary;