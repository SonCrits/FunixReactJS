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
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

// provider component này cho phép định cấu hình ứng dụng React của mình
// rằng Redux store có sẵn cho tất cả các component trong app

class App extends Component {
  

  render() {
    return(
      // provider bao quanh, lay thuoc tinh la thuoc tinh store
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
              <Main />
          </div>
        </BrowserRouter>
      </Provider>   
    )
  }
}
export default App;