import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AdminLogin.css'

function AdminLogin() {
  const history = useHistory()
  const [loginForm, setLoginForm] = useState({
    email:'',
    password:''
  })

  const handelSubmit =()=>{
    axios.post('http://localhost:5000/api/v1/admin/login',loginForm,{withCredentials:true})
    .then(res=>{
      console.log(res.data);
      history.push('/admin/main')
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="login">
      <div className="admin_login_card">
        <div className="admin_login_container">
          <h3>Welcome Admin!</h3>
          <p>Login to stay connected</p>
          {/* <form> */}
          <div className="">
          <TextField fullWidth sx={{marginBottom:2}} variant="outlined" type="email" placeholder="abc@xyz.in" label="Email" value={loginForm.email} onChange={(e)=>setLoginForm({...loginForm, email:e.target.value})}></TextField>
          <TextField fullWidth sx={{marginBottom:2}} variant="outlined" type="password" label="Password" value={loginForm.password} onChange={(e)=>setLoginForm({...loginForm, password:e.target.value})}></TextField>
          </div>
          
          <div className="admin_login_submit">
          <button type="button" onClick={()=>handelSubmit()}>Login</button>
        </div>
        {/* </form> */}
       
        </div>
      </div>    
      </div>
  );
}

export default AdminLogin;
