import Product from "./Product";
import ProductForm from "./ProductForm";

export default function ProductContainer() {
  return (
    <main className="py-16">
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        <Product/>
      </div>
      {/* <!-- products container ends --> */}
      <ProductForm/>
    </div>
  </main>
  );
}
