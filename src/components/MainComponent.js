import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComnponent';
import Home from './HomeComponent';
import {Switch , Route , Redirect , withRouter} from 'react-router-dom';
import About from './AboutComponent';
import {connect} from 'react-redux';


//state của redux store thành các props sẽ có sẵn cho component của tôi
// map tất cả state
// cách xác định trạng thái cho main component
// có 4 state : disher , cmt, leader , promotion
// => state nhận dk ở đây là state từ Redux Store
// nếu định dùng Reducer, bạn thấy nó đã đầy đủ các thuộc tính
// cần truy cập 4 điều này trong main component 
// map tất cả thuộc tính sẵn có cho main component
const mapStateToProps = state => {
     return {
      dishes : state.dishes,
      comments : state.comments,
      promotions : state.promotions,
      leaders : state.leaders
     }
}
// => 4 cái này sẽ trở thành props cho main component ??
// làm thế nào để nó thành props cho main
// chúng có nguồn gốc từ redux-store
// kết nối vs redux store
// tất cả state Redux đều có sẵn dưới dạng props

class Main extends Component {

  constructor(props) {
    super(props);
  }

  //  bất cứ điều gì sử dụng state ở đây phải được đổi thành props
  render() {
    const HomePage = () => {
      return (
        <Home 
          dish = {this.props.dishes.filter((dish) => dish.featured)[0]} 
          promotion = {this.props.promotions.filter((promo) => promo.featured)[0]}
          leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }
    

    const DishWithId = ({match}) => {
      var dish1 = parseInt(match.params.dishId,10);
      return (
        <DishDetail        
          dish = {this.props.dishes.filter((dish) => dish.id === dish1)[0]}
          comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path= '/home' component={HomePage} />
          <Route exact path='/aboutus' component = {() => <About leaders = {this.props.leaders} />} />
          <Route exact path= '/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path= '/contactus' component={Contact} /> 
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

// bọc Main ở đây trong 1 connect ( kết nối với Redux store)
// mapStateToProps dưới dạng một trong các tham số
// cần bao nó bằng withRouter
// => đây là cách kết nối component của mình với React-router
export default withRouter(connect(mapStateToProps)(Main));