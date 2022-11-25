import "./App.css";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./style/global.js";
import { Header } from "./components/Header/Header.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { api } from "../src/services/api.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getList();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
        products={products}
        setProducts={setProducts}
      />
      <div className="Wrapper">
        <ProductsList
          filteredProducts={filteredProducts}
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </div>
    </div>
  );
}
export default App;
