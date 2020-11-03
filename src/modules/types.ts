export interface SuccessAction<T, P> {
  type: T;
  payload: P;
}
export interface FailureAction<T> {
  type: T;
  payload: Error;
}
