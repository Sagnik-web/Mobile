import React,{useState} from 'react'
import './LaptopPost.css'
import { AppBar, Toolbar , IconButton, Typography, TextField, Button,FormControl, InputLabel, MenuItem, Select, InputAdornment} from '@mui/material'
import { Menu } from '@mui/icons-material'
import { useForm } from "react-hook-form";
import axios from 'axios';


const LaptopPost = ({setState})=>{
    const {register, handleSubmit} = useForm()
  
    const onSubmit =data=>{
      data.img_one = firstImg
      data.img_two = secondImg
      data.img_three = thirdImg
      data.img_four = forthImg
      console.log(data);

      axios.post('http://localhost:5000/api/v1/laptop',data)
      .then(res=>{
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  
    const [image1, setImage1] = useState({ preview: "", raw: "" });
    const [image2, setImage2] = useState({ preview: "", raw: "" });
    const [image3, setImage3] = useState({ preview: "", raw: "" });
    const [image4, setImage4] = useState({ preview: "", raw: "" });
  
  
    const firstHandleChange = e => {
      if (e.target.files.length) {
        setImage1({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
      console.log(image1);
    };
  
    const secondHandleChange = e => {
      if (e.target.files.length) {
        setImage2({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
      console.log(image2);
      console.log(e.target.files[0]);
    };
  
    const thirdHandleChange = e => {
      if (e.target.files.length) {
        setImage3({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
  
      console.log(image3);
  
    };
  
    const forthHandleChange = e => {
      if (e.target.files.length) {
        setImage4({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
  
      console.log(image4);
  
    };
  

    const [firstImg, setFirstImg] = useState('')
    const [secondImg, setSecondImg] = useState('')
    const [thirdImg, setThirdImg] = useState('')
    const [forthImg, setForthImg] = useState('')
  
  
    const handleUpload = () => {
      // e.preventDefault();
      if(image1.raw){
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
      }
  
      if(image2.raw){
        const formData2 = new FormData();
        formData2.append("file", image2.raw);
  
        axios.post('http://localhost:5000/api/v1/mobile/imgUpload',formData2)
        .then(res=>{
          // console.log("http://localhost:5000/api/v1/img/"+res.data.filename);
          setSecondImg("http://localhost:5000/api/v1/img/"+res.data.filename)
  
        })
        .catch(err=>{
          console.log(err);
        })
      }
  
      if(image3.raw){
        const formData3 = new FormData();
        formData3.append("file", image3.raw);
  
        axios.post('http://localhost:5000/api/v1/mobile/imgUpload',formData3)
        .then(res=>{
          // console.log("http://localhost:5000/api/v1/img/"+res.data.filename);
          setThirdImg("http://localhost:5000/api/v1/img/"+res.data.filename)
          
  
        })
        .catch(err=>{
          console.log(err);
        })
      }
  
      if(image4.raw){
        const formData4 = new FormData();
        formData4.append("file", image4.raw);
  
        axios.post('http://localhost:5000/api/v1/mobile/imgUpload',formData4)
        .then(res=>{
          // console.log("http://localhost:5000/api/v1/img/"+res.data.filename);
          setForthImg("http://localhost:5000/api/v1/img/"+res.data.filename)
  
        })
        .catch(err=>{
          console.log(err);
        })
      }  
    
      
    };
  
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
                        Admin Laptop Post
                      </Typography>
                      {/* <TextField
                          //   label="With normal TextField"
                          id="outlined-start-adornment"
                          placeholder='Search'
                          sx={{ m: 1, width: 350 }}
                          InputProps={{
                              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                          }}
                      />
                      <Button color="primary" variant="contained">Search</Button> */}
                  </Toolbar>
              </AppBar> 
  
      <div className="MobilePost_container">
      {/* <form onSubmit={()=>handleSubmit(onSubmit)}> */}
        {/* <h1>Admin Mobile Data Post</h1> */}
        <div className="part1">     
          <div className="add_margin">
              <TextField {...register("name")} label="Name" variant="outlined" placeholder="Ex: Mobile Name" sx={{marginTop:2}} fullWidth/>
                
          </div>
  
          <div className="add_margin">
              <TextField {...register("price")} label="Price" variant="outlined" placeholder="Ex: 18000" sx={{marginBottom:2}} fullWidth/>
                
          </div>
  
          <div className="add_margin flex justify_space_between">
            <div>
              {/* <img alt="First Photo" src={Image}/> */}
              {/* {image1.preview ? ( */}
                <img src={image1.preview ? image1.preview : ""} alt="asdfgh" width="250" height="200" />
              {/* ) :null} */}
            </div>
            <label htmlFor="first-upload-photo">
              <input
                style={{ display: 'none' }}
                id="first-upload-photo"
                name="first-upload-photo"         
                type="file"
                onChange={firstHandleChange}
              />
  
              <Button color="primary"  type="button" variant="contained" component="span">
                Upload Image
              </Button>
            <TextField style={{ display: 'none' }} value={firstImg} {...register("img_one")} />

            </label>
  
            <div>
              {/* <img alt="First Photo" src={Image}/> */}
              {/* {image1.preview ? ( */}
                <img src={image2.preview ? image2.preview : ""} alt="dummy" width="250" height="200" />
              {/* ) :null} */}
            </div>
            <label htmlFor="second-upload-photo">
            
              <input
                style={{ display: 'none' }}
                id="second-upload-photo"
                name="upload-photo"         
                type="file"
                onChange={secondHandleChange}
              />
  
              <Button color="primary" type="button" variant="contained" component="span">
                Upload Image
              </Button>
            <TextField style={{ display: 'none' }} value={secondImg} {...register("img_two")} />

            </label>
  
          </div>
  
          <div className="add_margin flex justify_space_between">
            <div>
              {/* <img alt="First Photo" src={Image}/> */}
              {/* {image1.preview ? ( */}
                <img src={image3.preview ? image3.preview : ""} alt="asdfgh" width="250" height="200" />
              {/* ) :null} */}
            </div>
            <label htmlFor="third-upload-photo">
              <input
                style={{ display: 'none' }}
                id="third-upload-photo"
                name="third-upload-photo"         
                type="file"
                onChange={thirdHandleChange}
              />
  
              <Button color="primary"  type="button" variant="contained" component="span">
                Upload Image
              </Button>
            <TextField style={{ display: 'none' }} value={thirdImg} {...register("img_three")} />

            </label>
  
            <div>
              {/* <img alt="First Photo" src={Image}/> */}
              {/* {image1.preview ? ( */}
                <img src={image4.preview ? image4.preview : ""} alt="dummy" width="250" height="200" />
              {/* ) :null} */}
            </div>
            <label htmlFor="forth-upload-photo">
            
              <input
                style={{ display: 'none' }}
                id="forth-upload-photo"
                name="upload-photo"         
                type="file"
                onChange={forthHandleChange}
              />
  
              <Button color="primary" type="button" variant="contained" component="span">
                Upload Image
              </Button>
            <TextField style={{ display: 'none' }} value={forthImg} {...register("img_four")} />

            </label>
  
           
          </div>
        <Button variant="contained" color="success" fullWidth sx={{ marginY:2}} onClick={()=> handleUpload()}>Save Image</Button>

        </div>
        <div className="part2">
          
          <div className="part2_heading">
            <p>XIAOMI REDMI 10 PRIME SPECIFICATIONS</p>
          </div>
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Key Frame</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                {/* <TextField {...register("ram")} label="Ram" variant="outlined" placeholder="Ex: 4GB" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="ram">Ram</InputLabel>
                            <Select
                                label="Ram"
                                labelId="ram"
                                {...register("ram")}
                                placeholder="Ex: 4GB"
                            >
                                <MenuItem value="8 GB">8 GB</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
              </div>
              <div className="add_margin">
                {/* <TextField {...register("processor")} label="Processor" variant="outlined" placeholder="Ex: MediaTek Dimensity 700 MT6833" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="processor">Processor</InputLabel>
                            <Select
                                label="Processor"
                                labelId="processor"
                                {...register("processor")}
                                placeholder="Ex: MediaTek Dimensity 700 MT6833"
                            >
                                <MenuItem value="MediaTek Dimensity 700 MT6833">MediaTek Dimensity 700 MT6833</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
              </div>
              {/* <div className="add_margin">
                <TextField {...register("rear_camera")} label="Rear Camera" variant="outlined" placeholder="Ex: 48 MP + 2 MP + 2 MP" fullWidth/>
  
              </div> */}
              <div className="add_margin">
                {/* <TextField {...register("camera")} label="Camera" variant="outlined" placeholder="Ex: 8 MP" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="main_camera">Camera</InputLabel>
                            <Select
                                label="Camera"
                                labelId="main_camera"
                                {...register("camera")}
                            >
                                <MenuItem value="8 MP">8 MP</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
            
              </div>
              <div className="add_margin">
                {/* <TextField {...register("battery")} label="Battery" variant="outlined" placeholder="Ex: 5000 mAh" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="Battery">Battery</InputLabel>
                            <Select
                                label="Battery"
                                labelId="Battery"
                                {...register("battery")}
                                placeholder="Ex: 5000 mAh"
                            >
                                <MenuItem value="5000 mAh">5000 mAh</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
              </div>
              <div className="add_margin">
                {/* <TextField {...register("display")} label="Display" variant="outlined" placeholder="Ex: 6.5 inches" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="Display">Display</InputLabel>
                            <Select
                                label="Display"
                                labelId="Display"
                                {...register("display")}
                                placeholder="Ex: Ex: 6.5 inches"
                            >
                                <MenuItem value="6.5 inches">6.5 inches</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="part3">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>General</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                <TextField {...register("launch_date")} label="Launch Date" variant="outlined" placeholder="Ex: September 7, 2021 (Official)" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                {/* <TextField {...register("operating_system")} label="Operating System" variant="outlined" placeholder="Ex: Android v11" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="operating_system">Operating System</InputLabel>
                            <Select
                                label="Operating System"
                                labelId="operating_system"
                                {...register("os")}
                                placeholder="Ex: Android"
                            >
                                <MenuItem value="Android">Android</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                
              </div>
              <div className="add_margin">
                <TextField {...register("custom_ui")} label="Custom UI" variant="outlined" placeholder="Ex: MIUI" fullWidth/>
  
              </div>
            </div>
          </div>
        </div>
        <div className="part4">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Performance</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                <TextField {...register("chipset")}  label="Chipset" variant="outlined" placeholder="Ex: MediaTek Helio G88" fullWidth/>
                         
              </div>
              <div className="add_margin">
                  <TextField {...register("cpu")} label="CPU" variant="outlined" placeholder="Ex: Octa core (2 GHz, Dual core, Cortex A75 + 1.8 GHz, Hexa Core, Cortex A55)" fullWidth/>
                
              </div>
              <div className="add_margin">
                <TextField {...register("architecture")} label="Architecture" variant="outlined" placeholder="Ex: 64 bit" fullWidth/>
                
              </div>
              {/* <div className="add_margin">
                <TextField {...register("fabrication")} label="Fabrication" variant="outlined" placeholder="Ex: 12 nm" fullWidth/>
                
              </div> */}
              <div className="add_margin">
                  <TextField {...register("graphics")} label="Graphics" variant="outlined" placeholder="Ex: Mali-G52 MC2" fullWidth/>
                
              </div>
              {/* <div className="add_margin">
                <TextField {...register("ram")} label="RAM" variant="outlined" placeholder="Ex: 4 GB" fullWidth/>
  
              </div> */}
              <div className="add_margin">
                <TextField {...register("ram_type")} label="RAM Type" variant="outlined" placeholder="Ex: LPDDR4X" fullWidth/>
  
              </div>
            </div>
          </div>
        </div>
        <div className="part5">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Display</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                {/* <TextField {...register("display_type")} label="Display Type" variant="outlined" placeholder="Ex: IPS LCD" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="display_type">Display Type</InputLabel>
                            <Select
                                label="Display Type"
                                labelId="display_type"
                                {...register("display_type")}
                                placeholder="Ex: IPS LCD"
                            >
                                <MenuItem value="IPS LCD">IPS LCD</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                
              </div>
              <div className="add_margin">
                <TextField {...register("screen_size")} label="Screen Size" variant="outlined" placeholder="Ex: 6.5 inches (16.51 cm)" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("resolution")} label="Resolution" variant="outlined" placeholder="Ex: 1080 x 2400 pixels" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("aspect_ratio")} label="Aspect Ratio" variant="outlined" placeholder="Ex: 20:9" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("pixel_density")} label="Pixel Density" variant="outlined" placeholder="Ex: 405 ppi" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("screen_body_ratio")} label="Screen to Body Ratio (calculated)" variant="outlined" placeholder="Ex: 83.45 %" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("screen_protection")} label="Screen Protection" variant="outlined" placeholder="Ex: Corning Gorilla Glass v3" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("bezel_less_display")} label="Bezel-less display" variant="outlined" placeholder="Ex: Yes with punch-hole display" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("touch_screen")} label="Touch Screen" variant="outlined" placeholder="Ex: Yes, Capacitive Touchscreen, Multi-touch" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("brightness")} label="Brightness" variant="outlined" placeholder="Ex: 400 nits" fullWidth/>
  
              </div>
              <div className="add_margin">
                {/* <TextField {...register("refresh_rate")} label="Refresh Rate" variant="outlined" placeholder="Ex: 90 Hz" fullWidth/> */}
                <FormControl fullWidth>
                            <InputLabel id="refresh_rate">Refresh Rate</InputLabel>
                            <Select
                                label="Refresh Rate"
                                labelId="refresh_rate"
                                {...register("refresh_rate")}
                                placeholder="Ex: 90 Hz"
                            >
                                <MenuItem value="90 Hz">90 Hz</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="part6">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Design</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                <TextField {...register("height")} label="Height" variant="outlined" placeholder="Ex: 161.9 mm" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("width")} label="Width" variant="outlined" placeholder="Ex: 75.5 mm" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("thickness")} label="Thickness" variant="outlined" placeholder="Ex: 9.5 mm" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("weight")} label="Weight" variant="outlined" placeholder="Ex: 192 grams" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("pixel_density")} label="Pixel Density" variant="outlined" placeholder="Ex: 405 ppi" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("colours")} label="Colours" variant="outlined" placeholder="Ex: Phantom Black, Bifrost Blue, Astral White" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("waterproof")} label="Waterproof" variant="outlined" placeholder="Yes, Splash proof" fullWidth/>
  
              </div>
            </div>
          </div>
        </div>
        {/* <div className="part7">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Camera</h3>
            </div>
            <div className="part2_details_subheading">
              <div>
                <div>
                  <span>Rare Camera</span>
                </div>
                <div className="part7_camera flex">
                    <TextField {...register("camera_setup")} label="Camera Setup" variant="outlined" placeholder="Quad" fullWidth/>
          
                </div>
              <div className="part7_camera flex">
                <TextField {...register("resolution")} label="Resolution" variant="outlined" placeholder="50 MP f/1.8 Primary Camera 8 MP f/2.2, Wide Angle, Ultra-Wide Angle Camera 2 MP f/2.4, Macro Camera (1.75µm pixel size) 2 MP f/2.4, Depth Camera(1.75µm pixel size)" fullWidth/>
  
              </div>
              <div className="part7_camera flex">
                <TextField {...register("autofocus")} label="Autofocus" variant="outlined" placeholder="Yes" fullWidth/>
  
              </div>
              <div className="part7_camera flex">
                <TextField {...register("flash")} label="Flash" variant="outlined" placeholder="Yes, LED Flash" fullWidth/>
  
              </div>
              <div className="part7_camera flex">
                <TextField {...register("image_resolution")} label="Image Resolution" variant="outlined" placeholder="8150 x 6150 Pixels" fullWidth/>
  
              </div>
              <div className="part7_camera flex">
                <TextField {...register("settings")} label="Settings" variant="outlined" placeholder="Exposure compensation, ISO control" fullWidth/>
    
              </div>
              <div className="part7_camera flex">
                <TextField {...register("shooting_modes")} label="Shooting Modes" variant="outlined" placeholder="Continuos Shooting" fullWidth/>
        
              </div>
              <div className="part7_camera flex">
                <TextField {...register("camera_features")} label="Camera Features" variant="outlined" placeholder="Digital Zoom Auto Flash Face detection Touch to focus" fullWidth/>
  
              </div>
              <div className="part7_camera flex">
                <TextField {...register("video_recording")} label="Video Recording" variant="outlined" placeholder="1920x1080 @ 30 fps 1280x720 @ 30 fps" fullWidth/>
  
              </div>
              </div>
              <div>
                <div>
                  <span>Rare Camera</span>
                </div>
                <div className="part7_camera flex">
                  <TextField {...register("video_recording")} label="Video Recording" variant="outlined" placeholder="1920x1080 @ 30 fps 1280x720 @ 30 fps" fullWidth/>
              
                </div>
                <div className="part7_camera flex">
                  <TextField {...register("camera_setup")} label="Camera Setup" variant="outlined" placeholder="Single" fullWidth/>
              
                </div>
                <div className="part7_camera flex">
                  <TextField {...register("resolution")} label="Resolution" variant="outlined" placeholder="8 MP f/2.0 Primary Camera" fullWidth/>
                
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="part8">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Battery</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                <TextField {...register("battery_capacity")} label="Capacity" variant="outlined" placeholder="6000 mAh" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("battery_type")} label="Type" variant="outlined" placeholder="Li-Polymer" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("battery_removable")} label="Removable" variant="outlined" placeholder="No" fullWidth/>
  
            
              </div>
              <div className="add_margin">
                <TextField {...register("battery_quick_charging")} label="Quick Charging" variant="outlined" placeholder="Yes, Fast, 18W" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("usb_type-c")} label="USB Type-C" variant="outlined" placeholder="Yes" fullWidth/>
  
                </div>
            </div>
          </div>
        </div>
        <div className="part9">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Storage</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                <TextField {...register("SSD")} label="SSD Memory" variant="outlined" placeholder="64 GB" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("SSD_capacity")} label="SSD Capacity" variant="outlined" placeholder="64 GB" fullWidth/>
  
                
              </div>
              
              <div className="add_margin">
                <TextField {...register("HDD")} label="HDD Memory" variant="outlined" placeholder="64 GB" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("HDD_capacity")} label="HDD Capacity" variant="outlined" placeholder="64 GB" fullWidth/>
  
                
              </div>
              {/* <div className="add_margin">
                <TextField {...register("storage_type")} label="Storage Type" variant="outlined" placeholder="eMMC 5.1" fullWidth/>
  
                
              </div> */}
            </div>
          </div>
        </div>
        <div className="part10">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Network & Connectivity</h3>
            </div>
            <div className="part2_details_subheading">
              {/* <div className="add_margin">
                <TextField {...register("sim_slot")} label="SIM Slot(s)" variant="outlined" placeholder="Dual SIM, GSM+GSM, Dual VoLTE" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("sim_size")} label="SIM Size" variant="outlined" placeholder="7SIM1: Nano, SIM2: Nano" fullWidth/>
  
              </div> */}
              <div className="add_margin">
                <TextField {...register("network_support")} label="Network Support" variant="outlined" placeholder="4G (supports Indian bands), 3G, 2G" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("VoLTE")} label="VoLTE" variant="outlined" placeholder="Yes" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("wifi")} label="Wi-Fi" variant="outlined" placeholder=" Yes, Wi-Fi 802.11, a/ac/b/g/n/n 5GHz" fullWidth/>
  
                
              </div>
              <div className="add_margin">
                <TextField {...register("wifi_features")} label="Wi-Fi Features" variant="outlined" placeholder="Mobile Hotspot" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("bluetooth")} label="Bluetooth" variant="outlined" placeholder="Yes, v5.1" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("gps")} label="GPS" variant="outlined" placeholder="Yes with A-GPS, Glonass" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("nfc")} label="NFC" variant="outlined" placeholder="No" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("usb_connectivity")} label="USB Connectivity" variant="outlined" placeholder="Mass storage device, USB charging" fullWidth/>
  
              </div>
            </div>
          </div>
        </div>
        <div className="part11">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Multimedia</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                <TextField {...register("fm_radio")} label="FM Radio" variant="outlined" placeholder="Yes" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("loudspeaker")} label="Loudspeaker" variant="outlined" placeholder="Yes" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("audio_jack")} label="Audio Jack" variant="outlined" placeholder="3.5 mm" fullWidth/>
  
              </div>
            </div>
          </div>
        </div>
        <div className="part12">
          <div className="part2_details flex">
            <div className="part2_details_heading">
              <h3>Others</h3>
            </div>
            <div className="part2_details_subheading">
              <div className="add_margin">
                <TextField {...register("fingerprint_sensor")} label="Fingerprint Sensor" variant="outlined" placeholder="Yes" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("fingerprint_sensor_position")} label="Fingerprint Sensor Position" variant="outlined" placeholder="Side" fullWidth/>
  
              </div>
              <div className="add_margin">
                <TextField {...register("other_sensors")} label="Other Sensors" variant="outlined" placeholder="Light sensor, Proximity sensor, Accelerometer, Compass" fullWidth/>
  
              </div>
            </div>
          </div>
        </div>
        
        <Button onClick={handleSubmit(onSubmit)}>Submit Data</Button>
        {/* </form> */}
  
      </div>
      </>
    );
  };

export default LaptopPost