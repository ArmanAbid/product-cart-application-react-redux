import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, deleteCart } from "../../redux/Cart/action";
import { decrementProduct, incrementProduct } from "../../redux/Product/action";

export default function CartItem() {
  const productQ = useSelector(state => state.product.products)
  const carts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();

  const handleIncrement = (id,price) => {
    dispatch(decrementProduct(id))
    dispatch(increment(
      {
        id:id,
        price:price
      }
    ));
  };
  const handledecrement = (id,price,quantity,totalPrice) => {
    dispatch(incrementProduct(id,1))
    quantity>1
    ?dispatch(decrement(
      {
        id:id,
        price:price
      }
    ))
    :dispatch(deleteCart({
      id:id,
      totalPrice:totalPrice
    }))
  };
  const handleDelete = (id,totalPrice,quantity) =>{
    dispatch(incrementProduct(id,quantity))
    dispatch(deleteCart({
      id:id,
      totalPrice:totalPrice
    }))
  }

  return (
    <>
      {carts.map((product) =>{ 
      // eslint-disable-next-line array-callback-return
      const productQuantity = productQ.map( a => {
        if(a.id === product.id){
          return a.quantity
        }
      })
       return (
        <div className="cartCard" key={product.id}>
          <div className="flex items-center col-span-6 space-x-6">
            {/* <!-- cart image --> */}
            <img
              className="lws-cartImage"
              src={product.imageUrl}
              alt="product"
            />
            {/* <!-- cart item info --> */}
            <div className="space-y-2">
              <h4 className="lws-cartName">{product.productName}</h4>
              <p className="lws-cartCategory">{product.category}</p>
              <p>
                BDT <span className="lws-cartPrice">{product.price}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
            {/* <!-- amount buttons --> */}
            <div className="flex items-center space-x-4">
              <button
                className="lws-incrementQuantity"
                disabled ={productQuantity[product.id -1]>0?false:true} 
                onClick={() => handleIncrement(product.id,product.price)}
              >
                <i className="text-lg fa-solid fa-plus"></i>
              </button>
              <span className="lws-cartQuantity">{product.quantity}</span>
              <button
                className="lws-decrementQuantity"
                onClick={() => handledecrement(product.id,product.price,product.quantity,product.price)}
              >
                <i className="text-lg fa-solid fa-minus"></i>
              </button>
            </div>
            {/* <!-- price --> */}
            <p className="text-lg font-bold">
              BDT{" "}
              <span className="lws-calculatedPrice">{product.totalPrice}</span>
            </p>
          </div>
          {/* <!-- delete button --> */}
          <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
            <button className="lws-removeFromCart" onClick={()=> handleDelete(product.id,product.totalPrice,product.quantity)}>
              <i className="text-lg text-red-400 fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      )})}
    </>
  );
}
