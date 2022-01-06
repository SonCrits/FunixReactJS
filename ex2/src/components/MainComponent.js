import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComnponent';
import {Switch , Route , Redirect} from 'react-router-dom';
import StaffList from './StaffListComponent';
import DetailStaff from './StaffDetailComponent';
import Department from './DepartmentComponent';
import RenderSalary from './SalaryComponent';
import {STAFFS , DEPARTMENTS } from '../shared/staffs';



class Main extends Component {
  // cấu trúc gồm 2 trạng thái của staffs và departs cho các component
  constructor(props) {
    super(props);
    this.state = {
      staffs : STAFFS,
      departs : DEPARTMENTS
    }
  }


  render() {
    // component staffID khi click vào từng nhân viên để xem chi tiết nhân viên
    const StaffWithId = ({match}) => {
      return (
        // tham chiếu detailstaff với tham số staff = trạng thái staffs lọc tới vị trí đầu tiên trong mảng id  ???
        // nhờ mentor chỉ bảo như tham số match ở kia
        <DetailStaff 
          staff = {this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
        />
      )
    }

    // trả về các component gồm header , footer và phần thân gồm các component chuyển hướng dưới dạng route
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/staff' component = {() => <StaffList staffs = {this.state.staffs} />} />
          <Route exact path='/staff/:staffId' component={StaffWithId} />
          <Route exact path='/depart' component={() => <Department departs = {this.state.departs} />} />
          <Route exact path='/salary' component={() => <RenderSalary staffs={this.state.staffs} />} />
          <Redirect to='/staff/' />
        </Switch>
        <Footer />
      </div>
    )
   
  }
}

export default Main;
