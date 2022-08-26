import { useEffect, useState } from "react";
import api from "../../service/api";
import BackButton from "../BackButton";
import { Product } from "../Catalog";
import Header from "../Header";
import { RowCard, Container, Checkout, Title, Values, Description, CardContainer, Select, InfoValue} from "./style";

import { CgTrash } from "react-icons/cg";
import { Link } from "react-router-dom";
 
export function qntItenInCart(){
    var keys = Object.keys(localStorage);
    return keys.length
}

function Cart(){
    const [products, setProducts] = useState<Product[]>([]);
    const valEntrega: number= 40

    var values: any[] = [], items: any[] = [], filtred: Product[] = [];
    var keys = Object.keys(localStorage);
    var i = keys.length, x = 0, y = 0, z = 0; 


    while ( i-- ) {
        values.push(keys[i]);
        x++;
    }

    while (x != y){
        items.push(values[y]);
        y++;
    }

    useEffect(() => {
        api
        .get("/products")
        .then((response) => setProducts(response.data))
        .catch((err) => {
             console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    var totalValue: number = 0;

    while (z < qntItenInCart()){
        const found = products.find(prod => prod.id == items[z]);
        if (found){
                filtred.push(found);
                totalValue = totalValue + (found.price_in_cents/100);
            }                       
        z++;
    }  

     

    function removeItem(idItem: string){
        localStorage.removeItem(idItem);
        window.location.reload();
    }

    function makeCheckout(){
        localStorage.clear();
        window.location.reload();
    }

    

    return(
        <>
        <Header />
        <BackButton />
        <>
        
        <Title>
            <h1>SEU CARRINHO</h1>
            
            <h3>{qntItenInCart() >= 1 ? 
                `Total (${qntItenInCart()} produtos) R$ ${totalValue.toFixed(2)}` 
                : "Carrinho Vazio"
            }
            </h3><br />
        </Title>
       
            {filtred.map((filtred) => {
                return (
                    <>
                    <CardContainer>
                        
                        <RowCard>
                            <img src={filtred.image_url} alt="Item" style={{"width": 200}}/>
                            <Description>
                                <Link to={`/item/${filtred.id}`} style={{"color": "#000"}}>
                                <h2>{filtred.name}<button onClick={() => removeItem(filtred.id)}><CgTrash size={22}/></button></h2>
                                <span className="desc">{filtred.description.length < 190 ? filtred.description : `${filtred.description.substring(0, 190)} ... `}</span><br />
                                </Link>
                                <InfoValue>
                                <Select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Select>
                                <span className="itemPrice"><b>R$ {filtred.price_in_cents/100}</b></span>
                                </InfoValue>
                            </Description>
                        </RowCard>
                        </CardContainer>
                    </>
                )
            })
            }
             <Container>
            <Checkout>
                <h3>RESUMO DO PEDIDO</h3>
                <Values>
                    <span>Subtotal de produtos  </span><strong>R$ {totalValue.toFixed(2)}</strong>
                    <span className="frete">Entrega   </span><strong>R$ {valEntrega.toFixed(2)}</strong>
                    <span>Total  </span><strong>R$ {(totalValue+valEntrega).toFixed(2)}</strong>
                </Values>
                <button onClick={makeCheckout}>FINALIZAR COMPRA</button>

                <a href="#">AJUDA</a>
                <a href="#">REEMBOLSOS</a>
                <a href="#">ENTREGA E FRETE</a>
                <a href="#">TROCAS E DEVOLUÇÕES</a>
            </Checkout>
        </Container>
        
        </>
        </>
        
    );
}

export default Cart;
