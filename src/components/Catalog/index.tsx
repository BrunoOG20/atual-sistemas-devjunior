import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from "../../service/api";
import Description from '../Description';
import Header from '../Header';
import { Card, Container, Filter, Products, Select } from './styles';

export interface Product {
    name: string;
    description: string;
    image_url: string;
    category: string;
    id: string;
    price_in_cents: number;
    sales: number;
    created_at: string;
}

function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [all, setAll] = useState(true)
    const [caneca, setCaneca] = useState(false)
    const [camisa, setCamisa] = useState(false)

    const [search, setSearch] = useState(false)

    const [option, setOption] = useState("")


    function showAll(){
        setAll(!all)
        setCamisa(false)
        setCaneca(false)
    }

    function showCaneca(){
        setCaneca(!caneca)
        setCamisa(false)
        setAll(false)
    }

    function showCamisa(){
        setCamisa(!camisa)
        setCaneca(false)
        setAll(false)
    }

    function getItem(id: string){
        Description()
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
          <Filter>
              <button onClick={showAll} >Todos os produtos</button>
              <button onClick={showCamisa}>Camisetas</button>
              <button onClick={showCaneca}>Canecas</button>

              <Select onChange={(ev) => setOption(ev.target.value)}>
                <option value="0">Organizar Por</option>
                <option value="1">Novidade</option>
                <option value="2">Preço: Maior - menor</option>
                <option value="3">Preço: Menor - maior</option>
                <option value="4">Mais Vendidos</option>
              </Select>

          </Filter>
          <Container>
              <Products>

                  {caneca ? products.map((prod) => {
                      return prod.category == "mugs" ?
                      
                          <Card onClick={() => getItem(prod.id)} >
                            <Link to={`/item/${prod.id}`}>
                              <img src={prod.image_url} alt="item" />
                              <span>{prod.name}</span>
                              <p><b>R$ {prod.price_in_cents / 100}</b></p>
                              </Link>
                          </Card>
                          
                          : "";
                  }
                  ) : ""}


                  {camisa ? products.map((prod) => {
                      return prod.category == "t-shirts" ?
                          <Card onClick={() => getItem(prod.id)}>
                            <Link to={`/item/${prod.id}`}>
                              <img src={prod.image_url} alt="item" />
                              <span>{prod.name}</span>
                              <p><b>R$ {prod.price_in_cents / 100}</b></p>
                              </Link>
                          </Card>
                          : "";
                  }
                  ) : ""}

                  {all ? products.map((prod) => {
                      return (
                          <Card onClick={() => getItem(prod.id)}>
                            <Link to={`/item/${prod.id}`}>
                              <img src={prod.image_url} alt="item" />
                              <span>{prod.name}</span>
                              <p><b>R$ {prod.price_in_cents / 100}</b></p>
                              </Link>
                          </Card>
                      );
                  }) : ""}

              </Products>

          </Container>
      </>
  );
};

export default Catalog;