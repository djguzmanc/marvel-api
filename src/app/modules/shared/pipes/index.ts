import { SquaredThumbnailPipe } from './squared-thumbnail/squared-thumbnail.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

/**
 * All shared pipes
 */
export const SHARED_PIPES = [
  SquaredThumbnailPipe,
  TruncatePipe
];

export * from './squared-thumbnail/squared-thumbnail.pipe';
export * from './truncate/truncate.pipe';
