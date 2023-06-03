import React, { useEffect, useState } from "react";
import './Laptop.css'
import Search from '../../Accets/Vector.png'
import Sidebericon from '../../Accets/sidebericon.svg'
import LaptopCard from "./LaptopCard/LaptopCard";
import LaptopFilter from "./LaptopFilter/LaptopFilter";
import axios from "axios";

const Laptop = () =>{
    const [laptopName, setLaptopName] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [laptopInfo,setLaptopInfo] = useState([])
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
        // if(filterData.screen_resolution){
        //     query = query+`screen_resolution=${filterData.screen_resolution}&`
        // }
        
        if(filterData.processor){
            query = query+`processor=${filterData.processor}&`
        }
        
        // if(filterData.system_on_chip){
        //     query = query+`system_on_chip=${filterData.system_on_chip}&`
        // }
        
        // if(filterData.system_core){
        //     query = query+`system_core=${filterData.system_core}&`
        // }
        
        if(filterData.refresh_rate){
            query = query+`refresh_rate=${filterData.refresh_rate}&`
        }
        
        // if(filterData.no_of_front_camera){
        //     query = query+`front_camera_setup=${filterData.no_of_front_camera}&`
        // }
        
        // if(filterData.resolution_of_front_camera){
        //     query = query+`search_front_camera=${filterData.resolution_of_front_camera}&`
        // }
        
        // if(filterData.no_of_main_camera){
        //     query = query+`rare_camera_setup=${filterData.no_of_main_camera}&`
        // }
        
        if(filterData.resolution_of_main_camera){
            query = query+`camera=${filterData.resolution_of_main_camera}&`
        }
        
        // if(filterData.video){
        //     query = query+`rare_video_recording=${filterData.video}&`
        // }
        
        // if(filterData.network_type){
        //     query = query+`search_network_support=${filterData.network_type}&`
        // }
        
        // if(filterData.sim_support){
        //     query = query+`search_sim_slot=${filterData.sim_support}&`
        // }

        // if(filterData.connection_and_more){
        //     query = query+`connection_and_more=${filterData.connection_and_more}&`
        // }

        if(filterData.design){
            query = query+`display=${filterData.design}&`
        }

        if(filterData.screen_type){
            query = query+`display_type=${filterData.screen_type}&`
        }

        if(query){
            console.log(query);

            axios.get(`http://localhost:5000/api/v1/laptop?${query}`)
            .then(res=>{
                console.log(res.data);
                setLaptopInfo(res.data.laptopData)
    
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    return(
        <>
        <div className="laptop_nav">
            <div className="laptop_nav_img">
                <img src={Sidebericon} alt="Search" onClick={()=>setIsVisible(!isVisible)}/>
            </div>
            <div className="laptop_search">
                <input placeholder="Laptop Search" type="text" value={laptopName} onChange={e=>setLaptopName(e.target.value)} />
                <button onClick={()=>nameSearch()}><img src={Search} alt="Search"/></button> 
            </div>  
        </div>

        <div className="laptop_filter_bg">
            {isVisible ? (
                <LaptopFilter filterQuery={filterQuery} filterData={filterData} setFilterData={setFilterData} isVisible={isVisible} setIsVisible={setIsVisible} />
            ):null}
        </div>
        
        <div className="laptop_card_container_bg">
                <div className="laptop_card_container">
                    {laptopInfo.map(el=>
                        <div className="laptop_card_rapper" key={el._id}>
                            <LaptopCard val={el}/>
                        </div>
                    )}
                    
          
                </div>    
        </div>
        </>
    )
}

export default Laptop