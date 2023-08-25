import { PRODUCT_ADDED, PRODUCT_DECREMENT, PRODUCT_INCREMENT } from "./actionTypes";
const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  const nextId = () => {
    const maxId = state.products?
    state.products.reduce((maxId, currentId) => Math.max(maxId, currentId.id),0)
    :0
    return maxId+1
  };
  switch (action.type) {
    case PRODUCT_ADDED:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: nextId(),
            productName: action.payload.productName,
            category: action.payload.category,
            imageUrl: action.payload.imageUrl,
            price: action.payload.price,
            quantity: action.payload.quantity,
          },
        ],
      };
    case PRODUCT_DECREMENT:
        return{
          ...state,
          products: state.products.map(product =>{
            if(product.id === action.payload){
              return{ ...product,
              quantity: (parseInt(product.quantity) -1)+""}
            }else{
              return product
            }
          })
        }
    case PRODUCT_INCREMENT:
        return{
          ...state,
          products: state.products.map(product =>{
            if(product.id === action.payload.id){
              return{ ...product,
              quantity: (parseInt(product.quantity) + parseInt(action.payload.add))+""}
            }else{
              return product
            }
          })
        }
    default:
      return state;
  }
};

export default productReducer;
