import React from "react";
import './TabletCard.css'
import TabletCardDemo from '../../../Accets/mobileDemo.png'
import { useHistory } from "react-router-dom";

const TabletCard = ({val}) =>{
    const history = useHistory()

    const sendTo =(ID)=>{
        history.push(`/tabletDetail/${ID}`)
    }

    return(
        <div className="tablet_card">
        <div className="tablet_card_img">
            <img src={val.img_one} alt="tablet"/>
        </div>
        <div className="tablet_card_details">
            <h3>{val.name}</h3>
            <h4>₹ {val.price}</h4>
            <p>{val.processor}</p>
            <p>{val.ram} Ram</p>
            <p>{val.internal_memory} Secondary Memory</p>
            <p>{val.rear_camera} Main Camera</p>
            <p>{val.front_camera} Front Camera</p>
            <div className="tablet_btn">
                <p onClick={()=>sendTo(val._id)}>Read More</p>
                <p>Add Cart</p>
            </div>
        </div>
    </div>
    )
}

export default TabletCard