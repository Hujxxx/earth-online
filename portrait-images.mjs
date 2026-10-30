import {DEFAULT_CHARACTER_IMAGES} from './character-images.mjs';
// Built-in illustrations remain available even when the configuration request fails.
export function portraitEntry(id,overrides){const custom=overrides?.[id];return typeof custom?.url==='string'&&custom.url.trim()?custom:DEFAULT_CHARACTER_IMAGES[id];}
export function defaultPortraitEntry(id){return DEFAULT_CHARACTER_IMAGES[id];}
