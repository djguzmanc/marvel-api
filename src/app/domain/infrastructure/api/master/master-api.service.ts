import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMasterApiController } from '@utils/interfaces/controller/master-api-controller.interface';
import { MarvelEntity } from '@domain/model/enums';
import { IPaginationOptions, IMarvelResponse, IMarvelCollection } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { parseParams } from '@utils/functions';

/**
 * Handles all api calls
 */
@Injectable({
  providedIn: 'root'
})
export class MasterApiService<T> implements IMasterApiController<T> {

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Fetches an entity sub collection
   * @param entityId The entity id
   * @param entityName The entity name
   * @param subEntityName The sub entity name
   * @param options Filtering options
   */
  getSubCollection<C>(
    entityId: number,
    entityName: MarvelEntity,
    subEntityName: MarvelEntity,
    options: Partial<IPaginationOptions>
  ): Observable<IMarvelResponse<IMarvelCollection<C>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<C>>>(
      `/${entityName}/${entityId}/${subEntityName}`, {
      params: parseParams(options)
    });
  }

  /**
   * Fetches an entity by id
   * @param id The entity id
   * @param entityName The entity name
   */
  getById(id: number, entityName: MarvelEntity): Observable<IMarvelResponse<IMarvelCollection<T>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<T>>>(
      `/${entityName}/${id}`
    );
  }

  /**
   * Fetches all entities
   * @param options Filtering options
   */
  getAll<K>(entityName: MarvelEntity, options: Partial<IPaginationOptions & K>):
    Observable<IMarvelResponse<IMarvelCollection<T>>> {
    return this.http.get<IMarvelResponse<IMarvelCollection<T>>>(
      `/${entityName}`, {
      params: parseParams(options)
    });
  }
}
