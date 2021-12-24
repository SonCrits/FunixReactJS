import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/MenuComponent';
import React , {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import StaffList from './components/StaffListComponent';
import NavbarMod from './components/NavBarComponent';
import {STAFFS} from './shared/staffs';
import Main from './components/MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }

  render() {
    return(
      <BrowserRouter>
         <div className='App'>
            <Main />
        </div>
      </BrowserRouter>
     
    )
  }
}
export default App;