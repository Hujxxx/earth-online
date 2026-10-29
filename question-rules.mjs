import {RULES} from './data.mjs';
import {getStory,routeFor} from './branches.mjs';
const cache=new Map();
export function eventsFor(a){const key=String(a?.[1]?.[0])+":"+String(a?.[2]?.[0]);if(cache.has(key))return cache.get(key);const events= RULES.events.map((e,i)=>{const story=getStory(i+1,a),copy=[...e];copy[1]=story.title;copy[6]=story.prompt;copy[4]=story.labels.map((label,j)=>({...e[4][j],label,v:{...(e[4][j]?.v||{})},tags:[...(e[4][j]?.tags||[])]}));if(i===0&&copy[4][3]){copy[4][3].v={};copy[4][3].tags=['暂缓处理'];}if((i===1&&[1,3].includes(a?.[1]?.[0]))||(i===2&&routeFor(a)!=='foot'))copy[4]=copy[4].map(o=>({...o,v:{},tags:[]}));if(i===16&&routeFor(a)!=='foot')copy[4][2].v={T:1,S:1};return copy;});cache.set(key,events);return events;}
