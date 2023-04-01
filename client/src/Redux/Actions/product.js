import axios from 'axios';
import { SetAlert } from './alert';
import { SELL_PRODUCT,ADD_PRODUCT,GET_PRODUCT,GET_PRODUCTS,EDIT_PRODUCT,DELETE_PRODUCT,ERROR_PRODUCT
} from '../Constants/Types';

export const addProduct = (Fournisseur,Famille,Code,P_achat,P_Vente,quantity) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/product/`,
        {Fournisseur,Famille,Code,P_achat,P_Vente,quantity},
        config
      );
  
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
      dispatch(SetAlert('Product Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_PRODUCT 
    });
    }
  };

  export const getProduct = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/product/${id}`,
      );
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getProducts = () => async (dispatch) => {

    try {
      const res = await axios.get(`/api/product/`,
      );
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteProduct = (id) => async (dispatch) => {
    try {
    await axios.delete(`/api/product/${id}`);
  
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
      dispatch(SetAlert('Product Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editProduct = (id,Famille,Code,P_achat,P_Vente,quantity) => async (dispatch) => {
    try {
   await axios.put(`/api/product/${id}`, {Famille,Code,P_achat,P_Vente,quantity},);
  
      dispatch({
        type: EDIT_PRODUCT,
      });
      dispatch(SetAlert('Product Edited', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  export const VendreProd = (id,quantity) => async (dispatch) => {
    try {
   const res =await axios.put(`/api/product/quantity/${id}`, {quantity});
  
      dispatch({
        type: SELL_PRODUCT,
        payload: res.data,

      });
      dispatch(SetAlert('Product sell success', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };