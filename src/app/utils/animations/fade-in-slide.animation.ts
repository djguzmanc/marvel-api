import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

/**
 * Builds a fade from left animation with
 * params
 * @param options Animation options
 */
export const slideFadeInFactory = ({
  name = 'slide',
  gap = 100,
  duration = 400,
  xOffset = '-20%'
}: {
  name?: string;
  gap?: number;
  duration?: number;
  xOffset?: string;
} = {}) => {
  return trigger(name,
    [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: `translateX(${xOffset})` }),
          stagger(gap, [
            animate(duration, style({ opacity: 1, transform: 'translateX(0)' }))
          ]),
        ], { optional: true })
      ]),
    ]
  );
};
