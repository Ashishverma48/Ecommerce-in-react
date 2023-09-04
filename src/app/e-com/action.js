import {
  ADD_ITEM_INTO_CART,
  DECRESE_PRODUCT_QUANTITY,
  FAILED_CATEGORY,
  FAILED_PRODUCT,
  FETCH_REQUEST_CATEGORY,
  FETCH_REQUEST_PRODUCT,
  INCRESE_PRODUCT_QUANTITY,
  SUCCESS_CATEGORY,
  SUCCESS_PRODUCT,
  UPDATE_CATEGORY,
} from "./type";

// Action for Category
const fetchCatergory = () => {
  return { type: FETCH_REQUEST_CATEGORY };
};

const successCategory = (data) => {
  return { type: SUCCESS_CATEGORY, payload: data };
};

const failedCategory = (error) => {
  return { type: FAILED_CATEGORY, payload: error };
};

export const fetchCategoryRequest = () => {
  return (dispatch) => {
    dispatch(fetchCatergory());
    let url = fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => successCategory(data))
      .catch((error) => failedCategory(error));
  };
};

export const updateSelectCategory = (category) => {
  return { type: UPDATE_CATEGORY, payload: category };
};

// Action for Product

export  const fetchProducts = () => {
  return { type: FETCH_REQUEST_PRODUCT };
};

export  const successProducd = (product)=>{
    return { type:SUCCESS_PRODUCT,payload:product}
}

export const failedProduct = (error)=>{
    return {type:FAILED_PRODUCT,payload:error}
}

export const fetchProduct = ()=>{
    return (dispatch)=>{
        dispatch(fetchProduct());
        let url = 'https://dummyjson.com/products?limit=100';
        let p = fetch(url)
        p.then(response=>response.json())
        .then(data =>successProducd(data))
        .catch(error=>failedProduct(error))
    }
}


//  Action for Cart 

export const addItemInCart = (item)=>{
    return {type:ADD_ITEM_INTO_CART,payload:item}

}

export const IncreseItemQuantity= (product)=>{
 return {rype:INCRESE_PRODUCT_QUANTITY,payload:product}
}

export const DecreseItemQuantity= (product)=>{
 return {rype:DECRESE_PRODUCT_QUANTITY,payload:product}
}