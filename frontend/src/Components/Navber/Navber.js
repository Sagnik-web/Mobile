import React, { useEffect, useState } from "react";
import './Navber.css'
import {Link} from 'react-router-dom'
import SideberIcon from '../../Accets/sidebericon.svg'
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie"
import axios from "axios";

const Navber = () =>{
    const navData = useSelector(state => state.user.user)
    // console.log(navData.name);
    let userName = ''
    if(sessionStorage.getItem('name')){
    userName = sessionStorage.getItem('name')
    }
    // const [cookies]  = useCookies()
    return(
        
        <div className="nav_bg">
            <div className="nav_container">
                <div className="nav_logo">
                    Logo
                </div>
                {/* {cookies.mobAuth} */}
                <div className="nav_menu">
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/mobile'><p>Mobile</p></Link>
                    <Link to='/laptop'><p>Laptop</p></Link>
                    <Link to='/tablet'><p>Tablet</p></Link>
                    <Link to='/blog'><p>Blogs</p></Link>
                    {/* <Link to='/myBlog'><p>My Blogs</p></Link> */}
                    <Link to='/feedback'><p>Feedback</p></Link>
                    {/* <Link><p>Compare</p></Link> */}
                    <div className="nav_btn_bg" >
                    <div className="nav_end">
                    {navData ?
                    <div>
                        {/* {navData.name ?(<p>{navData.name}</p>) :null} */}
                         <p>{navData.name}</p>
                         <p>{navData.email}</p>
                         <Link to='/myBlog'><p>My Blogs</p></Link>
                    </div>
                    : <>
                        
                            {userName ? 
                                <div>  
                                    <p>{userName}</p>
                                    <Link to='/myBlog'><p>My Blogs</p></Link>
                                </div>
                            :<UserName/>
                            }
                        </>}
                    </div>
                            {/* <Link to='/login'><p>Login</p></Link>
                            <Link to='/signup'><p>Signup</p></Link> */}
                        </div>
                    
                </div>
                {/* <div className="nav_sideber_icon">
                    <img src={SideberIcon} alt="Sideber Icon"/>
                </div> */}
            </div>
        </div>
    )
}

export default Navber


const UserName =()=>{
    const [myName, setMyName] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/auth/myAccount',{withCredentials:true})
        .then(res=>{
            console.log(res.data.user);
            setMyName(res.data.user.name)
        })
        .catch(err=>{
            console.log(err);
        })
    })
    return(
        <>
        {myName ? <div><p>{myName}</p></div>:
            
            <div className="nav_btn" >
                            <Link to='/login'><p>Login</p></Link>
                            <Link to='/signup'><p>Signup</p></Link>
                        </div>
        }
        </>
    )
}