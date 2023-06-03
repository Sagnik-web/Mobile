import React,{useEffect, useState} from 'react'
import './AdminLaptopDetails.css'
import { AppBar, Toolbar , IconButton, Typography, TextField, Button, InputAdornment, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle} from '@mui/material'
import { Menu } from '@mui/icons-material'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import image from "../../../Accets/Mob.png";
import { useParams } from 'react-router-dom'
import axios from 'axios'

const AdminLaptopDetails = ({setState})=>{
  const [open, setOpen] = useState(false)
  const [laptopInfo, setLaptopInfo] = useState({})
  const {productID} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/laptop/${productID}`)
    .then(res=>{
        console.log(res.data);
        setLaptopInfo(res.data.laptopDetails)
    })
    .catch(err=>{
        console.log(err);
    })
  },[])
  
  const deleteItem = (ID)=>{
    axios.delete(`http://localhost:5000/api/v1/laptop/${ID}`)
    .then(res=>{
        console.log(res.data);
        setOpen(false)
    })
    .catch(err=>{
        console.log(err);
    })
  }

  const renderSwitch =()=>{
    if(laptopInfo.img_one && laptopInfo.img_two && laptopInfo.img_three && laptopInfo.img_four){
      return(
        <Carousel axis="horizontal" autoPlay width="350px">
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_one} alt="" />
              {/* <p>Image 1 {laptopInfo.name}</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_three} alt="" />
              {/* <p>Image 3</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_four} alt="" />
              {/* <p>Image 3</p> */}
            </div>
          </Carousel>
      )
    }
    else if(laptopInfo.img_one && laptopInfo.img_two && laptopInfo.img_three){
      return(
        <Carousel axis="horizontal" autoPlay width="350px">
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_one} alt="" />
              {/* <p>Image 1 {laptopInfo.name}</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_three} alt="" />
              {/* <p>Image 3</p> */}
            </div>
          </Carousel>
      )
    }
    else if(laptopInfo.img_one && laptopInfo.img_two){
      return(
        <Carousel axis="horizontal" autoPlay width="350px">
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_one} alt="" />
              {/* <p>Image 1 {laptopInfo.name}</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_three} alt="" />
              {/* <p>Image 3</p> */}
            </div>
          </Carousel>
      )
    }
    else{
      return(
       
            <div className="part1_img_carousel">
              <img src={laptopInfo.img_two} alt="" />
              {/* <p>Image 2</p> */}
            </div>
            
      )
    }
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
                        Admin Laptop Details
                    </Typography>

                    <Button sx={{marginRight:3}} color="primary" variant="contained">Edit</Button>
                    <Button color="error" variant="contained" onClick={()=>setOpen(true)}>Delete</Button>
                </Toolbar>
            </AppBar>  

            <div className="LaptopDetail_container ">
      <div className="part1 flex justify_center">
        <div className="part1_img flex1 flex justify_center">
        {renderSwitch()}

        </div>
        <div className="part1_details flex1">
          <h1>{laptopInfo.name}</h1>
          <h3>₹ {laptopInfo.price}</h3>
          <ul>
            <li>{laptopInfo.processor}</li>
            <li>{laptopInfo.ram} RAM</li>
            <li>32 GB ROM</li>
            <li>{laptopInfo.camera} Camera</li>
            
          </ul>
          <div className="flex ">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="part2_heading">
          <p>XIAOMI REDMI 10 PRIME SPECIFICATIONS</p>
        </div>
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Key Frame</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">RAM</h4>
              <p className="pTag_subHeading">{laptopInfo.ram}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Processor</h4>
              <p className="pTag_subHeading"> {laptopInfo.processor}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Camera</h4>
              <p className="pTag_subHeading">{laptopInfo.camera}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">Front Camera</h4>
              <p className="pTag_subHeading">8 MP {laptopInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">Battery</h4>
              <p className="pTag_subHeading">{laptopInfo.battery}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Display</h4>
              <p className="pTag_subHeading">{laptopInfo.display}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part3">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>General</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Launch Date</h4>
              <p className="pTag_subHeading">{laptopInfo.launch_date}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Operating System</h4>
              <p className="pTag_subHeading">{laptopInfo.operating_system}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Custom UI</h4>
              <p className="pTag_subHeading">{laptopInfo.custom_ui}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part4">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Performance</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Chipset</h4>
              <p className="pTag_subHeading">{laptopInfo.chipset}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">CPU </h4>
              <p className="pTag_subHeading">
               {laptopInfo.cpu}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Architecture</h4>
              <p className="pTag_subHeading">{laptopInfo.architecture}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">Fabrication</h4>
              <p className="pTag_subHeading">12 nm {laptopInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">Graphics</h4>
              <p className="pTag_subHeading">{laptopInfo.graphics}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">RAM</h4>
              <p className="pTag_subHeading">4 GB {laptopInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">RAM Type</h4>
              <p className="pTag_subHeading">{laptopInfo.ram_type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part5">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Display</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Display Type</h4>
              <p className="pTag_subHeading">{laptopInfo.display_type}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Screen Size</h4>
              <p className="pTag_subHeading">{laptopInfo.screen_size}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Resolution</h4>
              <p className="pTag_subHeading">{laptopInfo.resolution}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Aspect Ratio</h4>
              <p className="pTag_subHeading">{laptopInfo.aspect_ratio}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Pixel Density</h4>
              <p className="pTag_subHeading">{laptopInfo.pixel_density}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">
                Screen to Body Ratio (calculated)
              </h4>
              <p className="pTag_subHeading">{laptopInfo.screen_body_ratio}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Screen Protection</h4>
              <p className="pTag_subHeading">{laptopInfo.screen_protection}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Bezel-less display</h4>
              <p className="pTag_subHeading">{laptopInfo.bezel_less_display}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Touch Screen</h4>
              <p className="pTag_subHeading">
               {laptopInfo.touch_screen}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Brightness</h4>
              <p className="pTag_subHeading">{laptopInfo.brightness}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Refresh Rate</h4>
              <p className="pTag_subHeading">{laptopInfo.refresh_rate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part6">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Design</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Height</h4>
              <p className="pTag_subHeading">{laptopInfo.height}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Width</h4>
              <p className="pTag_subHeading">{laptopInfo.width}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Thickness</h4>
              <p className="pTag_subHeading">{laptopInfo.thickness}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Weight</h4>
              <p className="pTag_subHeading">{laptopInfo.weight}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">Pixel Density</h4>
              <p className="pTag_subHeading">405 ppi {laptopInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">Colours</h4>
              <p className="pTag_subHeading">{laptopInfo.colours}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Waterproof</h4>
              <p className="pTag_subHeading">{laptopInfo.waterproof}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part8">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Battery</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Capacity</h4>
              <p className="pTag_subHeading">{laptopInfo.battery}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Type</h4>
              <p className="pTag_subHeading">{laptopInfo.battery_type}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Removable</h4>
              <p className="pTag_subHeading">{laptopInfo.battery_removable}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Charging Time</h4>
              <p className="pTag_subHeading">{laptopInfo.battery_time}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Battery Backup</h4>
              <p className="pTag_subHeading">{laptopInfo.battery_backup}</p>
            </div>
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">USB Type-C</h4>
              <p className="pTag_subHeading">Yes {laptopInfo.name}</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="part9">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Storage</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">SSD Internal Memory</h4>
              <p className="pTag_subHeading">{laptopInfo.SSD}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">SSD Capacity</h4>
              <p className="pTag_subHeading">{laptopInfo.SSD_capacity}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">HDD Internal Memory</h4>
              <p className="pTag_subHeading">{laptopInfo.HDD}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">HDD Capacity</h4>
              <p className="pTag_subHeading">{laptopInfo.HDD_capacity}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part10">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Network & Connectivity</h3>
          </div>
          <div className="part2_details_subheading">
            {/* <div className="flex">
              <h4 className="h3Tag_subHeading">SIM Slot(s)</h4>
              <p className="pTag_subHeading">Dual SIM, GSM+GSM, Dual VoLTE {laptopInfo.name}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">SIM Size </h4>
              <p className="pTag_subHeading">7SIM1: Nano, SIM2: Nano {laptopInfo.name}</p>
            </div> */}
            <div className="flex">
              <h4 className="h3Tag_subHeading">Network Support</h4>
              <p className="pTag_subHeading">
                
               {laptopInfo.network_support}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">VoLTE</h4>
              <p className="pTag_subHeading">{laptopInfo.VoLTE}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Wi-Fi</h4>
              <p className="pTag_subHeading">
                
               {laptopInfo.wifi}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Wi-Fi Features</h4>
              <p className="pTag_subHeading">{laptopInfo.wifi_features}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Bluetooth</h4>
              <p className="pTag_subHeading">{laptopInfo.bluetooth}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">GPS</h4>
              <p className="pTag_subHeading">{laptopInfo.gps}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">NFC</h4>
              <p className="pTag_subHeading">{laptopInfo.nfc}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">USB Connectivity</h4>
              <p className="pTag_subHeading">
                
               {laptopInfo.usb_connectivity}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part11">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Multimedia</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">FM Radio</h4>
              <p className="pTag_subHeading">{laptopInfo.fm_radio}</p>
            </div>
            <div className="flex">

              <h4 className="h3Tag_subHeading">Loudspeaker</h4>
              <p className="pTag_subHeading">{laptopInfo.loudspeaker}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Audio Jack</h4>
              <p className="pTag_subHeading">{laptopInfo.audio_jack}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="part12">
        <div className="laptop_part2_details flex">
          <div className="part2_details_heading">
            <h3>Others</h3>
          </div>
          <div className="part2_details_subheading">
            <div className="flex">
              <h4 className="h3Tag_subHeading">Fingerprint Sensor</h4>
              <p className="pTag_subHeading">{laptopInfo.fingerprint_sensor}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Fingerprint Sensor Position</h4>
              <p className="pTag_subHeading">{laptopInfo.fingerprint_sensor_position}</p>
            </div>
            <div className="flex">
              <h4 className="h3Tag_subHeading">Other Sensors</h4>
              <p className="pTag_subHeading"> 
               {laptopInfo.other_sensors}</p>
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

export default AdminLaptopDetails