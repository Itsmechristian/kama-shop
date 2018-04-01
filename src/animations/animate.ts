// Importing the reqyured animation functions
import { trigger, state, transition, style, animate } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const fadeIn = function(name:string,duration: (string | number)) {
  return trigger(name, [
    state('*', style({
      opacity: 0
    })),
    transition('* => show', animate(duration, style({
      opacity: 1,
    }))),
    state('show', style({
      opacity: 1
    }))
  ])
}


export const slideUp  = (name:string, from: string, duration: (string | number)) => {
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