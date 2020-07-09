import { trigger, transition, style, animate } from '@angular/animations';

/**
 * Animación de entrada y salida para un elemento del DOM.
 * Contiene variación de opacidad.
 */
export const FADE_IN_OUT = trigger('fadeInOut',
  [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(400, style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate(400, style({ opacity: 0 }))
    ])
  ]
);
