import styled from "styled-components";

export const StyledWrapper = styled.div`
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: 15px;
    width: 327px;
    padding: 24px 24px 32px 24px;

    div.star {
        background: #262E38;
        border-radius: 50%;
        margin-bottom: 16px;
        width: 40px;
        height: 40px;
        padding: 13.33px;
    }

    h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 30.38px;
        color: #FFFFFF;
        margin-bottom: 10px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #969FAD;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 24px 0;
    }

    .btn-submit {
        background: #FC7614;
        border-radius: 22.5px;
        border: none;
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 1.9px;
        color: #fff;
        width: 100%;
        padding-top: 12px;
        padding-bottom: 12px;
        transition: all 0.3s ease-in-out; 
        &:hover {
            background: #fff;
            color: #FC7614;
        }
    }

    // After submitted (thank you)  styling
    .rating {
        color: #FC7614;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        background: #262E38;
        border-radius: 22.5px;
        padding: 5px 12px;
        display: inline-block;
        margin-top: 24px;
        margin-bottom: 29px;
    }
    .after-submit {
        text-align: center;
    }

    // Media Query
    @media(min-width: 1440px) {
        width: 412px;
        border-radius: 30px;
        padding: 32px 39px 32px 32px;

        div.star {
            padding: 16px;
            width: 48px;
            height: 48px;
            margin-bott0m: 30px;
        }

        h1 {
            font-size: 28px;
            line-height: 35px;
            margin-bottom: 7px;
        }

        p {
            font-size: 15px;
            line-height: 24px;
        }

        ul {
            margin-bottom: 32px;
        }

        .rating {
            margin: 32px 0;
        } 
    }
`;