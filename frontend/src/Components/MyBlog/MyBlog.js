import { Box, Button, Container, CardMedia, Typography, CardContent, Card, CardActions, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, TextareaAutosize, DialogActions } from '@mui/material';
import React, { useEffect, useState } from 'react';
import mobile from '../../Accets/Mob.png'
import user from '../../Accets/user.png'
import axios from 'axios';
import { useForm } from 'react-hook-form';


function MyBlog() {
    const {register, handleSubmit} = useForm()

    const [isBlogTitleFocused, setIsBlogTitleFocused] = useState(false);
    const [isBlogSubTitleFocused, setIsBlogSubTitleFocused] = useState(false);
    const [isBlogMsgFocused, setIsBlogMsgFocused] = useState(false);
    // const [isBlogTitleFocused, setIsBlogTitleFocused] = useState(false);

    const [dialogShow, setDialogShow] = useState(false)
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [image1, setImage1] = useState({ preview: "", raw: "" });
    const [firstImg,setFirstImg] = useState('')
    const [allBlog, setAllBlog] = useState([])
    const [pid,setPid] = useState('')
    const [editBlog, setEditBlog] = useState({})

    const firstHandleChange = e => {
        if (e.target.files.length) {
          setImage1({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
        console.log(image1);
      };

      const handleUpload = () => {
        // e.preventDefault();
        // if(image1.raw){
        const formData1 = new FormData();
        formData1.append("file", image1.raw);
    
        axios.post('http://localhost:5000/api/v1/mobile/imgUpload',formData1)
          .then(res=>{
            // console.log(res.data.filename);
            setFirstImg("http://localhost:5000/api/v1/img/"+res.data.filename)
            // register('img_one') = res.data.filename
          })
          .catch(err=>{
            console.log(err);
          })
        // }
        }

        const onSubmit = data =>{
            data.img = firstImg
            console.log(data);
            axios.post('http://localhost:5000/api/v1/blog',data ,{withCredentials:true})
                 .then(res=>{
                     console.log(res.data);
                     newDialogBox()
                 })
                 .catch(err=>{
                     console.log(err);
                 })
        }

    const onEditSubmit = data =>{
            data.img = firstImg
            if(!data.blogTitle){
                data.blogTitle = editBlog.blogTitle
            }
            if(!data.blogSubTitle){
                data.blogSubTitle = editBlog.blogSubTitle
            }
            if(!data.blogMsg){
                data.blogMsg = editBlog.blogMsg
            }
            if(!data.img){
                data.img = editBlog.img
            }
            console.log(data);
            axios.patch(`http://localhost:5000/api/v1/blog/${pid}`,data ,{withCredentials:true})
                 .then(res=>{
                     console.log(res.data);
                     dialogBox()
                 })
                 .catch(err=>{
                     console.log(err);
                 })
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/blog/my',{withCredentials:true})
        .then(res=>{
            console.log(res.data.myBlog);
            setAllBlog(res.data.myBlog)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    const deleteItem = (ID)=>{
        axios.delete(`http://localhost:5000/api/v1/blog/${ID}`,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
            // setAllBlog(res.data.myBlog)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    const deleteDialog = (ID)=>{
        setOpen(true)
        setPid(ID)
    }

    const editDialog = (val)=>{
        setOpenEdit(true)
        setPid(val._id)
        setEditBlog(val)
    }

    const dialogBox = ()=>{
        setOpenEdit(false)
        setIsBlogTitleFocused(false)
        setIsBlogMsgFocused(false)
        setIsBlogSubTitleFocused(false)
        setImage1({preview:"", raw:""})
    }

    const newDialogBox = ()=>{
        setImage1({preview:"", raw:""})
        setDialogShow(false)
    }

  return (
    <>
        <Container>
            <Box mt={4} mb={3} sx={{display:'flex', justifyContent:'space-between'}}>
                <Typography variant='h3'> My Blog</Typography>
                <div>
                <Button variant='contained' color='success' onClick={()=>setDialogShow(true)}>New Blog</Button>
                </div>
            </Box>
                {/* <List>
                    <ListItem> */}
                    {allBlog.map(el=>
                        <Card key={el._id}>
                           
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

                                <Typography mt={1} variant="h6" color="text.secondary">
                                    {el.blogSubTitle}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    {el.blogMsg}
                                </Typography>
                                <Typography mt={1} fontSize={12} variant="body2" color="text.secondary">
                                    Published At: {el.createdAt}
                                </Typography>
                                <CardActions sx={{display: 'flex', justifyContent:'end', marginTop:2}}>
                                    <Button variant='contained' color='primary' onClick={()=>editDialog(el)}>Edit</Button>
                                    <Button variant='contained' color='error' onClick={()=>deleteDialog(el._id)}>Delete</Button>
                                    {/* onClick={()=>deleteDialog()} */}
                                </CardActions>
                            </CardContent>
                        </Box>
                    </Card>
                    )}
                        
                    {/* </ListItem>
                </List> */}
            </Container>

            <Dialog open={dialogShow} onClose={()=>newDialogBox()}>
                <DialogTitle>New Blog</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        
                    </DialogContentText>
                    <Box mt={2}>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <img
                            src={image1.preview ? image1.preview : user}
                            alt="Blog Picture"
                            width={150}
                        />
                        <label htmlFor="first-upload-photo">
                            <input
                              style={{ display: 'none' }}
                              id="first-upload-photo"
                              name="first-upload-photo"         
                              type="file"
                              onChange={firstHandleChange}
                            />
                            <input  style={{ display: 'none' }} value={firstImg} {...register('img')}/>
                        <div>
                            <Button color="primary"  type="button" variant="contained" component="span">
                              Upload Image
                            </Button>
                            <Button color="primary"  type="button" variant="contained" onClick={()=>handleUpload()}>
                              Save Image
                            </Button>
                        </div>
                        </label>
                    </Box>
                    <Box mt={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Blog Title"
                            type="text"
                            fullWidth
                            variant='outlined'
                            {...register('blogTitle')}

                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            label="Blog Sub Title"
                            type="text"
                            fullWidth
                            variant='outlined'
                            {...register('blogSubTitle')}

                        />

                        <TextareaAutosize
                            
                             aria-label="minimum height"
                             minRows={4}
                             margin="dense"
                             placeholder="Messege"
                            style={{width:529, padding:10, fontSize:17, marginTop:7 }}
                            {...register('blogMsg')}
                            // fullWidth
                        />
                    </Box>
                    </Box>
                    <DialogActions>
                        <Button variant='contained' color='error' onClick={()=>newDialogBox()}>Cancel</Button>
                        <Button variant='contained' color='success' onClick={handleSubmit(onSubmit)} >Submit</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

            <Dialog open={openEdit} onClose={()=>dialogBox()}>
                <DialogTitle>Edit Blog</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        
                    </DialogContentText>
                    <Box mt={2}>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <img
                            src={image1.preview ? image1.preview : editBlog.img}
                            alt="Blog Picture"
                            width={150}
                        />
                        <label htmlFor="first-upload-photo">
                            <input
                              style={{ display: 'none' }}
                              id="first-upload-photo"
                              name="first-upload-photo"         
                              type="file"
                              onChange={firstHandleChange}
                            />
                            <input  style={{ display: 'none' }} value={firstImg} {...register('img')}/>
                        <div>
                            <Button color="primary"  type="button" variant="contained" component="span">
                              Upload Image
                            </Button>
                            <Button color="primary"  type="button" variant="contained" onClick={()=>handleUpload()}>
                              Save Image
                            </Button>
                        </div>
                        </label>
                    </Box>
                    <Box mt={1}>
                    {!isBlogTitleFocused ? (
                        <Typography
                            // className={classes.name}
                            onClick={() => {
                                setIsBlogTitleFocused(true);
                            }}
                        >
                        {editBlog.blogTitle}
                        </Typography>
                    ):( 
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Blog Title"
                            type="text"
                            fullWidth
                            variant='outlined'
                            // d ={editBlog.blogTitle}
                            // value={}
                            {...register('blogTitle')}

                        />)}

                        {!isBlogSubTitleFocused ? (
                        <Typography
                            // className={classes.name}
                            onClick={() => {
                                setIsBlogSubTitleFocused(true);
                            }}
                        >
                        {editBlog.blogSubTitle}
                        </Typography>
                        ):( 
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Blog Sub Title"
                            type="text"
                            fullWidth
                            variant='outlined'
                            {...register('blogSubTitle')}

                        />)}

                    {!isBlogMsgFocused ? (
                        <Typography
                            // classBlogSubTitle={classes.BlogSubTitle}
                            onClick={() => {
                                setIsBlogMsgFocused(true);
                            }}
                        >
                        {editBlog.blogMsg}
                        </Typography>
                    ):( 

                        <TextareaAutosize
                            
                             aria-label="minimum height"
                             minRows={4}
                             margin="dense"
                             placeholder="Messege"
                            style={{width:529, padding:10, fontSize:17, marginTop:7 }}
                            {...register('blogMsg')}
                            // fullWidth
                        />)}

                    </Box>
                    </Box>
                    <DialogActions>
                        <Button variant='contained' color='error' onClick={()=>dialogBox()}>Cancel</Button>
                        <Button variant='contained' color='success' onClick={handleSubmit(onEditSubmit)} >Submit</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>


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
  );
}

export default MyBlog;
