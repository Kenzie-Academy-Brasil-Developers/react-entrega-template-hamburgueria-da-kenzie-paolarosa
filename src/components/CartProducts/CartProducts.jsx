import { CartProductsStyled } from "./styles.js";

export function CartProducts({ sale, deleted, currentSale, setCurrentSale }) {
  return (
    <CartProductsStyled>
      <div>
        <img src={sale.img} />
      </div>
      <div className="titleDescription">
        <h3>{sale.name}</h3>
        <h4>{sale.category}</h4>
      </div>

      <button
        className="buttonRemove"
        onClick={() => {
          deleted(sale);
        }}
      >
        Remover
      </button>
    </CartProductsStyled>
  );
}
