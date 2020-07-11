/**
 * Describes the stories shape
 */
export interface IStoriesResponse {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail?: any;
  creators: ICreators;
  characters: ICharacters;
  series: ICharacters;
  comics: ICharacters;
  events: IEvents;
  originalIssue: IItem2;
}

// tslint:disable-next-line: completed-docs
interface IEvents {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

// tslint:disable-next-line: completed-docs
interface ICharacters {
  available: number;
  collectionURI: string;
  items: IItem2[];
  returned: number;
}

// tslint:disable-next-line: completed-docs
interface IItem2 {
  resourceURI: string;
  name: string;
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
