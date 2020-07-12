/**
 * Describes the filtering options for comics
 * response
 */
export interface IComicsOptions {
  titleStartsWith: string;
  format:
  'comic' |
  'magazine' |
  'trade paperback' |
  'hardcover' |
  'digest' |
  'graphic novel' |
  'digital comic' |
  'infinite comic';
  issueNumber: number;
  orderBy: 'issueNumber' | null;
}
