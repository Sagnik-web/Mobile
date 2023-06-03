import React from "react";
import './Footer.css'
import Insta from '../../Accets/insta.svg'

const Footer = () =>{
    return(
        <>
        <div className="footer_container">
            <div className="footer">
                <div className="footer_logo">
                    {/* <img src="" alt=""/> */}
                    Logo
                </div>
                <div className="footer_details">
                    <div className="footer_about">
                        <h4>About Us</h4>
                        <p>Team</p>
                        <p>Feedback</p>
                    </div>
                    <div className="footer_blog">
                        <h4>Blog</h4>
                        <p>Forum</p>
                    </div>
                    <div className="footer_help">
                        <h4>Help Desk</h4>
                        <p>Help</p>
                    </div>
                    <div className="footer_social">
                        <h4>Social</h4>
                        <img src={Insta} alt="Instagram"/>
                        <img src={Insta} alt="Facebook"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_copyright">
            <p>All Rights are reserved 2020 - 2021</p>
        </div>
        </>
    )
}

export default Footer