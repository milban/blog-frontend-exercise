import {
  FINISH_LOADING,
  LoadingAction,
  LoadingState,
  START_LOADING,
} from 'modules/loading/types';

const initialState: LoadingState = {};

const loading = (state: LoadingState = initialState, action: LoadingAction) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, [action.payload.requestType]: true };
    case FINISH_LOADING:
      return { ...state, [action.payload.requestType]: false };
    default:
      return state;
  }
};

export default loading;
