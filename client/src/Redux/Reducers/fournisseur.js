import {
    ADD_FOURNISSEUR,GET_FOURNISSEUR,GET_FOURNISSEURS,DELETE_FOURNISSEUR,ERROR_FOURNISSEUR
} from '../Constants/Types';

  const initialState = {
    loading: true,
    fournisseurs: [],
    fournisseur: null,
    error: {},

  };
  export default function fournisseur (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_FOURNISSEURS :
            return {
                ...state,
                fournisseurs: payload,
                loading: false,
            };
        case GET_FOURNISSEUR :
            return {
                ...state,
                fournisseur: payload,
                loading: false,
            };
      case ADD_FOURNISSEUR:
            return {
                ...state,
                fournisseurs: [payload, ...state.fournisseurs],
                loading: false,
            };
            case DELETE_FOURNISSEUR:
                return {
                  ...state,
                  fournisseurs: state.fournisseurs.filter((o) => o._id!== payload),
                  loading: false,
                };
              case ERROR_FOURNISSEUR:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }