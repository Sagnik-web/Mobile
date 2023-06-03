import { AppBar, IconButton, Toolbar, Typography, InputAdornment, TextField, Button, Container, List, ListItem,Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './AdminMobileView.css'
import {Menu} from '@mui/icons-material'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AdminMobileView = ({setState})=>{
    const history = useHistory()
    const [mobileInfo,setMobileInfo] = useState([])
    const [open, setOpen] = useState(false)
    const [pid,setPid] = useState('')
    const [mobileName, setMobileName] = useState('')


    const handelDelete = (ID)=>{
        setOpen(true)
        setPid(ID)
    }

    const deleteItem = (ID)=>{
        axios.delete(`http://localhost:5000/api/v1/mobile/${ID}`)
        .then(res=>{
            console.log(res.data);
            setMobileInfo(mobileInfo =>mobileInfo.filter(item => item._id !== ID))
            setOpen(false)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/mobile')
        .then(res=>{
            console.log(res.data);
            setMobileInfo(res.data.mobileData)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    const nameSearch = ()=>{
        axios.get(`http://localhost:5000/api/v1/mobile?name=${mobileName}`)
        .then(res=>{
            console.log(res.data);
            setMobileInfo(res.data.mobileData)

        })
        .catch(err=>{
            console.log(err);
        })
    }

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
                        Admin Mobile View
                    </Typography>
                    <TextField
                        //   label="With normal TextField"
                        id="outlined-start-adornment"
                        placeholder='Search'
                        sx={{ m: 1, width: 350 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                        value={mobileName} onChange={e => setMobileName(e.target.value)}
                    />
                    <Button color="primary" variant="contained" onClick={()=>nameSearch()}>Search</Button>
                </Toolbar>
            </AppBar>  

            <Container >
                    <List sx={{marginY:5}}>
                        {mobileInfo.map(el=>
                        <ListItem  className='ListItems' sx={{padding: 2 }} key={el._id}>
                            <ListItemAvatar >
                                <Avatar
                                //  src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'
                                 src={el.img_one}
                                 style={{ width: '150px', height: '100px' }}
                                 variant="rounded"
                                />
                            </ListItemAvatar>
                                
                                    <ListItemText sx={{marginLeft: 5}} primary={el.name} secondary={el.price} />
                               
                                    <Button color="primary" variant="contained" onClick={()=>history.push(`/admin/mobileDetails/${el._id}`)}>View More</Button>
                                    <Button sx={{marginLeft: 5}} color="error" variant="contained" onClick={()=>handelDelete(el._id)}>Delete</Button>
                                
                        </ListItem>
                        )}

                    </List>
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

export default AdminMobileView