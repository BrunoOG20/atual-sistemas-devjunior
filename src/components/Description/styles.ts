import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100rem;
    margin-top: 3rem;
    margin-left: 10rem;
    margin-right: 10rem;

    @media(max-width:1450px) {
        button{
            margin-top: 8px;
        }
    }
      @media(max-width:1000px) {
        flex-direction: column;
        font-size: 20px;
        
      }
      @media(max-width:500px) {
        flex-direction: column;
        margin-left: 1rem;
        margin-right: 1rem;
        
    }
`;

export const DescItem = styled.div`
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
    flex: 2;
    
    float: right;

    text-align: justify;

    line-height: 150%;


    button {
        height: 40px;
        width: 50%;
        margin-top: 9rem;
        align-items: center;
        color: #F5F5FA;
        background: #115D8C;
        border: none;
        padding: 10px;

        transition: .2s;

        :hover{
            background: #0b5b8c;
            filter:drop-shadow(5px 5px 15px #0b5b8c);
        }
    }

    @media(max-width:1450px) {
        button{
            margin-top: 8px;
        }
    }
      @media(max-width:1000px) {
        left: 100px;
        font-size: 20px;
        button{
            margin-top: 2rem;
            margin-bottom: 2rem;
            width: 100%;
        }
      }
      @media(max-width:500px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const ImgItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    img {
        width: 500px;
      
    };

    @media(max-width:500px) {
        display: block;
        
    }
`;