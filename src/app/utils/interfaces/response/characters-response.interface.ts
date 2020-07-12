/**
 * Describes the characters response shape
 */
export interface ICharactersResponse {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
  comics: IComics;
  series: IComics;
  stories: IStories;
  events: IComics;
  urls: IUrl[];
}

// tslint:disable-next-line: completed-docs
interface IUrl {
  type: string;
  url: string;
}

// tslint:disable-next-line: completed-docs
interface IStories {
  available: number;
  collectionURI: string;
  items: IItem2[];
  returned: number;
}

// tslint:disable-next-line: completed-docs
interface IItem2 {
  resourceURI: string;
  name: string;
  type: string;
}

// tslint:disable-next-line: completed-docs
interface IComics {
  available: number;
  collectionURI: string;
  items: IItem[];
  returned: number;
}

// tslint:disable-next-line: completed-docs
interface IItem {
  resourceURI: string;
  name: string;
}

// tslint:disable-next-line: completed-docs
interface IThumbnail {
  path: string;
  extension: string;
}
