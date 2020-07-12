/**
 * Describes the marvel response
 * shell
 */
export interface IMarvelResponse<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: T;
}
