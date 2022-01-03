import React from "react";
import {
    Card , CardBody , CardTitle , CardFooter , CardText,
    Breadcrumb , BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderSalary({staffs}) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    //khai báo cấu trúc dữ liệu được in ra và tính lương
    const SalarList = staffs.map((staff) => {
        const salary = ((staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary)).toFixed(0);
        return(
            <Card className="col-12 col-lg-4 col-sm-6">
                <CardTitle>{staff.name}</CardTitle>
                <CardBody>
                    <CardText>Mã nhân viên : {staff.id}</CardText>
                    <CardText>Hệ số lương : {staff.salaryScale}</CardText>
                    <CardText>Số giờ làm thêm : {staff.overTime}</CardText>
                    <CardFooter>Lương : {salary}</CardFooter>
                </CardBody>
            </Card>
        )
    })
    // dữ liệu in ra theo bootstrap (breachcrum nv , bảng lương , list lương)
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/staff'>Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {SalarList}
            </div>
        </div>
    )
   
}

export default RenderSalary;


