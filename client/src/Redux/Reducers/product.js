import {
    ADD_PRODUCT,GET_PRODUCT,GET_PRODUCTS,DELETE_PRODUCT,ERROR_PRODUCT
} from '../Constants/Types';

  const initialState = {
    loading: true,
    products: [],
    product: null,
    error: {},

  };
  export const product= (state = initialState, action)=>{
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS :
            return {
                ...state,
                products: payload,
                loading: false,
            };
        case GET_PRODUCT :
            return {
                ...state,
                product: payload,
                loading: false,
            };
      case ADD_PRODUCT:
            return {
                ...state,
                products: [payload, ...state.products],
                loading: false,
            };
            case DELETE_PRODUCT:
                return {
                  ...state,
                  products: state.products.filter((o) => o._id!== payload),
                  loading: false,
                };
              case ERROR_PRODUCT:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }