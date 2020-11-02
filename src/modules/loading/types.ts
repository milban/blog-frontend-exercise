export const START_LOADING = 'loading/START_LOADING' as const;
export const FINISH_LOADING = 'loading/FINISH_LOADING' as const;

interface StartLoadingAction {
  type: typeof START_LOADING;
  payload: {
    requestType: string;
  };
}

export type StartLoading = (requestType: string) => StartLoadingAction;

interface FinishLoadingAction {
  type: typeof FINISH_LOADING;
  payload: {
    requestType: string;
  };
}

export type FinishLoading = (requestType: string) => FinishLoadingAction;

export type LoadingAction = StartLoadingAction | FinishLoadingAction;

export interface LoadingState {
  [key: string]: boolean;
}
