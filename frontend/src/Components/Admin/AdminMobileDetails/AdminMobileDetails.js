import { AppBar, Toolbar , IconButton, Typography, TextField, Button, InputAdornment, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle} from '@mui/material'
import { Menu } from '@mui/icons-material'
import React,{useEffect, useState} from 'react'
import './AdminMobileDetails.css'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import image from "../../../Accets/Mob.png";
import { useParams } from 'react-router-dom'
import axios from 'axios'


const AdminMobileDetails = ({setState})=>{
  const {productID} = useParams()
  const [mobileInfo,setMobileInfo] = useState({})
  const [open, setOpen] = useState(false)


  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/mobile/${productID}`)
    .then(res=>{
        console.log(res.data);
        setMobileInfo(res.data.mobileDetails)
    })
    .catch(err=>{
        console.log(err);
    })
  },[])

  const deleteItem = (ID)=>{
    axios.delete(`http://localhost:5000/api/v1/mobile/${ID}`)
    .then(res=>{
        console.log(res.data);
        setOpen(false)
    })
    .catch(err=>{
        console.log(err);
    })
  }

  const renderSwitch =()=>{
    if(mobileInfo.img_one && mobileInfo.img_two && mobileInfo.img_three && mobileInfo.img_four){
      return(
        <Carousel axis="horizontal" autoPlay width="350px">
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_one} alt="" />
              {/* <p>Image 1 {mobileInfo.name}</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_three} alt="" />
              {/* <p>Image 3</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_four} alt="" />
              {/* <p>Image 3</p> */}
            </div>
          </Carousel>
      )
    }
    else if(mobileInfo.img_one && mobileInfo.img_two && mobileInfo.img_three){
      return(
        <Carousel axis="horizontal" autoPlay width="350px">
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_one} alt="" />
              {/* <p>Image 1 {mobileInfo.name}</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_three} alt="" />
              {/* <p>Image 3</p> */}
            </div>
          </Carousel>
      )
    }
    else if(mobileInfo.img_one && mobileInfo.img_two){
      return(
        <Carousel axis="horizontal" autoPlay width="350px">
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_one} alt="" />
              {/* <p>Image 1 {mobileInfo.name}</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_three} alt="" />
              {/* <p>Image 3</p> */}
            </div>
          </Carousel>
      )
    }
    else{
      return(
       
            <div className="part1_img_carousel">
              <img src={mobileInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            
      )
    }
  }

    return(
        <>
           {/* hi admin mobileDetails  */}
      
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
                        Admin Mobile Details
                    </Typography>
                    
                    <Button sx={{marginRight:3}} color="primary" variant="contained">Edit</Button>
                    <Button  color="error" variant="contained" onClick={()=>setOpen(true)}>Delete</Button>
                </Toolbar>
            </AppBar>  

            <div className="MobileDetails_container ">
      <div className="part1 flex justify_center">
        <div className="part1_img flex1 flex justify_center">
          {renderSwitch()}
        </div>
        <div className="part1_details flex1">
          <h1>{mobileInfo.name}</h1>
          <h3>₹ {mobileInfo.price}</h3>
          <ul>
            <li>{mobileInfo.processor}</li>
            <li>{mobileInfo.ram} RAM</li>
            {/* <li>{mobileInfo.} ROM</li> */}
            <li>{mobileInfo.rear_camera} Rare Camera</li>
            <li>{mobileInfo.front_camera} Front Camera</li>
          </ul>
          <div className="flex ">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="part2_heading">
          <p>{mobileInfo.name}</p>
        </div>
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Key Frame</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">RAM</h4>
              <p className="pTag_subHeading">{mobileInfo.ram}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Processor</h4>
              <p className="pTag_subHeading">{mobileInfo.processor}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Rear Camera</h4>
              <p className="pTag_subHeading">{mobileInfo.rear_camera}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Front Camera</h4>
              <p className="pTag_subHeading">{mobileInfo.front_camera}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Battery</h4>
              <p className="pTag_subHeading">{mobileInfo.battery}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Display</h4>
              <p className="pTag_subHeading">{mobileInfo.display}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part3">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>General</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Launch Date</h4>
              <p className="pTag_subHeading">{mobileInfo.launch_date}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Operating System</h4>
              <p className="pTag_subHeading">{mobileInfo.operating_system}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Custom UI</h4>
              <p className="pTag_subHeading">{mobileInfo.custom_ui}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part4">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Performance</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Chipset</h4>
              <p className="pTag_subHeading">{mobileInfo.chipset}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">CPU </h4>
              <p className="pTag_subHeading">{mobileInfo.cpu}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Architecture</h4>
              <p className="pTag_subHeading">{mobileInfo.architecture}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Fabrication</h4>
              <p className="pTag_subHeading">{mobileInfo.fabrication}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Graphics</h4>
              <p className="pTag_subHeading">{mobileInfo.graphics}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">RAM</h4>
              <p className="pTag_subHeading">4 GB{mobileInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">RAM Type</h4>
              <p className="pTag_subHeading">{mobileInfo.ram_type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part5">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Display</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Display Type</h4>
              <p className="pTag_subHeading">{mobileInfo.display_type}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Screen Size</h4>
              <p className="pTag_subHeading">{mobileInfo.screen_size}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">Resolution</h4>
              <p className="pTag_subHeading">1080 x 2400 pixels{mobileInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">Aspect Ratio</h4>
              <p className="pTag_subHeading">{mobileInfo.aspect_ratio}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Pixel Density</h4>
              <p className="pTag_subHeading">{mobileInfo.pixel_density}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">
                Screen to Body Ratio (calculated)
              </h4>
              <p className="pTag_subHeading">{mobileInfo.screen_body_ratio}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Screen Protection</h4>
              <p className="pTag_subHeading">{mobileInfo.screen_protection}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Bezel-less display</h4>
              <p className="pTag_subHeading"></p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Touch Screen</h4>
              <p className="pTag_subHeading">{mobileInfo.touch_screen}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Brightness</h4>
              <p className="pTag_subHeading">{mobileInfo.brightness}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Refresh Rate</h4>
              <p className="pTag_subHeading">{mobileInfo.refresh_rate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part6">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Design</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Height</h4>
              <p className="pTag_subHeading">{mobileInfo.height}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Width</h4>
              <p className="pTag_subHeading">{mobileInfo.width}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Thickness</h4>
              <p className="pTag_subHeading">{mobileInfo.thickness}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Weight</h4>
              <p className="pTag_subHeading">{mobileInfo.weight}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">Pixel Density</h4>
              <p className="pTag_subHeading">405 ppi{mobileInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">Colours</h4>
              <p className="pTag_subHeading">{mobileInfo.colours}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Waterproof</h4>
              <p className="pTag_subHeading">{mobileInfo.waterproof}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part7">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Camera</h3>
          </div>
          <div className="part2_details_subheading">
            <div>
              <div>
                <span>Rare Camera</span>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Camera Setup</h4>
                <p  className="pTag_subHeading">{mobileInfo.rare_camera_setup}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Resolution</h4>
                <p  className="pTag_subHeading">{mobileInfo.rare_resolution}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Autofocus</h4>
                <p  className="pTag_subHeading">{mobileInfo.autofocus}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Flash</h4>
                <p  className="pTag_subHeading">{mobileInfo.flash}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Image Resolution</h4>
                <p  className="pTag_subHeading">{mobileInfo.image_resolution}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Settings</h4>
                <p  className="pTag_subHeading">{mobileInfo.settings}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Shooting Modes</h4>
                <p  className="pTag_subHeading">{mobileInfo.shooting_modes}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Camera Features</h4>
                <p  className="pTag_subHeading">{mobileInfo.camera_features}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Video Recording</h4>
                <p  className="pTag_subHeading">{mobileInfo.rare_video_recording}</p>
              </div>
            </div>
            <div>
              <div>
                <span>Front Camera</span>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Video Recording</h4>
                <p  className="pTag_subHeading">{mobileInfo.front_video_recording}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Camera Setup</h4>
                <p  className="pTag_subHeading">{mobileInfo.front_camera_setup}</p>
              </div>
              <div className="part7_camera flex">
                <h4 className="h3Tag_subHeading">Resolution</h4>
                <p  className="pTag_subHeading">{mobileInfo.front_resolution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part8">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Battery</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Capacity</h4>
              <p className="pTag_subHeading">{mobileInfo.battery}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Type</h4>
              <p className="pTag_subHeading">{mobileInfo.battery_type}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Removable</h4>
              <p className="pTag_subHeading">{mobileInfo.battery_removable}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Quick Charging</h4>
              <p className="pTag_subHeading">{mobileInfo.battery_quick_charging}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">USB Type-C</h4>
              <p className="pTag_subHeading">{mobileInfo.usb_type_c}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part9">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Storage</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Internal Memory</h4>
              <p className="pTag_subHeading">{mobileInfo.internal_memory}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Expandable Memory</h4>
              <p className="pTag_subHeading">{mobileInfo.expandable_memory}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Storage Type</h4>
              <p className="pTag_subHeading">{mobileInfo.storage_type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part10">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Network & Connectivity</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">SIM Slot(s)</h4>
              <p className="pTag_subHeading">{mobileInfo.sim_slot}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">SIM Size </h4>
              <p className="pTag_subHeading">{mobileInfo.sim_size}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Network Support</h4>
              <p className="pTag_subHeading">{mobileInfo.network_support}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">VoLTE</h4>
              <p className="pTag_subHeading">{mobileInfo.VoLTE}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Wi-Fi</h4>
              <p className="pTag_subHeading">{mobileInfo.wifi}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Wi-Fi Features</h4>
              <p className="pTag_subHeading">{mobileInfo.wifi_features}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Bluetooth</h4>
              <p className="pTag_subHeading">{mobileInfo.bluetooth}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">GPS</h4>
              <p className="pTag_subHeading">{mobileInfo.gps}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">NFC</h4>
              <p className="pTag_subHeading">{mobileInfo.nfc}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">USB Connectivity</h4>
              <p className="pTag_subHeading">{mobileInfo.usb_connectivity}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part11">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Multimedia</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">FM Radio</h4>
              <p className="pTag_subHeading">{mobileInfo.fm_radio}</p>
            </div>
            <div className="flex">

              <h4 className="h3Tag_subHeading">Loudspeaker</h4>
              <p className="pTag_subHeading">{mobileInfo.loudspeaker}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Audio Jack</h4>
              <p className="pTag_subHeading">{mobileInfo.audio_jack}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part12">
        <div className="mobile_part2_details flex">
          <div className="part2_details_heading">
            <h3>Others</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Fingerprint Sensor</h4>
              <p className="pTag_subHeading">{mobileInfo.fingerprint_sensor}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Fingerprint Sensor Position</h4>
              <p className="pTag_subHeading">{mobileInfo.fingerprint_sensor_position}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Other Sensors</h4>
              <p className="pTag_subHeading">{mobileInfo.other_sensors}</p>
            </div>
          </div>
        </div>
      </div>
             </div>

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
                        <Button variant='contained' color="error" onClick={()=>deleteItem(productID)}>Ok</Button>
                    </DialogActions>
            </Dialog>
        </> 
      
    )
}

export default AdminMobileDetails