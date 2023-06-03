import { Button, Card, CardActions, CardContent, Container, List, ListItem, ListItemText, Rating, TextareaAutosize, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material'
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './Feedback.css'
import { useForm } from 'react-hook-form'

const Feedback = ()=>{
    const [feedbackData, setFeedbackData ] = useState([])
    const [feedbackUserData, setFeedbackUserData ] = useState({})
    const [open, setOpen] = useState(false)
    const {register, handleSubmit} = useForm()

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

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/feedback`,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setFeedbackUserData(res.data.feedback)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    const onSubmit = data =>{
        console.log(data);
        axios.post(`http://localhost:5000/api/v1/feedback`,data, {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            // setFeedbackData(res.data.allFeedback)
        })
        .catch(err=>{
            console.log(err);
        })
    }


    const deleteItem = ()=>{
        axios.delete(`http://localhost:5000/api/v1/feedback`,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
            // setOpen(false)
        })
        .catch(err=>{
            console.log(err);
        })
      }

    return(
        <>
            <Container>
                <Typography variant='h3' mt={3} sx={{textAlign:'center'}}>
                    Feedback
                </Typography>
                <div className='feedback'>
                    <div>
                        <Typography variant='h4' mt={1} mb={1}>
                            About
                        </Typography>
                            
                        <Typography variant='p' mt={1} mb={1}>
                            Data
                        </Typography>
                    </div>
                    <div>
                        {!feedbackUserData.feedbackMsg ? (
                        <Card>
                            <CardContent>
                                <Typography variant='h4' mt={1} mb={1} sx={{textAlign:'center'}}>
                                    Give Your Feedback
                                </Typography>
                            
                                {/* <TextField variant='outline' label="Email Address"/> */}
                                <Rating
                                    defaultValue={2.5} precision={0.5}
                                    size='large'
                                    {...register('ratting')}
                                />
                                <br></br>
                                <TextareaAutosize
                                    {...register('feedbackMsg')}
                                    minRows={3}
                                    placeholder="Minimum 3 rows"
                                    style={{ width: 300, marginTop:15, fontSize:16, padding:7 }}
                                />
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' fullWidth  onClick={handleSubmit(onSubmit)}>Submit</Button>
                            </CardActions>
                        </Card>
                        ):(
                        <Card>
                            <CardContent>
                                <Typography variant='h4' mt={1} mb={1} sx={{textAlign:'center'}}>
                                    Your Feedback
                                </Typography>
                            
                                {/* <TextField variant='outline' label="Email Address"/> */}
                                <Rating
                                    defaultValue={2.5} precision={0.5}
                                    size='large'
                                />
                                <br></br>
                                <Typography variant='p' mt={1} mb={1} sx={{textAlign:'center'}}>
                                    {feedbackUserData.feedbackMsg}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color="error" fullWidth  onClick={()=>setOpen(true)}>Delete</Button>
                            </CardActions>
                        </Card>
                        )}
                        
                    </div>
                </div>

                <Typography variant='h3' mt={5} mb={3} sx={{textAlign:'center'}}>
                    Reviews
                </Typography>
                <div className='review'>
                    <List >
                        {feedbackData.map(el=>
                        <ListItem  sx={{backgroundColor:'rgb(228, 228, 227)', marginBottom:3 }} key={el._id}>
                             {/* <ListItemText sx={{width:100}} primary={<Typography  variant='h5'>Name</Typography>}/> */}
                             <Typography ml={2} mr={5}  variant='h5'>Name</Typography>
                             <ListItemText 
                                 primary={<Rating defaultValue={4.5} precision={0.5} readOnly/>}
                                 secondary="This Web Site is very Helpfull. for serchis About Mobile Feedback Msg"
                             />
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
                        <Button variant='contained' color="error" onClick={()=>deleteItem()}>Ok</Button>
                    </DialogActions>
            </Dialog>

        </>
    )
}

export default Feedback