import React, { useEffect } from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material'
import {Menu} from '@mui/icons-material'
import { useHistory } from 'react-router-dom'

function AdminMain({setState, isLoggedIn}) {
    // const history = useHistory()
    // useEffect(()=>{
    //     if(!isLoggedIn){
    //      history.push('/admin')
    //     }
    // },[])
  return (
    <>
    <AppBar position="static" color='default'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>setState(true)}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Laptop View
                    </Typography>
                    
                </Toolbar>
            </AppBar> 
        <div>Admin.Main</div>
    </>
  )
}

export default AdminMain