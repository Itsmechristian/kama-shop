// Importing the reqyured animation functions
import { trigger, state, transition, style, animate } from '@angular/animations';

export const fadeIn = 
  trigger('fadeIn', [
    transition('* => show', animate('.5s', style({
      opacity: 1,
    }))),
    // state show will prevent the header to opacity zero
    state('show', style({
      opacity: 1
    }))
  ])
export const test = 
trigger('test', [
  transition('* => show', animate('.5s', style({
    opacity: 1,
  }))),
  // state show will prevent the header to opacity zero
  state('show', style({
    opacity: 1
  }))
])
export const test2 = 
trigger('test2', [
  transition('* => show', animate('.7s', style({
    opacity: 1,
  }))),
  // state show will prevent the header to opacity zero
  state('show', style({
    opacity: 1
  }))
])
export const test3 = 
trigger('test3', [
  transition('* => show', animate('.9s', style({
    opacity: 1,
  }))),
  // state show will prevent the header to opacity zero
  state('show', style({
    opacity: 1
  }))
])