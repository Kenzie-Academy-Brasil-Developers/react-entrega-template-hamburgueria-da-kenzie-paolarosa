import { Product } from "../Product/Product.jsx";
import { UlStyled } from "./styles.js";

export function ProductsList({
  products,
  currentSale,
  setCurrentSale,
  filteredProducts,
}) {
  if (filteredProducts.length !== 0) {
    return (
      <UlStyled>
        {filteredProducts.map((product, index) => (
          <Product
            product={product}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            key={index}
          />
        ))}
      </UlStyled>
    );
  } else {
    return (
      <UlStyled>
        {products.map((product, index) => (
          <Product
            product={product}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            key={index}
          />
        ))}
      </UlStyled>
    );
  }
}
