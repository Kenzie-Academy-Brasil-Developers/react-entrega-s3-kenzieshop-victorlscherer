import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: gray;
`;

export const CardHq = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 700px;
    margin: 20px;
    border: 2px solid gray;
    border-radius: 10px;
    background-color: white;

    img{
        width: 300px;
        height: 400px;
        image-rendering: optimizeSpeed;
    }

    h2 {
        font-size: 30px;
        text-align: center;
    }
`;

export const BuyButton = styled(Button)({
    backgroundColor: "gray",
    color: "yellow",

    '&:hover': {
        backgroundColor: "darkgray",
    },
})