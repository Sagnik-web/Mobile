import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../Featurs/userSlice';
import './Login.css'

function Login() {

  const history = useHistory()
  const [loginForm, setLoginForm] = useState({
    email:'',
    password:''
  })

  const dispatch = useDispatch()

  const handelSubmit =()=>{
    // dispatch(login({
    //   name:"Sagnik"
    // }))
    axios.post('http://localhost:5000/api/v1/auth/login',loginForm,{withCredentials:true})
    .then(res=>{
      console.log(res.data);
      history.push('/')
      dispatch(login({
        name:res.data.name,
        email:res.data.email
      }))
      sessionStorage.setItem("name",res.data.name)
      sessionStorage.setItem("email",res.data.email)

    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="login">
      <div className="login_card">
        <div className="login_container">
          <h3>Welcome !</h3>
          <p>Login to stay connected</p>
          <form>
          <div className="">
          <TextField fullWidth sx={{marginBottom:2}} variant="outlined" type="email" placeholder="abc@xyz.in" label="Email" value={loginForm.email} onChange={(e)=>setLoginForm({...loginForm, email:e.target.value})}></TextField>
          <TextField fullWidth sx={{marginBottom:2}} variant="outlined" type="password" label="Password" value={loginForm.password} onChange={(e)=>setLoginForm({...loginForm, password:e.target.value})}></TextField>
          </div>
          <div className="login_link_rapper">
            <div className="Forgot_Password_link">
                <Link to="/forgot_Password">Forgot Password?</Link>
              </div>
          </div>
          <div className="login_submit">
          <button type="button" onClick={()=>handelSubmit()}>Login</button>
        </div>
        </form>
        <div className="login_link">
            <p>Don't Have an Account <Link to="/Signup">Signup</Link></p>
          </div>
        </div>
      </div>    
      </div>
  );
}

export default Login;
