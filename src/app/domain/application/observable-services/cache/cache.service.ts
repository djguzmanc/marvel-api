import { Injectable } from '@angular/core';
import { HttpResponse, HttpRequest } from '@angular/common/http';

/**
 * Caches Http stuff
 */
@Injectable({
  providedIn: 'root'
})
export class CacheService {

  /**
   * Max time cache
   */
  private readonly maxTime = 1000 * 60 * 5;

  /**
   * Cache Map
   */
  cache: Map<string, Map<string, {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
  }>> = new Map();

  /**
   * Reads the cache
   * @param owner Owner sign
   * @param req The request
   * @returns The last returned Http response
   */
  get(
    owner: string,
    req: HttpRequest<any>
  ): HttpResponse<any> | undefined {
    const url = req.urlWithParams;

    const map = this.cache.get(owner);
    if (!map) {
      return undefined;
    }

    const cached = map.get(url);
    if (!cached) {
      return undefined;
    }

    const isExpired: boolean = cached.lastRead < (Date.now() - this.maxTime);
    if (isExpired) {
      this.cache.delete(url);
      return undefined;
    }

    return cached.response;
  }

  /**
   * Registers a new response
   * @param owner Owner sign
   * @param req Http request
   * @param response Http response
   */
  put(
    owner: string,
    req: HttpRequest<any>,
    response: HttpResponse<any>
  ): void {
    let map = this.cache.get(owner);
    if (!map) {
      this.cache.set(owner, new Map());
      map = this.cache.get(owner);
    }
    const url = req.urlWithParams;
    const toCache = {
      url,
      response,
      lastRead: Date.now()
    };
    map?.set(url, toCache);
  }

  /**
   * Clears cache for an owner
   * @param owner Owner sign
   */
  clearOwnerCache(owner: string): void {
    this.cache.delete(owner);
  }
}
