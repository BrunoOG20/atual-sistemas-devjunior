import styled from "styled-components";

export const Container = styled.div`
    display: flex;    
    align-items: center;
    margin-top: 3rem;
    margin-left: 13rem;


    @media(max-width:1000px) {
        max-width: 60rem;
        max-width: 80rem;
        margin-left: 5rem;
        zoom: 100%;
    }
    @media(max-width:500px) {
        max-width: 30rem;
        margin-left: 1.5rem;
        zoom: 100%;
    }
    
`;

export const Card = styled.div`
    width: 20%;
    background: #fff;

    margin-right: 1.5rem;
    margin-bottom: 1.5rem;

    border-radius: 5px;

    cursor: pointer;
    transition: .2s;

    a {
        color: black;
    }

    &:hover{
        transform: scale(0.98);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
        border-radius: 5px 5px 0 0;
    }

    span,p{
        display: flex;
        padding: 2px 16px;
    }
    @media(max-width:1000px) {
        max-width: 60rem;
    }
    @media(max-width:500px) {
        width: 100%;
    }


`;


export const Products = styled.div`
    display: flex;
    flex-flow: row wrap;

`;

export const Filter = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-left: 13rem;

    button {
        margin-right: 2rem;
        background: transparent;

        font-size: 17px;
        border: none;
        &:hover {
            font-weight: bold;
            border-bottom: 4px solid orange;
        }
    }
    @media(max-width:1000px) {
        max-width: 60rem;
        margin-left: 8rem;
    }
      @media(max-width:500px) {
        max-width: 30rem;
        margin-left: 1rem;
        zoom: 100%;
    }
    @media(max-width:400px) {
        display: block;
        max-width: 30rem;
        margin-left: 3.3rem;
        zoom: 100%;
    }
`;

export const Select = styled.select`
    padding: 5px;
    border: none;
    font-size: 14px;
    color: #737380;
    background: transparent;
    cursor: pointer;
    text-align: left;

    outline: none;

    margin-left: 55rem;

    option {
        background: #F3F5F6;
    }

    @media(max-width:1450px) {
        margin-left: 28rem;
    }
    @media(max-width:1000px) {
        margin-left: 2rem;
    }
      @media(max-width:500px) {
        max-width: 30rem;
        margin-left: 0
        zoom: 100%;

    }
`;