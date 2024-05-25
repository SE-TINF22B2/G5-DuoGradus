import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('one => two', [
      query(':enter, :leave', [
        style({ position: 'absolute', top: 0, width: '100%' })
      ]),
      query(':enter', [
        style({ transform: 'translateX(100%)' })
      ]),
      group([
        query(':leave', [
          animate('0.5s ease', style({ transform: 'translateX(-100%)' }))
        ]),
        query(':enter', [
          animate('0.5s ease', style({ transform: 'translateX(0%)' }))
        ])
      ])
    ]),
    transition('two => one', [
      query(':enter, :leave', [
        style({ position: 'absolute', top: 0, width: '100%' })
      ]),
      query(':enter', [
        style({ transform: 'translateX(-100%)' })
      ]),
      group([
        query(':leave', [
          animate('0.5s ease', style({ transform: 'translateX(100%)' }))
        ]),
        query(':enter', [
          animate('0.5s ease', style({ transform: 'translateX(0%)' }))
        ])
      ])
    ]),




  ]);



