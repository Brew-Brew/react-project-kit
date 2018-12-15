export const NAME = 'DATA';
export const LOAD_DATA = `${NAME}/LOAD_DATA`;
export const LOAD_DATA_REQUEST = `${NAME}/LOAD_DATA_REQUEST`;
export const LOAD_DATA_SUCCESS = `${NAME}/LOAD_DATA_SUCCESS`;
export const LOAD_DATA_FAILURE = `${NAME}/LOAD_DATA_FAILURE`;


export function loadData(params) {
  return {
    type: LOAD_DATA,
    ...params,
  };
}

export function loadDataRequest(params) {
  return {
    type: LOAD_DATA_REQUEST,
    params,
  };
}

export function loadDataSuccess(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    data,
  };
}

export function loadDailiesFailure() {
  return {
    type: LOAD_DATA_FAILURE,
  };
}