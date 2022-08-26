import { useEffect, useState } from 'react';
import Header from '../Header'
import toast, { Toaster } from 'react-hot-toast';
import { Container, DescItem, ImgItem } from './styles';
import { FiShoppingBag } from 'react-icons/fi'
import api from "../../service/api";
import { useParams } from 'react-router';
import { Product } from '../Catalog';
import BackButton from '../BackButton';


function Description() {
  const { id } = useParams()
  const [products, setProducts] = useState<Product[]>([]);
  
  function addCart(nameItem: string, idItem: string) {
    if (localStorage.getItem(idItem)){
      toast.error('Este item ja esta no carinho!')
    } else {
      localStorage.setItem(idItem, nameItem)
      window.location.reload();
      toast.success('Item adicionado com sucesso!')
    }
  }


  useEffect(() => {
    api
    .get("/products")
    .then((response) => setProducts(response.data))
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
}, []);

  return (
    <>
      <Header />
      <BackButton />
      <Container>
      {products.map((prod) => {
        return prod.id == id ?
        <>
        <ImgItem>
            <img src={prod.image_url} alt="item" />
          </ImgItem>
          <DescItem>
              <span>{prod.category == "mugs" ? "Caneca" : "Camisa"}</span><br />
              <h2>{prod.name}</h2>
              <span><b>R$ {prod.price_in_cents/100}</b></span><br />
              <span>*Frete de R$40,00 para todo o Brasil Grátis para compras acima de R$900,00</span><br />
              <h5>DESCRIÇÃO</h5>
              <p>{prod.description}</p>
              <button onClick={() => addCart(prod.name, id)}><FiShoppingBag/> ADICIONAR AO CARRINHO</button>
            </DescItem>
            <Toaster/>
            
          </>
              : "";
            }
        )}
      </Container>
    </>
  );
};

export default Description;