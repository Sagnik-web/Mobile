import React from "react";
import './MobileCard.css'
import MobileCardDemo from '../../../Accets/mobileDemo.png'

const MobileCard = () =>{
    return(
        <div className="home_top10_mobile_card">
            <div className="home_top10_mobile_card_img">
                <img src={MobileCardDemo} alt="Mobile"/>
            </div>
            <div className="home_top10_mobile_card_details">
                <h3>Mobile Name</h3>
                <h4>₹ 21000</h4>
                <p>Snapdragon Processor</p>
                <p>4 GB Ram</p>
                <p>32 GB Secondary Memory</p>
                <p>12 MP Main Camera</p>
                <p>8 MP Front Camera</p>
                <div className="home_top_mobile_btn">
                    <p>Read More</p>
                    <p>Add Cart</p>
                </div>
            </div>
        </div>
    )
}

export default MobileCard