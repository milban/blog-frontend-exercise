export type Action<T = any, Q = any> = (
  args: T,
) => { type: string; payload?: Q };
