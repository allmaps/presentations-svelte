import { writable } from 'svelte/store'

export const reveal = writable<Reveal.Api>()
export const currentSlide = writable<HTMLElement>()
