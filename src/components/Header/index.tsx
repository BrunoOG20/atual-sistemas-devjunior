import { Container, HeaderRight, HeaderLeft, Input, Span } from './styles';
import { FiShoppingBag, FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { qntItenInCart } from '../Cart';

function Header() {
  return (
    <Container>
        <HeaderLeft>
          <Link to="/"><Span>capputeeno</Span></Link>
        </HeaderLeft>
        <HeaderRight>
            <Input placeholder='Procurando por algo específico?'/>
              <button>
                <i>
                  <FiSearch size={20} color={"#5D5D6D"}/>
                </i>
              </button>
              
              <Link to="/cart"><FiShoppingBag size={25} color={"#5D5D6D"}/>
                <span>{qntItenInCart()}</span>
              </Link>
        </HeaderRight>
        
    </Container>
  );
};

export default Header;