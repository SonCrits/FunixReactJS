import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';







import Header from './HeaderComponent';
import Footer from './FooterComnponent';
import StaffList from './StaffListComponent';
import {Switch , Route , Redirect} from 'react-router-dom';

import { STAFFS,DEPARTMENTS} from '../shared/staffs';
import StaffDetail from './StaffDetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
       staffs : STAFFS,
       departs : DEPARTMENTS
    };
  }

  



  render() {
    const StaffWithId = ({match}) => {
      return (
        <StaffDetail
          staff = {this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
        />
      )
    }

  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path= '/staff' component={ () => <StaffList staffs = {this.state.staffs} />} />
          <Route exact path='/staff/:staffId' component={StaffWithId} />
          <Route exact path='/depart' component={() => <Department departs = {this.state.departs} /> } />
          <Route exact path='/salary' component={() => <Salary staffs = {this.state.staffs} /> } />
          <Redirect to="/staff"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default Main;