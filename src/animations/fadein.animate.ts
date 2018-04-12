// Importing the reqyured animation functions
import { trigger, state, transition, style, animate, stagger, query } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export function fadeIn(name:string, duration: number) {
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