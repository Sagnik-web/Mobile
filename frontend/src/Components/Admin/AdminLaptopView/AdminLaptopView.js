import { AppBar, IconButton, Toolbar, Typography, InputAdornment,Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, TextField, Button, Container, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import {Menu} from '@mui/icons-material'
import { useHistory } from 'react-router-dom'
import React,{useEffect, useState} from 'react'
import './AdminLaptopView.css'
import axios from 'axios'

const AdminLaptopView = ({setState})=>{
    const history = useHistory()
    const [laptopInfo,setLaptopInfo] = useState([])
    const [open, setOpen] = useState(false)
    const [pid,setPid] = useState('')
    const [laptopName, setLaptopName] = useState('')


    const handelDelete = (ID)=>{
        setOpen(true)
        setPid(ID)
    }

    const deleteItem = (ID)=>{
        axios.delete(`http://localhost:5000/api/v1/laptop/${ID}`)
        .then(res=>{
            console.log(res.data);
            setLaptopInfo(laptopInfo =>laptopInfo.filter(item => item._id !== ID))
            setOpen(false)
        })
        .catch(err=>{
            console.log(err);
        })
    }

   

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/laptop')
        .then(res=>{
            console.log(res.data);
            setLaptopInfo(res.data.laptopData)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    const nameSearch = ()=>{
        axios.get(`http://localhost:5000/api/v1/laptop?name=${laptopName}`)
        .then(res=>{
            console.log(res.data);
            setLaptopInfo(res.data.laptopData)
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
                        Admin Laptop View
                    </Typography>
                    <TextField
                        //   label="With normal TextField"
                        id="outlined-start-adornment"
                        placeholder='Search'
                        sx={{ m: 1, width: 350 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                        value={laptopName} onChange={e=>setLaptopName(e.target.value)}
                    />
                    <Button color="primary" variant="contained" onClick={()=>nameSearch()}>Search</Button>
                </Toolbar>
            </AppBar>  

            <Container >
                    <List sx={{marginY:5}}>
                        {laptopInfo.map(el=>
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
                               
                                    <Button color="primary" variant="contained" onClick={()=>history.push(`/admin/laptopDetails/${el._id}`)}>View More</Button>
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

export default AdminLaptopView