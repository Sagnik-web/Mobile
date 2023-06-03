import React,{useEffect, useState} from "react";
import './Tablet.css'
import TabletCard from "./TabletCard/TabletCard";
import Search from '../../Accets/Vector.png'
import Sidebericon from '../../Accets/sidebericon.svg'
import TabletFilter from "./TabletFilter/TabletFilter";
import axios from "axios";

const Tablet = () =>{
    const [tabletName, setTabletName] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [tabletInfo, setTabletInfo] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/tablet')
        .then(res=>{
            console.log(res.data);
            setTabletInfo(res.data.tabletData)

        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    const nameSearch = ()=>{
        axios.get(`http://localhost:5000/api/v1/tablet?name=${tabletName}`)
        .then(res=>{
            console.log(res.data);
            setTabletInfo(res.data.tabletData)

        })
        .catch(err=>{
            console.log(err);
        })
    }

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
        
        // if(filterData.system_on_chip){
        //     query = query+`system_on_chip=${filterData.system_on_chip}&`
        // }
        
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
        
        // if(filterData.video){
        //     query = query+`rare_video_recording=${filterData.video}&`
        // }
        
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

            axios.get(`http://localhost:5000/api/v1/tablet?${query}`)
            .then(res=>{
                console.log(res.data);
                setTabletInfo(res.data.tabletData)
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    return(
        <>
        <div className="tablet_nav">
            <div className="tablet_nav_img">
                <img src={Sidebericon} alt="Search" onClick={()=>setIsVisible(!isVisible)}/>
            </div>
            <div className="tablet_search">
                <input placeholder="Tablet Search" type="text" value={tabletName} onChange={e=>setTabletName(e.target.value)}/>
                <button onClick={()=>nameSearch()}><img src={Search} alt="Search"/></button> 
            </div>  
        </div>

        <div className="tablet_filter_bg">
            {isVisible ? (
                <TabletFilter filterData={filterData} setFilterData={setFilterData} filterQuery={filterQuery} setIsVisible={setIsVisible} />
            ):null}
        </div>
        <div className="tablet_card_container_bg">
                <div className="tablet_card_container">
                    {tabletInfo.map(el=>
                        <div className="tablet_card_rapper" key={el._id}>
                            <TabletCard val={el}/>
                        </div>    
                    )}
                    
                    {/* <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div>
                    <div className="tablet_card_rapper">
                    <TabletCard/>
                    </div> */}
                </div>    
            </div>
        </>
    )
}

export default Tablet