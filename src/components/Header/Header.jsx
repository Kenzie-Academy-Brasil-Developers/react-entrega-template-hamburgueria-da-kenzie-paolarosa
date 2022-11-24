import { HeaderStyled } from "./styles";
import logo from "../../assets/Mask Group.png";
import { useState } from "react";

export function Header({ products, setProducts, setFilteredProducts }) {
  const [inputValue, setInputValue] = useState("");

  function filteredCards() {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(inputValue)
      )
    );
  }
  function renderChange(event) {
    const text = event.currentTarget.value.toLowerCase();
    setInputValue(text);
    setFilteredProducts(
      products.filter((product) => product.name.toLowerCase().includes(text))
    );
  }
  return (
    <HeaderStyled>
      <div>
        <img src={logo} />
        <input onChange={renderChange} placeholder="Digitar Pesquisa"></input>
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
