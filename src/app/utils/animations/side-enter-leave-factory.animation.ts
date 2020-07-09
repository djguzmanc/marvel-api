import { transition, style, animate } from '@angular/animations';

/**
 * Creates a slide in animation
 * @param param0 The animation name
 * @param param1 The slide distance offset
 * @param param2 The animation duration
 */
export const sideEnterLeaveFactory = (
  {
    name,
    offset,
    duration = 200
  }: {
    name: string;
    offset: string;
    duration?: number;
  }) => {
  return [
    transition(`void => ${name}`, [
      style({
        opacity: 0,
        transform: `translateY(${offset}) scale(0)`,
      }),
      animate(duration, style({
        opacity: 1,
        transform: `translateY(0) scale(1)`
      }))
    ]),
    transition(`${name} => void`,
      animate(duration, style({
        opacity: 0,
        transform: `translateY(${offset}) scale(0)`
      }))
    ),
  ];
};
