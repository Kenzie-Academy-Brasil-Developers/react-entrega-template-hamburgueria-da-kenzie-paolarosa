import { HeaderStyled } from "./styles";
import logo from "../../assets/Mask Group.png";
import { useState } from "react";

export function Header({
  products,
  setProducts,
  setFilteredProducts,
  filteredProducts,
}) {
  const [inputValue, setInputValue] = useState("");

  /*  function filteredCards() {
    const filterInclude = products.filter((product) => {
      if (product.name.toLowerCase().includes(inputValue)) {
        return [...filteredProducts, product];
      } else {
        return [];
      }
    });
    setFilteredProducts([...filteredProducts, filterInclude]);
    console.log(filteredProducts);
    console.log(filterInclude);
  } */
  const filteredCards = () => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(inputValue.trim()) ||
        product.category.toLowerCase().includes(inputValue.trim())
    );
    setFilteredProducts(filtered);
  };

  return (
    <HeaderStyled>
      <div>
        <img src={logo} />
        <input
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Digitar Pesquisa"
        ></input>
        <button
          onClick={() => {
            filteredCards();
          }}
          type="button"
        >
          Pesquisar
        </button>
      </div>
    </HeaderStyled>
  );
}
