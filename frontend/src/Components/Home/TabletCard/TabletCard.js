import React from "react";
import './TabletCard.css'
import TabletCardDemo from '../../../Accets/mobileDemo.png'

const TabletCard = () =>{
    return(
        <div className="home_top10_tablet_card">
            <div className="home_top10_tablet_card_img">
                <img src={TabletCardDemo} alt="tablet"/>
            </div>
            <div className="home_top10_tablet_card_details">
                <h3>Tablet Name</h3>
                <h4>₹ 21000</h4>
                <p>Snapdragon Processor</p>
                <p>4 GB Ram</p>
                <p>32 GB Secondary Memory</p>
                <p>12 MP Main Camera</p>
                <p>8 MP Front Camera</p>
                <div className="home_top_tablet_btn">
                    <p>Read More</p>
                    <p>Add Cart</p>
                </div>
            </div>
        </div>
    )
}

export default TabletCard