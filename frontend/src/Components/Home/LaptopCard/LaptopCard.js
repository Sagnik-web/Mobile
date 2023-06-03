import React from "react";
import './LaptopCard.css'
import LaptopCardDemo from '../../../Accets/mobileDemo.png'

const LaptopCard = () =>{
    return(
        <div className="home_top10_laptop_card">
            <div className="home_top10_laptop_card_img">
                <img src={LaptopCardDemo} alt="Laptop"/>
            </div>
            <div className="home_top10_laptop_card_details">
                <h3>Laptop Name</h3>
                <h4>₹ 21000</h4>
                <p>Snapdragon Processor</p>
                <p>4 GB Ram</p>
                <p>32 GB Secondary Memory</p>
                <p>12 MP Main Camera</p>
                <p>8 MP Front Camera</p>
                <div className="home_top_laptop_btn">
                    <p>Read More</p>
                    <p>Add Cart</p>
                </div>
            </div>
        </div>
    )
}

export default LaptopCard