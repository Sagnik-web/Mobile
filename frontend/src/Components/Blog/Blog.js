import { Avatar, Card, CardHeader, CardMedia, Container, List, ListItem, Typography, CardContent, Box, CardActions, Button } from '@mui/material'
// import { Box } from '@mui/system'
import mobile from '../../Accets/Mob.png'
import React, {useEffect, useState} from 'react'
import './Blog.css'
import axios from 'axios'
// import { padding } from '@mui/system'

const Blog = ()=>{
    const [allBlog, setAllBlog] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/blog')
        .then(res=>{
            console.log(res.data);
            setAllBlog(res.data.allBlog)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return(
        <>
            <Container>
                <Typography variant='h3' mt={5} mb={4}>Blog</Typography>
                {/* <List>
                    <ListItem> */}
                    {allBlog.map(el=>
                        <Card key={el._id} sx={{marginBottom:5}}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red[500]' }}>
                                    A
                                </Avatar>
                            }

                            title={el.userId ? el.userId.name :""}
                            subheader={el.createdAt}
                        />
                        <Box sx={{display:'flex', padding:4}}>
                            <CardMedia
                                component="img"
                                // height="194"
                                sx={{width:500}}
                                image={el.img}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="h4" color="text.primary">
                                    {el.blogTitle}
                                </Typography>
                                <Typography variant="h5" color="text.primary">
                                    {el.blogSubTitle}
                                </Typography>
                                <Typography mt={1} variant="body2" color="text.secondary">
                                    {el.blogMsg}
                                </Typography>
                                
                            </CardContent>
                        </Box>
                    </Card>
                    )}
                        
                    {/* </ListItem>
                </List> */}
            </Container>
        </>
    )
}

export default Blog