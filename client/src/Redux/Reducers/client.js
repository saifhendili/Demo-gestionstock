import {
    ADD_CLIENT,GET_CLIENT,GET_CLIENTS,DELETE_CLIENT,ERROR_CLIENT
} from '../Constants/Types';

  const initialState = {
    loading: true,
    clients: [],
    client: null,
    error: {},

  };
  export const client= (state = initialState, action)=>{
    const { type, payload } = action;
  
    switch (type) {
      case GET_CLIENTS :
            return {
                ...state,
                clients: payload,
                loading: false,
            };
        case GET_CLIENT :
            return {
                ...state,
                client: payload,
                loading: false,
            };
      case ADD_CLIENT:
            return {
                ...state,
                clients: [payload, ...state.clients],
                loading: false,
            };
            case DELETE_CLIENT:
                return {
                  ...state,
                  clients: state.clients.filter((o) => o._id!== payload),
                  loading: false,
                };
              case ERROR_CLIENT:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }