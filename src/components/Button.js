import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    background: #262E38;
    border: none;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    color: #7C8798;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #FC7614;
        color: #fff;
    }
    &:focus{
        background-color: #7C8798;
        color: #fff;
    }

    @media(min-width: 1440px) {
        width: 51px;
        height: 51px;
        font-size: 16px;
    }
`;

export default function Button({number, onClick}) {
    const handleClick= (e) => {
        e.preventDefault();
        onClick(number);
    }
    return  <Btn onClick={handleClick}>{number}</Btn>
}