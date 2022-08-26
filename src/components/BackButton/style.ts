import styled from "styled-components";

export const Button = styled.button`
    dispaly: flex;
    
    margin-top: 3rem;
    margin-left: 5rem;

    justify-content: space-around;
    align-items: center;
    width: 5%;



    background: transparent;
    border: none;

    @media(max-width:500px) {
        margin-left: 2rem;
        
    }
`;