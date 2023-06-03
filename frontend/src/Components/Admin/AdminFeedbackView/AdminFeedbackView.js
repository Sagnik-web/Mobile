import React, { useEffect, useState } from 'react'
import './AdminFeedbackView.css'
import { AppBar, IconButton, Toolbar, Typography, InputAdornment, TextField, Button,Rating, Container, List, ListItem, ListItemAvatar, Avatar, ListItemText, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import {Menu} from '@mui/icons-material'
import axios from 'axios'

const AdminFeedbackView = ({setState})=>{
    const [open, setOpen] = useState(false)
    const [pid, setPid] = useState('')
    const [feedbackData, setFeedbackData ] = useState([])

    const deleteHandel = (ID)=>{
        setPid(ID)
        setOpen(true)
    }

    const deleteItem = (ID)=>{
        axios.delete(`http://localhost:5000/api/v1/feedback/${ID}`)
        .then(res=>{
            console.log(res.data);
            setOpen(false)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/feedback/all`)
        .then(res=>{
            console.log(res.data);
            setFeedbackData(res.data.allFeedback)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])


    return(
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
                        Admin Feedback View
                    </Typography>
                    <TextField
                        //   label="With normal TextField"
                        id="outlined-start-adornment"
                        placeholder='Search'
                        sx={{ m: 1, width: 350 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />
                    <Button color="primary" variant="contained">Search</Button>
                </Toolbar>
            </AppBar>  
            
            <Container>
                <Typography variant='h3' mt={5} mb={3} sx={{textAlign:'center'}}>
                  Admin Reviews
                </Typography>
                <div className='review'>
                    <List >
                        {feedbackData.map(el=>
                        <ListItem  sx={{backgroundColor:'rgb(228, 228, 227)', marginBottom:3 }} key={el._id}>
                            <ListItemText sx={{width:100}} primary={<Typography  variant='h5'>Name</Typography>} secondary={<Typography  variant='h6'>email</Typography>}/>
                            {/* <Typography ml={2} mr={5}  variant='h5'>Name</Typography> */}
                            <ListItemText 
                                primary={<Rating defaultValue={4.5} precision={0.5} readOnly/>}
                                secondary="This Web Site is very Helpfull. for serchis About Mobile Feedback Msg"
                            />
                            <Button variant='contained' color="error" onClick={()=>deleteHandel(el._id)}>Delete</Button>
                        </ListItem>
                        )}
    
                    </List>    
                </div>
                </Container>
                <Dialog open={open} onClose={()=>setOpen(false)}>
                    <DialogTitle>
                        Delete
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Do you want to Delete?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='outlined' color="primary" onClick={()=>setOpen(false)}>Cancel</Button>
                        <Button variant='contained' color="error" onClick={()=>deleteItem(pid)}>Ok</Button>
                    </DialogActions>
                </Dialog>
        </>
    )
}

export default AdminFeedbackView