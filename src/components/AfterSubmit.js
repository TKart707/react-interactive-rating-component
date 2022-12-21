import React from "react";
import thankImg from "../assets/illustration-thank-you.svg"
import {StyledWrapper} from "./styles/Wrapper.Styled";


export default function AfterSubmit({ratingResult}) {
    return (
        <StyledWrapper>
            <div className="after-submit">
                <div className="thankImgContainer">
                    <img className="thankImg" src={thankImg} alt="" />  
                </div>      
                <p className="rating">
                    You selected {ratingResult} out of 5
                </p>
                <h1>
                    Thank you!
                </h1>
                <p> 
                    We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!
                </p>
            </div>
        </StyledWrapper>
    )
}