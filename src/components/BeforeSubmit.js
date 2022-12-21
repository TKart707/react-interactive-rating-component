import React from "react";
import starIcon from "../assets/icon-star.svg";
import Button from "./Button";
import {StyledWrapper} from "./styles/Wrapper.Styled";

const numbers = [1, 2, 3, 4, 5];

export default function BeforeSubmit({onSubmit, onClick}) {
    const buttonList = numbers.map((number) => {
        return (
            <li key={number}>
                <Button 
                    onClick={onClick}
                    number={number}
                />
            </li>
        )
    });

    return (
        <>
            <StyledWrapper>
                <div className="star">
                    <img src={starIcon} alt="star icon" />
                </div>
                
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. 
                    All feedback is appreciated to help us improve our offering!
                </p>
                <ul>
                    {buttonList}
                </ul>
                <div className="btn-container">
                    <button 
                        className="btn-submit"
                        onClick={onSubmit}
                    >
                        SUBMIT
                    </button>
                </div>
            </StyledWrapper>
        </>
    )
}

