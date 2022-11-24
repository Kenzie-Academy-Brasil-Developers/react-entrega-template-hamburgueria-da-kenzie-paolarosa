import { toast } from "react-toastify";
import { LiStyled } from "./styles.js";

export function Product({ product, currentSale, setCurrentSale }) {
  function addCart(productData) {
    if (
      !currentSale.find(
        (sale) => sale.name.toLowerCase() === productData.name.toLowerCase()
      )
    ) {
      setCurrentSale([...currentSale, productData]);
    } else {
      toast("Produto já adicionado!");
    }
  }

  return (
    <LiStyled>
      <div>
        <img src={product.img} />
      </div>
      <h3>{product.name}</h3>
      <h4>{product.category}</h4>
      <p>R${product.price.toFixed(2)}</p>
      <button onClick={() => addCart(product)}>Adicionar</button>
    </LiStyled>
  );
}
