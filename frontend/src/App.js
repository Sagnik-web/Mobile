import React from "react";
import {Switch, Route} from 'react-router-dom'
import Admin from "./Components/Admin/Admin";
import Blog from "./Components/Blog/Blog";
import Compare from "./Components/Compare/Compare";
import Feedback from "./Components/Feedback/Feedback";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Laptop from "./Components/Laptop/Laptop";
import LaptopDetail from "./Components/LaptopDetail/LaptopDetail";
import Login from "./Components/Login/Login";
import Mobile from "./Components/Mobile/Mobile";
import MobileDetails from "./Components/MobileDetail/MobileDetails";
import MyBlog from "./Components/MyBlog/MyBlog";
import Navber from "./Components/Navber/Navber";
import Signup from "./Components/Signup/Signup";
import Tablet from "./Components/Tablet/Tablet";
import TabletDetail from "./Components/TabletDetail/TabletDetail";

function App() {
  return (
    <>
    <Navber/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/feedback' component={Feedback}/>
      <Route path='/mobile' component={Mobile}/>
      <Route path='/laptop' component={Laptop}/>
      <Route path='/tablet' component={Tablet}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/compare' component={Compare}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/myBlog' component={MyBlog}/>
      <Route path="/mobileDetail/:productID" component={MobileDetails}/>
      <Route path="/laptopDetail/:productID" component={LaptopDetail}/>
      <Route path="/tabletDetail/:productID" component={TabletDetail}/>
    </Switch>
    <Footer/>
   </>
  );
}


export default App;
