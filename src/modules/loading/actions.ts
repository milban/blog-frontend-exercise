import {
  FINISH_LOADING,
  FinishLoading,
  START_LOADING,
  StartLoading,
} from 'modules/loading/types';

export const startLoading: StartLoading = (requestType) => ({
  type: START_LOADING,
  payload: {
    requestType,
  },
});
export const finishLoading: FinishLoading = (requestType) => ({
  type: FINISH_LOADING,
  payload: {
    requestType,
  },
});
