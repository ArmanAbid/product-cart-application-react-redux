import { INCREMENT, DECREMENT, DELETE_CART, CART_ADDED } from "./actionTypes";

const initialState = {
  cartProducts: [],
  total: "0",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADDED:
      return{
        ...state,
        cartProducts: 
        state.cartProducts.find(product => product.id===action.payload.id)
        ? state.cartProducts.map(product => {
          if (product.id === action.payload.id){
          return {
            ...product,
            quantity: (parseInt(product.quantity) + 1) + "",
            totalPrice:(parseInt(product.totalPrice) + parseInt(product.price)) + ""
            
          }
        }else{
          return product
        }
        })
        : [
          ...state.cartProducts,
          {
            ...action.payload,
            totalPrice: action.payload.price,
            quantity:"1"
          }
        ],
        total : parseInt(state.total) + parseInt(action.payload.price) + "",
      };
    case INCREMENT:
      return {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: (parseInt(product.quantity) + 1) + "",
              totalPrice:
                parseInt(product.totalPrice) + parseInt(product.price) + "",
            };
          } else {
            return product;
          }
        }),
        total: parseInt(state.total) + parseInt(action.payload.price) + "",
      };
    case DECREMENT:
      return {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: parseInt(product.quantity) - 1,
              totalPrice:
                parseInt(product.totalPrice) - parseInt(product.price),
            };
          } else {
            return product;
          }
        }),
        total: parseInt(state.total) - parseInt(action.payload.price) + "",
      };
    case DELETE_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (cart) => cart.id !== action.payload.id
        ),
        total: parseInt(state.total) - parseInt(action.payload.totalPrice) + "",
      };
    default:
      return state;
  }
};

export default cartReducer;
