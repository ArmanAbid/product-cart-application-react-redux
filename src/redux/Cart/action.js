import { INCREMENT, DECREMENT, DELETE_CART, CART_ADDED } from "./actionTypes";

export const addCart = (value) => {
  return {
     type: CART_ADDED,
     payload: value
};
};
export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: {
      id: value.id,
      price: value.price,
    },
  };
};
export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: {
      id: value.id,
      price: value.price,
    },
  };
};
export const deleteCart = (value) => {
  return {
    type: DELETE_CART,
    payload: {
      id: value.id,
      totalPrice: value.totalPrice,
    },
  };
};
