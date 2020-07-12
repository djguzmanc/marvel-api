import { MarvelEntity } from '@domain/model/enums';

/**
 * Describes the bookmarks shape
 */
export interface IBookmark {
  type: MarvelEntity;
  name: string;
}
