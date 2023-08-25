import { PRODUCT_ADDED,PRODUCT_DECREMENT,PRODUCT_INCREMENT } from "./actionTypes";
export const addProduct = (value) =>{
    return{
      type: PRODUCT_ADDED,
      payload:value
    }
}
export const decrementProduct =(value) =>{
  return{
    type: PRODUCT_DECREMENT,
    payload:value
  }
}
export const incrementProduct =(id,quantity) =>{
  return{
    type: PRODUCT_INCREMENT,
    payload:{
      id:id,
      add:quantity
    }
  }
}
