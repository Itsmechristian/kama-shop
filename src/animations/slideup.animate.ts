import { trigger, state, transition, style, animate, stagger, query } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export function slideUp(name:string, from: string, duration: (string | number)) {
  return trigger(name, [
    state('*', style({
      opacity: 0,
      transform: `translateY(${from})`
    })),
    transition('* => up', animate(duration, style({
      opacity: 1,
      transform: 'translateY(0px)'
    }))),
    state('up', style({
      transform: 'translateY(0px)'
    }))
])
}