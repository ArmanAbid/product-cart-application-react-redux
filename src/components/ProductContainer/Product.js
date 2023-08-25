import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/Cart/action";
import { decrementProduct } from "../../redux/Product/action";

export default function Product() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addCart(product));
    dispatch(decrementProduct(product.id));
  };
  return (
    <>
      {products.length
        ? products.map((product) => (
            <div className="lws-productCard" key={product.id}>
              <img
                className="lws-productImage"
                src={product.imageUrl}
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">{product.productName}</h4>
                <p className="lws-productCategory">{product.category}</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">{product.price}</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">{product.quantity}</span>
                  </p>
                </div>
                <button
                  className="lws-btnAddToCart"
                  disabled={product.quantity > 0 ? false : true}
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        : "No Product Found"}
    </>
  );
}
