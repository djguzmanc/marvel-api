/**
 * Describes the marvel collection
 * response shell
 */
export interface IMarvelCollection<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
