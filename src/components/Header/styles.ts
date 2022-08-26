import styled from 'styled-components';


export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    border-bottom: 1px solid #FFFFFF;
    background:#FFFF;
    overflow: hidden;

    @media(max-width:1450px) {
      max-width: 90rem;
    }
    @media(max-width:1000px) {
      max-width: 60rem;
    }
    @media(max-width:500px) {
      max-width: 30rem;
      zoom: 100%;
      overflow: hidden;
    }
    @media(max-width: 400px) {
      max-width: 30rem;
      zoom: 80%;
      overflow: hidden;
    }
    
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  button {
    background: transparent;
    border: none;
    i {
      float:left;
      margin:3px 0px 0px -32px;
    }
  }
  a {
    margin-left: 1.5rem;
  }

  a > span {
    padding: 3px;
    border-radius: 50%;
    font-size: 13px;
    color: white;
    background-color: red;
  }

  @media(max-width:500px) {
    margin-left: 30px;
    zoom: 10%
    a {
      margin-left: .2rem;
    }
    a > span {
      position: flex;
      padding: .2rem;
      background: red;
    }
  }
  
  
`;

export const HeaderLeft = styled.div`
  align-items: center;
`;

export const Span = styled.span`
  position: absolute;
  width: 544px;
  height: 80px;
  left: 160px;
  top: 0px;

  font-family: 'Saira Stencil One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;

  display: flex;
  align-items: center;

  color: #5D5D6D;

  @media(max-width:1450px) {
    font-size: 30px;
  }
  @media(max-width:1000px) {
    left: 100px;
    font-size: 20px;
  }
  @media(max-width:500px) {
    display: none;
    
  }
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  display: flex;
  width: 352px;
  height: 42px;
  left: 871px;
  top: 19px;

  font-size: 14px;

  background: #F3F5F6;
  border-radius: 8px;
  border: none;
  padding: .8rem;

  ::placeholder {
    width: 206px;
    height: 22px;
    left: 16px;
    top: 10px;


    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    display: flex;
    align-items: center;
    text-align: center;


    color: #737380;
  }

  
`
