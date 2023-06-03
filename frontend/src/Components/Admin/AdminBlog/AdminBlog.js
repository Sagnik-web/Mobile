import React,{useEffect, useState} from 'react'
import './AdminBlog.css'
import {Menu} from '@mui/icons-material'
import { Avatar, Card, CardHeader, CardMedia, Container, List, ListItem,Toolbar,IconButton, Typography, CardContent, Box, CardActions, Button, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, AppBar } from '@mui/material'
import mobile from '../../../Accets/Mob.png'
import axios from 'axios'


const AdminBlog = ({setState})=>{
    const [open, setOpen] = useState(false)
    const [pid,setPid] = useState('')
    const [blogData, setBlogData] = useState([])

    const handelDelete = (ID)=>{
        setOpen(true)
        setPid(ID)
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/blog')
            .then(res=>{
                console.log(res.data.allBlog);
                setBlogData(res.data.allBlog)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    const deleteItem =(ID)=>{
        axios.delete(`http://localhost:5000/api/v1/blog/${ID}`)
             .then(res=>{
                 console.log(res.data);
                 setBlogData(blogData.filter(el=>el._id != ID))
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
                </Toolbar>
            </AppBar>
           <Container>
                <Typography variant='h3' mt={5} mb={4}>Blog</Typography>
                {/* <List>
                    <ListItem> */}
                    {blogData.map(el=>

                        <Card key={el._id} sx={{marginBottom:'25px'}}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: 'red[500]' }}>
                                        A
                                    </Avatar>
                                }

                                title={el.userId ? el.userId.name : ""}
                                subheader={el.createdAt}
                            />
                            <Box sx={{display:'flex',padding:4}}>
                                <CardMedia
                                    component="img"
                                    sx={{width:'500px'}}
                                    // width="300"
                                    image={el.img}
                                    alt="Paella dish"
                                />
                                <CardContent >
                                    <Typography variant="h4" color="text.primary">
                                        {el.blogTitle}
                                    </Typography>
                                    <Typography variant="h6" color="text.primary">
                                        {el.blogSubTitle}
                                    </Typography>
                                    <Typography mt={1} variant="body2" color="text.secondary">
                                        {el.blogMsg}
                                    </Typography>
                                    <CardActions sx={{display: 'flex', justifyContent:'end', marginTop:2}}>
                                        <Button variant="contained" color='error' onClick={()=>handelDelete(el._id)}>Delete</Button>
                                    </CardActions>
                                </CardContent>
                            </Box>
                        </Card>
                    )}

                    {/* </ListItem>
                </List> */}
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

export default AdminBlog