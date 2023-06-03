import React, {useEffect, useState} from "react";
import './Mobile.css'
import Search from '../../Accets/Vector.png'
import Sidebericon from '../../Accets/sidebericon.svg'
import MobileCard from "./MobileCard/MobileCard";
import MobileFilter from './MobileFilter/MobileFilter'
import axios from "axios";

const Mobile = () =>{
    const [mobileName, setMobileName] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [mobileInfo, setMobileInfo] = useState([])
    const [filterData, setFilterData] = useState({
        os:'',
        price:[0,20000],
        categories:'',
        ram:'',
        memory:'',
        battery:'',
        display:'',
        screen_resolution:'',
        processor:'',
        system_on_chip:'',
        system_core:'',
        refresh_rate:'',
        no_of_front_camera:'',
        resolution_of_front_camera:'',
        no_of_main_camera:'',
        resolution_of_main_camera:'',
        video:'',
        network_type:'',
        sim_support:'',
        connection_and_more:'',
        design:'',
        screen_type:''
    })
    let query = ''


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


    const filterQuery =()=>{
        if(filterData.os){
            query = query+`os=${filterData.os}&`
        }

        if(filterData.price){
            query = query+`price[gte]=${filterData.price[0]}&price[lte]=${filterData.price[1]}&`
            console.log(filterData.price);
        }
        
        if(filterData.categories){
            query = query+`categories=${filterData.categories}&`
        }

        if(filterData.ram){
            query = query+`ram=${filterData.ram}&`
        }
        
        if(filterData.memory){
            query = query+`internal_memory=${filterData.memory}&`
        }

        if(filterData.battery){
            query = query+`battery=${filterData.battery}&`
        }

        if(filterData.display){
            query = query+`display_type=${filterData.display}&`
        }

        // as
        if(filterData.screen_resolution){
            query = query+`screen_resolution=${filterData.screen_resolution}&`
        }
        
        if(filterData.processor){
            query = query+`processor=${filterData.processor}&`
        }
        
        if(filterData.system_on_chip){
            query = query+`system_on_chip=${filterData.system_on_chip}&`
        }
        
        if(filterData.system_core){
            query = query+`system_core=${filterData.system_core}&`
        }
        
        if(filterData.refresh_rate){
            query = query+`refresh_rate=${filterData.refresh_rate}&`
        }
        
        // if(filterData.no_of_front_camera){
        //     query = query+`front_camera_setup=${filterData.no_of_front_camera}&`
        // }
        
        if(filterData.resolution_of_front_camera){
            query = query+`search_front_camera=${filterData.resolution_of_front_camera}&`
        }
        
        // if(filterData.no_of_main_camera){
        //     query = query+`rare_camera_setup=${filterData.no_of_main_camera}&`
        // }
        
        if(filterData.resolution_of_main_camera){
            query = query+`search_rear_camera=${filterData.resolution_of_main_camera}&`
        }
        
        if(filterData.video){
            query = query+`rare_video_recording=${filterData.video}&`
        }
        
        if(filterData.network_type){
            query = query+`search_network_support=${filterData.network_type}&`
        }
        
        if(filterData.sim_support){
            query = query+`search_sim_slot=${filterData.sim_support}&`
        }

        if(filterData.connection_and_more){
            query = query+`connection_and_more=${filterData.connection_and_more}&`
        }

        if(filterData.design){
            query = query+`display=${filterData.design}&`
        }

        if(filterData.screen_type){
            query = query+`display_type=${filterData.screen_type}&`
        }

        if(query){
            console.log(query);

            axios.get(`http://localhost:5000/api/v1/mobile?${query}`)
            .then(res=>{
                console.log(res.data);
                setMobileInfo(res.data.mobileData)
    
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }


    return(
        <>
        <div className="mobile_nav">
            <div className="mobile_nav_img">
                <img src={Sidebericon} alt="Search" onClick={()=>setIsVisible(!isVisible)}/>
            </div>
            <div className="mobile_search">
                <input placeholder="Mobile Search" type="text" value={mobileName} onChange={e => setMobileName(e.target.value)}/>
                <button onClick={()=>nameSearch()}><img src={Search} alt="Search"/></button> 
            </div>  
        </div>
        <div className="laptop_filter_bg" id="laptop_filter">
            {isVisible ? 
            <MobileFilter filterData={filterData} setFilterData={setFilterData} filterQuery={filterQuery} setIsVisible={setIsVisible}/> 
             :null}
        </div>
        <div className="mobile_card_container_bg">
                <div className="mobile_card_container">
                    {mobileInfo.map(el=>
                        <div className="mobile_card_rapper" key={el._id}>
                            <MobileCard val={el}/>
                        </div>
                    )}
                    
                   
                </div>    
            </div>
        </>
    )
}

export default Mobile