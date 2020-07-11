/**
 * Describes the characters filtering options
 */
export interface ICharactersOptions {
  nameStartsWith: string;
  comics: string;
  stories: string;
  orderBy: 'name' | 'modified' | '-name' | '-modified';
}
