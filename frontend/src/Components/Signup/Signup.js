import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
import axios from 'axios'
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function Signup() {
  const {register, handleSubmit,  watch, formState: { errors }} = useForm()
  const history = useHistory()

  const onSubmit = data=>{
    axios.post('http://localhost:5000/api/v1/auth/register',data ,{withCredentials:true})
    .then(res=>{
      console.log(res.data);
      history.push('/login')
    })
    .catch(err=>{
      console.log(err);
    })

    // console.log("Sagnik");
    // console.log(data);
  }

  return (
  <div className="signup">
    <div className="signup_page">
      <div className="signup_content">
          <h3>Hello There !</h3> 
          
      </div>
      <form>
        <div className="">
          <TextField fullWidth sx={{marginBottom:2}} type="text" variant="outlined" label="Name" placeholder='Ex: abc' {...register("name")} />
          <TextField fullWidth sx={{marginBottom:2}} type="email" variant="outlined" label="Email" placeholder='Ex: abc@xyz.gg' {...register("email")} />
          <TextField fullWidth sx={{marginBottom:2}} type="password" variant="outlined" label="Password" {...register("password")} />
          <TextField fullWidth sx={{marginBottom:2}} type="password" variant="outlined" label="Confirm Password" {...register("confirmPassword")} />
        </div>
        
        <div className="signup_submit">
          <button onClick={handleSubmit(onSubmit)}>Signup</button>
        </div>
        </form>
        <div className="signup_link">
            <p>All ready a member? <Link to="/Login">Login</Link></p>
          </div>
      </div>
    </div>
  );
}

export default Signup;
