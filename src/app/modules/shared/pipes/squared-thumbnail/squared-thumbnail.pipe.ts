import { Pipe, PipeTransform } from '@angular/core';
import { IThumbnail } from '@utils/interfaces/auxiliary/thumbnail.interface';
import { IThumbnailVariant } from '@utils/interfaces/auxiliary/thumbnail-variant.interface';

/**
 * Turns a Marvel Thumbnail object into
 * a fixed image path
 */
@Pipe({
  name: 'thumbnail'
})
export class SquaredThumbnailPipe implements PipeTransform {

  // tslint:disable-next-line: completed-docs
  transform(thumbnail: IThumbnail, variant: IThumbnailVariant): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }

}
