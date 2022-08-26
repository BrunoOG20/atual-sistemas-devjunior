import styled from "styled-components";

export const Container = styled.div`
    flex: 1 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6.25rem;
    gap: 6.25rem;
    align-content: center;

    @media(max-width:500px) {
        display: flex;
        
    }


`;

export const Title = styled.div`
    margin-left: 5.5rem;

    strong{
        text-align: right;
    }

    @media(max-width:500px) {
        margin-left: 2rem;
        
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    width: 100%;

`;

export const RowCard = styled.div`
    display: flex;
    margin-left: 5.5rem;
    margin-bottom: 2rem;
    height: 43%;
    width: 736px;
    height: 211px;
    left: 160px;
    top: 240px;


    border-radius: 8px;
    background: #fff;

    img {
        border-radius: 8px 0 0 8px ;
    }


    @media(max-width:1450px) {
        max-width: 636px;
        max-height: 211px;
    }
    @media(max-width:1000px) {
        width: 636px;
        height: 211px;
    }
    @media(max-width:500px) {
        margin-left: 2rem;
        margin-right: 2rem;
        width: 320px;
        height: 311px;
        img {
            display: none;
        }
        
    }
   
`;

export const Description = styled.div`
    diplay: flex; 
    margin-left: 1rem;

    .itemPrice {
        float: right; 
        font-size: 22px;
        margin-right: 1rem;
    }


    button {
        background: transparent;
        color: red;
        border: none;
        width: 40px;
        height: 50px;
        float: right;
        margin-bottom: 0;
    }
    
    @media(max-width:1450px) {
        text-align: justify;
        max-width: 380px;
        font-size: 15px;
    }

    @media(max-width:1000px) {
        font-size: 15px;
    }

    @media(max-width:500px) {
        font-size: 15px;
        
    }
`;

export const Checkout = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 35%;
    position: absolute;
    z-index:999; 
    padding: 1.5rem 2rem;
    justify-content: center;
    
    top: 10rem;
    margin-left: 70rem;

    background: #fff;
    line-height: 50px;

    a {
        text-decoration: underline;
        color: #737380;
    }


    .frete {
        border-bottom: 1px solid #d7d8da;
    }

    button {
        width: 100%;
        padding: 1rem;
        margin-bottom: 10rem;
        margin-top: 2rem;

        color: #fff ;
        border: none;
        background: #51B853;
        
        transition: .2s;

        :hover {
            background: #2cb02f;
            filter:drop-shadow(5px 5px 15px green);
        }
    }
    
    @media(max-width:1450px) {
        margin-left: 50rem;
        button{
            margin-top: 1rem;
            margin-bottom: 2rem;
        }
    }

    @media(max-width:1000px) {
        margin-left: 50rem;
        button{
            margin-top: 1rem;
            margin-bottom: 2rem;
        }
    }
    
    @media(max-width: 800px) {
        width: 100%;
        position: relative;

    }

    @media(max-width: 500px) {
        margin-left: 2rem;
        margin-right: 2rem;
        width: 100%;
        position: relative;

    }
`;
export const Values = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    span {
        display: flex;
    }

    strong {
        margin-top: -3rem;
        text-align: right;
    }
`;

export const Select = styled.select`
    padding: 5px;
    border-radius: 8px;
    color: #737380;
    background: #F3F5F6;
    text-align: center;

`;

export const InfoValue = styled.div`
    margin-top: 1rem;

    @media(max-width: 500px) {
        margin-top: 1rem;

    }
`;