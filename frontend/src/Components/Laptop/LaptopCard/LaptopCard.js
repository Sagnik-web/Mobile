import React from "react";
import './LaptopCard.css'
import laptopCardDemo from "../../../Accets/mobileDemo.png";
import { useHistory } from "react-router-dom";

const LaptopCard = ({val}) =>{
    const history = useHistory()

    const sendTo = (ID)=>{
        history.push(`/laptopDetail/${ID}`)
    }

    return(
    <div className="laptop_card">
        <div className="laptop_card_img">
            <img src={val.img_one} alt="laptop"/>
        </div>
        <div className="laptop_card_details">
            <h3>{val.name}</h3>
            <h4>₹ {val.price}</h4>
            <p>{val.processor}</p>
            <p>{val.ram} Ram</p>
            <p>{val.HDD_capacity} Secondary Memory</p>
            <p>{val.battery} Battery</p>
            <div className="laptop_btn">
                <p onClick={()=>sendTo(val._id)}>Read More</p>
                <p>Add Cart</p>
            </div>
        </div>
    </div>
    )
}

export default LaptopCard