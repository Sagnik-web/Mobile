import React from "react";
import './Home.css'
import BannerImg from '../../Accets/Banner.png'
import MobileImg from '../../Accets/mobileImg.png'
import MobileCard from "./MobileCard/MobileCard";
import TabletCard from "./TabletCard/TabletCard";
import LaptopCard from "./LaptopCard/LaptopCard";
import { useHistory } from "react-router-dom";


const Home = () =>{
    const history = useHistory()

    return(
        <div className="home_bg">

            <div className="home_banner_container">
                <div className="home_banner_text">
                    <h3>Grow your business with Vesperr</h3>
                    <p className="home_banner_main_text">We are team of talented designers making websites with Bootstrap</p>
                    <p className="home_banner_text_btn">Get Started</p>
                </div>
                <div className="home_banner_img">
                    <img src={BannerImg} alt="Banner"/>
                </div>
            </div>

            <div className="home_mobile">
                <div className="home_mobile_text">
                    <h3>Mobile</h3>
                    <p className="home_mobile_text_main">We are team of talented designers making websites with Bootstrap</p>
                    <p className="home_mobile_btn" onClick={()=>history.push('/mobile')}>Get Started</p>
                </div>
                <div className="home_mobile_img">
                    <img src={MobileImg} alt="Mobile"/>
                </div>
            </div>

            <div className="home_laptop">
                <div className="home_laptop_text">
                    <h3>Laptop</h3>
                    <p className="home_laptop_text_main">We are team of talented designers making websites with Bootstrap</p>
                    <p className="home_laptop_btn" onClick={()=>history.push('/laptop')}>Get Started</p>
                </div>
                <div className="home_laptop_img">
                    <img src={MobileImg} alt="laptop"/>
                </div>
            </div>

            <div className="home_tablet">
                <div className="home_tablet_text">
                    <h3>Tablet</h3>
                    <p className="home_tablet_text_main">We are team of talented designers making websites with Bootstrap</p>
                    <p className="home_tablet_btn" onClick={()=>history.push('/tablet')}>Get Started</p>
                </div>
                <div className="home_tablet_img">
                    <img src={MobileImg} alt="Tablet"/>
                </div>
            </div>

            
            <h3 className="home_top_mobile">Top Mobiles</h3>
            <div className="home_top10_mobile">
                <div className="home_top10_mobile_card_rapper">
                    <MobileCard/>
                </div>
                <div className="home_top10_mobile_card_rapper">
                    <MobileCard/>
                </div>
                <div className="home_top10_mobile_card_rapper">
                    <MobileCard/>
                </div>                
            </div>
            <div className="home_mobile_explore_rapper">
                <p className="home_mobile_explore">Explore More</p>
            </div>
            

            <h3 className="home_top_laptop">Top Laptop</h3>
            <div className="home_top10_laptop">
                <div className="home_top10_laptop_card_rapper">
                    <LaptopCard/>
                </div>
                <div className="home_top10_laptop_card_rapper">
                    <LaptopCard/>
                </div>
                <div className="home_top10_laptop_card_rapper">
                    <LaptopCard/>
                </div>
            </div>
            <div className="home_laptop_explore_rapper">
                <p className="home_laptop_explore">Explore More</p>
            </div>


            <h3 className="home_top_tablet">Top Tablet</h3>
            <div className="home_top10_tablet">
                <div className="home_top10_tablet_card_rapper">
                    <TabletCard/>
                </div>
                <div className="home_top10_tablet_card_rapper">
                    <TabletCard/>
                </div>
                <div className="home_top10_tablet_card_rapper">
                    <TabletCard/>
                </div>
                
            </div>
            <div className="home_tablet_explore_rapper">
                <p className="home_tablet_explore">Explore More</p>
            </div>
        </div>
    )
}

export default Home