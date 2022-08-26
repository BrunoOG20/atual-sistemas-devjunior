import {BrowserRouter, Routes, Route} from "react-router-dom";
import Catalog from "./components/Catalog";
import Cart from './components/Cart';
import Description from './components/Description';

function RoutesLink() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Catalog />} />
        <Route path="/item/:id"  element={<Description />} />
        <Route path="/cart"  element={<Cart />} />
        <Route path="*"  element={
        <main style={{ padding: "1rem" }}>
          <p>Not Found</p>
        </main>} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesLink;