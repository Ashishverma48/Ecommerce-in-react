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

const initialState = {
  products: [],
  categories: [],
  cartItems: [],
  selectedCategory: "smartphone",
  loadingCategory: false,
  errorCategory: "",
  loadingProduct: false,
  errorProduct: "",
};

const ecomReducer = (state = initialState, action) => {
  switch (action.type) {
    // Check Category Action
    case FETCH_REQUEST_CATEGORY: {
      return { ...state, loadingCategory: true };
    }
    case SUCCESS_CATEGORY: {
      return { ...state, loadingCategory: false, categories: action.payload };
    }
    case FAILED_CATEGORY: {
      return {
        ...state,
        loadingCategory: false,
        errorCategory: action.payload,
      };
    }
    case UPDATE_CATEGORY: {
      return { ...state, selectedCategory: action.payload };
    }

    // Check Product Action
    case FETCH_REQUEST_PRODUCT: {
      return { ...state, loadingProduct: true };
    }
    case SUCCESS_PRODUCT: {
      return { ...state, loadingProduct: false, products: action.payload };
    }
    case FAILED_PRODUCT: {
      return { ...state, loadingProduct: false, errorProduct: action.payload };
    }

    // Cart
    case ADD_ITEM_INTO_CART: {
      let cart = [...state.cartItems];
      let itemExists = false;
      for (let item of cart) {
        if (item.product.id == action.payload.id) {
          item.quantity += 1;
          itemExists = true;
          break;
        }
      }
      if (itemExists==false){
        let item  = {product:action.payload,quantity:1}
        cart.push(item)
      }
      return {...state,cartItems:cart}
      
    }
  }
};
