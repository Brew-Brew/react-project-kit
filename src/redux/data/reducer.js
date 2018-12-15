
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_FAILURE,
  LOAD_DATA_SUCCESS,
} from './actions';

const data = (state = {
  loading: false,
  datas: [],
  error: null,
}, action) => {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_DATA_SUCCESS:
      return {
        loading: false,
        datas: [...action.data],
        error: null,
      };
    case LOAD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: { ...action.error },
      };
    default:
      return state;
  }
};

export default data;
