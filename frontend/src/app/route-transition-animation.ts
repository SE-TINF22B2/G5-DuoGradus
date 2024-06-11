import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    // Transition from one route to another
    transition('one => two', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })),

      // Initial position of the entering page is offscreen to the right
      query(':enter', [
        style({ transform: 'translateX(100%)', zIndex: 2 })
      ]),

      group([
        // Move the leaving page to the left
        query(':leave', [
          animate('300ms ease', style({ transform: 'translateX(-100%)' }))
        ]),
        // Move the entering page from right to left
        query(':enter', [
          animate('300ms ease', style({ transform: 'translateX(0)' }))
        ])
      ])
    ]),

    transition('two => one', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })),

      // Initial position of the entering page is offscreen to the left
      query(':enter', [
        style({ transform: 'translateX(-100%)', zIndex: 2 })
      ]),

      group([
        // Move the leaving page to the right
        query(':leave', [
          animate('300ms ease', style({ transform: 'translateX(100%)' }))
        ]),
        // Move the entering page from left to right
        query(':enter', [
          animate('300ms ease', style({ transform: 'translateX(0)' }))
        ])
      ])
    ]),




  ]);



