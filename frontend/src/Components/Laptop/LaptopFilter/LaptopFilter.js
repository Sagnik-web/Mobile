import React from "react";
import './LaptopFilter.css'
import { FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material";



const LaptopFilter = ({isVisible,filterQuery, setIsVisible, filterData, setFilterData}) =>{
    return(
        <div className="laptop_filter">
            <div className="laptop_filter_cors"  >
                <svg xmlns="http://www.w3.org/2000/svg" width="30.347" height="30.347" viewBox="0 0 30.347 30.347" onClick={()=>setIsVisible(false)}>
                    <g id="Group_107" data-name="Group 107" transform="translate(-8142.514 364.486)">
                    <rect id="Rectangle_15" data-name="Rectangle 15" width="39.478" height="3.438" rx="1.719" transform="translate(8144.945 -364.486) rotate(45)"/>
                    <rect id="Rectangle_16" data-name="Rectangle 16" width="39.478" height="3.438" rx="1.719" transform="translate(8142.514 -336.571) rotate(-45)"/>
                    </g>
                </svg>
            </div>
            <div className="laptop_filter_container">
            
                <div className="laptop_filter_col1">
                    <div>  
                        <FormControl fullWidth>
                            <InputLabel id="os">OS</InputLabel>
                            <Select
                                label="OS"
                                labelId="os"
                                value={filterData.os}
                                onChange={(e)=>setFilterData({...filterData , os:e.target.value})}
                            >
                                <MenuItem value="Android">Android</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl fullWidth>
                            {/* <InputLabel id="price">Price</InputLabel> */}
                            <Typography >Price</Typography>
                            <Slider
                                valueLabelDisplay="auto"
                                min={0}
                                max={150000}
                                step={10000}
                                marks
                                // getAriaValueText={valuetext}
                                value={filterData.price}
                                onChange={(e)=>setFilterData({...filterData , price:e.target.value})}
                            />
                            <Typography>Min: {filterData.price[0]} Max:{filterData.price[1]}</Typography>
                        </FormControl>
                    </div>

                    {/* <div>
                        <FormControl fullWidth>
                            <InputLabel id="categories">Categories</InputLabel>
                            <Select
                                label="Categories"
                                labelId="categories"
                                value={filterData.categories}
                                onChange={(e)=>setFilterData({...filterData , categories:e.target.value})}
                            >
                                <MenuItem value="Android">Android</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}

                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="ram">Ram</InputLabel>
                            <Select
                                label="Ram"
                                labelId="ram"
                                value={filterData.ram}
                                onChange={(e)=>setFilterData({...filterData , ram:e.target.value})}
                            >
                                <MenuItem value="4 GB">4 GB</MenuItem>
                                <MenuItem value="6 GB">6 GB</MenuItem>
                                <MenuItem value="8 GB">8 GB</MenuItem>
                                <MenuItem value="16 GB">16 GB</MenuItem>

                            </Select>
                        </FormControl>
                    </div>

                    {/* <div>
                        <FormControl fullWidth>
                            <InputLabel id="memory">Memory</InputLabel>
                            <Select
                                label="Memory"
                                labelId="memory"
                                value={filterData.memory}
                                onChange={(e)=>setFilterData({...filterData , memory:e.target.value})}
                            >
                                <MenuItem value="64 GB">64 GB</MenuItem>
                                <MenuItem value="128 GB">128 GB</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}

                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="battery">Battery</InputLabel>
                            <Select
                                label="Battery"
                                labelId="battery"
                                value={filterData.battery}
                                onChange={(e)=>setFilterData({...filterData , battery:e.target.value})}
                            >
                                <MenuItem value="5000 mAh">5000 mAh</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>  
                    </div>

                     

                    {/* <div>
                        <FormControl fullWidth>
                            <InputLabel id="screen_resolution">Screen Resolution</InputLabel>
                            <Select
                                label="Screen Resolution"
                                labelId="screen_resolution"
                                value={filterData.screen_resolution}
                                onChange={(e)=>setFilterData({...filterData , screen_resolution:e.target.value})}
                            >
                                <MenuItem value="1080 x 2400 pixels">1080 x 2400 pixels</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}

                    

                    {/* <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="system_on_chip">System On Chip</InputLabel>
                            <Select
                                label="System On Chip"
                                labelId="system_on_chip"
                                value={filterData.system_on_chip}
                                onChange={(e)=>setFilterData({...filterData , system_on_chip:e.target.value})}
                            >
                                <MenuItem value="MediaTek Helio G88">MediaTek Helio G88</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}

                    {/* <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="system_core">System Core</InputLabel>
                            <Select
                                label="System Core"
                                labelId="system_core"
                                value={filterData.system_core}
                                onChange={(e)=>setFilterData({...filterData , system_core:e.target.value})}
                            >
                                <MenuItem value="Octa core (2 GHz, Dual core, Cortex A75 + 1.8 GHz, Hexa Core, Cortex A55)">Octa core (2 GHz, Dual core, Cortex A75 + 1.8 GHz, Hexa Core, Cortex A55)</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}
                </div>

                <hr/>

                <div className="laptop_filter_col1">
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="processor">Processor</InputLabel>
                            <Select
                                label="Processor"
                                labelId="processor"
                                value={filterData.processor}
                                onChange={(e)=>setFilterData({...filterData , processor:e.target.value})}
                            >
                                <MenuItem value="MediaTek Dimensity 700 MT6833">MediaTek Dimensity 700 MT6833</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="refresh_rate">Refresh Rate</InputLabel>
                            <Select
                                label="Refresh Rate"
                                labelId="refresh_rate"
                                value={filterData.refresh_rate}
                                onChange={(e)=>setFilterData({...filterData , refresh_rate:e.target.value})}
                            >
                                <MenuItem value="90 Hz">90 Hz</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                   
                    {/* <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="front_camera">Front Camera</InputLabel>
                            <Select
                                label="Front Camera"
                                labelId="front_camera"
                                value={filterData.resolution_of_front_camera}
                                onChange={(e)=>setFilterData({...filterData , resolution_of_front_camera:e.target.value})}
                            >
                                <MenuItem value="8 MP">8 MP</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}

                    <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="main_camera">Camera</InputLabel>
                            <Select
                                label="Camera"
                                labelId="main_camera"
                                value={filterData.resolution_of_main_camera}
                                onChange={(e)=>setFilterData({...filterData , resolution_of_main_camera:e.target.value})}
                            >
                                <MenuItem value="48 MP">48 MP</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

{/*
                    <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="video">Video</InputLabel>
                            <Select
                                label="Video"
                                labelId="video"
                                value={filterData.video}
                                onChange={(e)=>setFilterData({...filterData , video:e.target.value})}
                            >
                                <MenuItem value="1920x1080 @ 30 fps 1280x720 @ 30 fps">1920x1080 @ 30 fps 1280x720 @ 30 fps</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
*/}
                    {/* <div>
                    
                        <FormControl fullWidth>
                            <InputLabel id="network_type">Network Type</InputLabel>
                            <Select
                                label="Network Type"
                                labelId="network_type"
                                value={filterData.network_type}
                                onChange={(e)=>setFilterData({...filterData , network_type:e.target.value})}
                            >
                                <MenuItem value="5G">5G</MenuItem>
                                <MenuItem value="4G">4G</MenuItem>
                                <MenuItem value="3G">3G</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}

                    {/* <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="sim_support">Sim Support</InputLabel>
                            <Select
                                label="Sim Support"
                                labelId="sim_support"
                                value={filterData.sim_support}
                                onChange={(e)=>setFilterData({...filterData , sim_support:e.target.value})}
                            >
                                <MenuItem value="Dual SIM">Dual SIM</MenuItem>
                                <MenuItem value="sim_support">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}

                    

                    <div>
                        
                        <FormControl fullWidth>
                            <InputLabel id="design">Design</InputLabel>
                            <Select
                                label="Design"
                                labelId="design"
                                value={filterData.design}
                                onChange={(e)=>setFilterData({...filterData , design:e.target.value})}
                            >
                                <MenuItem value="6.5 inches">6.5 inches</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="display">Display</InputLabel>
                            <Select
                                label="Display"
                                labelId="display"
                                value={filterData.display}
                                onChange={(e)=>setFilterData({...filterData , display:e.target.value})}
                            >
                                <MenuItem value="IPS LCD">IPS LCD</MenuItem>
                                <MenuItem value="IOS">IOS</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                </div>

            </div>
            <div className="laptop_filter_submit">
                <button onClick={filterQuery}>Submit</button>
            </div>
        </div>


    )
}

export default LaptopFilter