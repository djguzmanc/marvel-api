import { MarvelEntity } from '@domain/model/enums';
import { IPaginationOptions, IMarvelResponse, IMarvelCollection } from '../auxiliary';
import { Observable } from 'rxjs';

/**
 * Describe contract for master API service
 */
export interface IMasterApiController<T> {
  // tslint:disable-next-line: completed-docs
  getSubCollection<C>(
    entityId: number,
    entityName: MarvelEntity,
    subEntityName: MarvelEntity,
    options: Partial<IPaginationOptions>
  ): Observable<IMarvelResponse<IMarvelCollection<C>>>;

  // tslint:disable-next-line: completed-docs
  getById(id: number, entityName: MarvelEntity): Observable<IMarvelResponse<IMarvelCollection<T>>>;

  // tslint:disable-next-line: completed-docs
  getAll<K>(entityName: MarvelEntity, options: Partial<IPaginationOptions & K>):
    Observable<IMarvelResponse<IMarvelCollection<T>>>;
}
