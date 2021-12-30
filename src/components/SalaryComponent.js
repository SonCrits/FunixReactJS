import React from "react";
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb , BreadcrumbItem, CardText, CardFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import StaffList from "./StaffListComponent";


function Salary({staffs}) {
    const basicSalary = 3000000;

    const overTimeSalary = 200000;
    
    const SalaryList = staffs.map((staff) => {
        var salary = (staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary);
        console.log(salary);
        return (
                    <div className="col-12 col-lg-4 col-sm-6" key={staff.id}>
                        <Card>
                            <CardTitle tag='h3'>{staff.name}</CardTitle>
                            <CardText>Mã nhân viên : {staff.id}</CardText>
                            <CardText>Hệ số lương : {staff.salaryScale}</CardText>
                            <CardText>Số Giờ làm thêm : {staff.overTime}</CardText>
                            <div>
                                <CardFooter>Lương : {salary.toFixed(0)} </CardFooter>
                            </div>
                        </Card>
                    </div>        
        )
    })
       
   

    return (
        <div className="container">
            <div className="row">
                {SalaryList}
            </div>
        </div>
    );
}

export default Salary;