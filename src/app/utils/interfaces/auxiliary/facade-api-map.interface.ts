/**
 * Describes a facade api response
 * object for success or failure scenarios handling
 */
export interface IFacadeApiMap<T, K = string> {
  payload?: T;
  err?: K;
}
