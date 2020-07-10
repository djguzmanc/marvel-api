/**
 * Describes comics response
 */
export interface IComicsResponse {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description?: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: ITextObject[];
  resourceURI: string;
  urls: IUrl[];
  series: ISeries;
  variants: ISeries[];
  collections: any[];
  collectedIssues: ISeries[];
  dates: IDate[];
  prices: IPrice[];
  thumbnail: IThumbnail;
  images: IThumbnail[];
  creators: ICreators;
  characters: ICharacters;
  stories: IStories;
  events: IEvents;
}

// tslint:disable-next-line: completed-docs
interface IEvents {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
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
interface ICharacters {
  available: number;
  collectionURI: string;
  items: ISeries[];
  returned: number;
}

// tslint:disable-next-line: completed-docs
interface ICreators {
  available: number;
  collectionURI: string;
  items: IItem[];
  returned: number;
}

// tslint:disable-next-line: completed-docs
interface IItem {
  resourceURI: string;
  name: string;
  role: string;
}

// tslint:disable-next-line: completed-docs
interface IThumbnail {
  path: string;
  extension: string;
}

// tslint:disable-next-line: completed-docs
interface IPrice {
  type: string;
  price: number;
}

// tslint:disable-next-line: completed-docs
interface IDate {
  type: string;
  date: string;
}

// tslint:disable-next-line: completed-docs
interface ISeries {
  resourceURI: string;
  name: string;
}

// tslint:disable-next-line: completed-docs
interface IUrl {
  type: string;
  url: string;
}

// tslint:disable-next-line: completed-docs
interface ITextObject {
  type: string;
  language: string;
  text: string;
}
