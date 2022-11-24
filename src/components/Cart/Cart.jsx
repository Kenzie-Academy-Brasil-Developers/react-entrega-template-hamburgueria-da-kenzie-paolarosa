import { CartStyled } from "./styles.js";
import { CartProducts } from "../CartProducts/CartProducts.jsx";

export function Cart({ currentSale, setCurrentSale }) {
  function deleted(product) {
    const newCart = currentSale.filter((sale) => sale !== product);
    setCurrentSale(newCart);
  }

  function deletedAll() {
    setCurrentSale([]);
  }

  const sum = currentSale.reduce((firstValue, actualValue) => {
    return actualValue.price + firstValue;
  }, 0);

  return (
    <CartStyled>
      <div className="cartTitle">Carrinho de compras</div>

      {currentSale.length === 0 ? (
        <ul>
          <div className="divNoCard">
            <h2> Sua sacola está vazia </h2>
            <p> Adicione tens </p>
          </div>
        </ul>
      ) : (
        <ul>
          {currentSale.map((sale, index) => (
            <CartProducts
              deleted={deleted}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              sale={sale}
              key={index}
            />
          ))}
          <div className="divTotal">
            <div>
              <h5>Total</h5>
              <p>R${sum.toFixed(2)}</p>
            </div>
            <button
              onClick={() => {
                deletedAll();
              }}
            >
              Remover todos
            </button>
          </div>
        </ul>
      )}
    </CartStyled>
  );
}
