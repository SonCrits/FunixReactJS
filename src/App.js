import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import StaffList from './components/StaffListComponent';
import NavbarMod from './components/NavBarComponent';
import {STAFFS} from './shared/staffs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }

  render() {
    return(
      <div className='App'>
        <NavbarMod />
        <StaffList staffs ={this.state.staffs} />
      </div>
    )
  }
}
export default App;
