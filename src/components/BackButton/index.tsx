import { RiArrowGoBackFill } from 'react-icons/ri';
import { Button } from './style';
import { createBrowserHistory } from "history";

function BackButton(){
    const history = createBrowserHistory({ window });
    
    function returnPage(){
        history.push('/');
        window.location.reload()
    }

    return (
        <>
        <Button onClick={returnPage}><RiArrowGoBackFill/>    Voltar</Button>
        </>
    );
}

export default BackButton