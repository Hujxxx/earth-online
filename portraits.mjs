import {doodle} from './art.mjs';
const ink='#364338',paper='#fffdf7',mint='#c9dac5',gold='#edda9c',peach='#e9aa91';
const p=(d,f='none',e='')=>`<path d="${d}" fill="${f}" ${e}/>`;
const c=(x,y,r,f=paper)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
const rect=(x,y,w,h,f=paper,r=5)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}"/>`;
const eye=()=>c(-9,0,1.8,ink)+c(9,0,1.8,ink)+p('M-5 11Q0 17 6 11');
const black='#4e5148',brown='#806c54';
function human(id){const colours={1:'#d9af72',3:'#b4c5a2',5:'#b4c5a2',6:'#dcbfce',8:'#d88c7a',9:'#bcc6b3',10:'#9fb5c9',11:'#cf8b76',13:'#b6c7ae',15:'#b59c82',16:'#b6cbd5',17:'#b5a68e',18:'#dc9983',19:'#7c8174',20:'#d88c7a',21:'#91aabb',22:'#e4d499'};let out='';
 if([6,13,16,22].includes(id))out+=p('M-28 18Q-42-36 0-33Q40-32 30 29L20 79-23 78Z',id===16?'#d7bc75':black);
 out+=p('M-25 27Q-34 53-25 82H25Q34 50 24 27Z',colours[id]||mint)+p('M-25 40L-43 65M25 40L43 24M-16 82L-20 107M17 82L21 107M-20 107H-31M21 107H33');
 out+=c(0,-2,26,id===19?'#a98f78':paper);
 if(id!==1)out+=p('M-26-5Q-31-34 1-31Q33-30 26-5L12-12-2-21-17-10Z',id===3?'#e1cc83':id===16?'#d7bc75':id===18?'#c68066':black);
 out+=eye();
 if(id===1)out+=p('M-21 29L0 50 22 29M0 49V81')+Array.from({length:7},(_,i)=>c(-19+i*6,31+Math.sin(i/6*Math.PI)*11,2.8,brown)).join('')+p('M-23-18Q-22-58 1-55Q26-54 24-18Z',gold)+p('M-25-23H26');
 if(id===3)out+=p('M-23 25L25 26 21 37-23 36Z',gold)+p('M24 26Q53 11 63 29L30 43Z',gold);
 if(id===5)out+=c(5,-33,10,black)+p('M36 70L57-7','none','stroke-width="5"')+p('M52 0L63-14 63 8Z',black);
 if(id===6)out+=p('M-23-16L-40-23M23-16L38-23','none','stroke="#b48c9b" stroke-width="4"');
 if(id===8)out+=p('M-18-10Q-9-17-2-9M3-10Q12-17 19-9','none','stroke-width="5"')+p('M-25 70H25V83H-25Z',gold);
 if(id===9)out+=p('M-29-18L-23-47H23L29-18Z',black)+p('M-37-18H38')+p('M-6 70Q-37 49-20 31Q10 29 28 51Z',paper)+p('M-5 70L-14 40M-5 70L0 39M-5 70L15 46','none','stroke-width="1.5"');
 if(id===10||id===21)out+=c(-11,0,11,'none')+c(11,0,11,'none')+p('M-1 0H1M-26-2H-22M22-2H26');
 if(id===10)out+=p('M0 30L-16 23V40Z',peach)+p('M0 30L16 23V40Z',peach)+c(0,31,4,peach);
 if(id===11)out+=p('M-27-7L-19-29H20L28-6 20 23H-19Z',gold)+p('M-17-4H-4M5-4H18M-9 13H10','none','stroke="#a5c7ce" stroke-width="4"')+c(0,49,9,'#b5d4d4');
 if(id===13)out+=p('M-17-23L-34-39M18-23L34-39','none','stroke="#b89081" stroke-width="4"');
 if(id===15)out+=p('M-33-16L-25-43H23L34-16Z',peach)+p('M-38-16H40M-18-40V-18M17-40V-18');
 if(id===16)out+=c(10,-35,12,'#d7bc75')+p('M-23 30L0 41 24 30M-24 81Q0 95 25 81');
 if(id===17)out+=p('M-34-11L-46-38-18-30 0-54 20-30 46-38 33-11Z',brown)+p('M-22 24L-13 82M22 24L14 82')+p('M-23 18L-36 60M25 18L35 63','none','stroke="#9f8a62" stroke-width="4"');
 if(id===18)out+=p('M-23 28L-11 41H11L23 28')+`<text x="0" y="66" text-anchor="middle" fill="${ink}" stroke="none" font-size="20" font-family="sans-serif">10</text>`;
 if(id===19)out+=p('M-25-20V-45H25V-20Z',black)+p('M-25-32L-55-38-66-27-25-22M25-32L55-38 66-27 25-22',black)+p('M5-17Q-8-15-2-27Q-13-22-9-12Q-1-5 5-17Z',gold);
 if(id===20)out+=p('M-28 10L-29-19Q-22-36 0-31Q29-35 30-17L28 12 20 4 13-13 3-7-8-14-18 3Z',black);
 if(id===21)out+=p('M-9-20L-3-15-8-10-2-6','none','stroke="#b47b65"')+p('M-21 29L22 29 21 39-21 39Z',peach)+p('M12 37L23 70H12L5 39Z',peach);
 if(id===22)out+=p('M-2-29Q-29-54-28-32Q-29-13-2-29Q26-55 27-32Q28-12-2-29Z',peach)+c(-1,-29,5,peach)+p('M-24 28L0 44 24 28V52H-24Z','#a9bdce');
 return out;}
function creature(id){if(id===4)return p('M-29-32L-27-71-9-45Q0-49 10-45L28-71 29-31Q59-5 48 62Q43 96 0 96Q-45 95-49 62Q-60-5-29-32Z','#b7beb0')+p('M-33 28Q0-6 33 28Q55 82 0 85Q-55 82-33 28Z',paper)+c(-15,-12,7)+c(15,-12,7)+c(-15,-12,2,ink)+c(15,-12,2,ink)+p('M-5-5H5L0 0Z',ink)+p('M-15 30L-9 24-3 30M8 30L14 24 20 30M-24 46L-17 40-10 46M0 46L7 40 14 46M-31 3L-59-3M31 3L59-3');
 if(id===7)return p('M-21 22Q-38 43-25 80H25Q36 44 21 22Z','#c1b398')+p('M-23 78L-39 98M-8 79L-12 108M10 80L14 108M25 77L40 98')+p('M-29-7Q-40-58 0-60Q40-57 29-7Q23 25 0 28Q-24 24-29-7Z','#a9c0b5')+p('M-16-22Q-5-14-17-9M5-22Q17-14 6-9')+p('M-7-12Q-20 35 0 37Q17 37 8-12Z','#a9c0b5')+p('M-16 17H16');
 if(id===12)return c(0,4,51,'#a5c5d2')+p('M-35 15Q0-25 35 15L33 80H-33Z',paper)+c(0,-7,41,paper)+c(-10,-22,10)+c(10,-22,10)+c(-8,-21,2,ink)+c(8,-21,2,ink)+c(0,-4,6,peach)+p('M0 2V21M-20 12Q0 38 20 12M-30 2L-47-3M30 2L47-3M-35 31H35','none','stroke="#9c6c59"')+c(0,35,9,gold)+p('M-22 51H22Q21 73 0 73Q-21 72-22 51')+p('M-30 78L-33 101M30 78L33 101');
 if(id===14)return c(-24,-26,16,'#aa9275')+c(24,-26,16,'#aa9275')+p('M-31 21Q-58 59-34 94H34Q58 58 31 21Z','#aa9275')+c(0,-4,36,'#aa9275')+c(0,11,20,'#d6c5a2')+c(-12,-8,2.5,ink)+c(12,-8,2.5,ink)+p('M-7 3H7L0 12Z',ink)+p('M0 12V20M-10 21Q0 29 10 21M-30 90L-33 110M30 90L33 110');
 if(id===2)return c(-29,-5,14,peach)+c(29,-5,14,peach)+c(0,-4,31,'#baa17a')+p('M-23-15Q0-34 23-15L17 16Q0 28-17 16Z',paper)+eye()+p('M-29-16H29','none','stroke="#d3b262" stroke-width="5"')+p('M-26 27L-34 81H33L25 27Z',gold)+p('M-29 39L-45 64M27 39L45 17M-17 81L-21 107M17 81L21 107')+p('M47-62L47 99','none','stroke="#b28b66" stroke-width="6"');
 const female=id===24;return p('M-25 27Q-35 53-25 82H25Q35 53 25 27Z',female?'#d9b7c6':'#b7c7d1')+c(0,-5,34,'#e9e6dc')+Array.from({length:8},(_,i)=>{const a=i/8*Math.PI*2;return c(Math.cos(a)*31,-7+Math.sin(a)*28,9,paper);}).join('')+c(0,-1,25,peach)+eye()+p('M-24-24L-38-42-25-46-14-31M24-24L38-42 25-46 14-31',brown)+p('M-25 42L-43 63M25 42L43 20M-16 83L-20 107M17 83L21 107')+(female?p('M0-34Q-27-58-29-35Q-28-18 0-34Q28-57 29-35Q29-17 0-34Z','#d8a5b9'):c(0,34,8,gold));}
function referenceHuman(id){const elderly=[1,5,23].includes(id),female=[16,22].includes(id);let out=p('M-25 27Q-34 53-25 82H25Q34 50 24 27Z',female?peach:mint)+p('M-25 40L-43 65M25 40L43 24M-16 82L-20 107M17 82L21 107M-20 107H-31M21 107H33')+c(0,-2,26)+p('M-26-5Q-31-34 1-31Q33-30 26-5L12-12-2-21-17-10Z',elderly?'#c6c7bf':brown)+eye();if(elderly)out+=p('M-18 13Q0 54 19 13L12 40H-11Z','#deddd3');if(id===8)out+=rect(-29,-42,58,18,black)+p('M-39-24H39')+rect(-7,8,14,5,black,1);return out;}
const humanReferenceIds=[1,2,3,4,5,7,8,14,15,16,20,22,23,24];
const icons=['compass','boots','camera','plant','pencil','book','music','gallery','notes','magnify','tools','house','tea','plant','chair','scissors','compass','ball','notebook','gallery','book','plant','envelope','clock'];
export function roleArt(id){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 225" fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="168" cy="108" r="83" fill="#f0ead2" stroke="none"/><ellipse cx="175" cy="199" rx="127" ry="13" fill="#e7ecdc" stroke="none"/><g transform="translate(154 86)">${humanReferenceIds.includes(id)?referenceHuman(id):id===12?creature(id):human(id)}</g><g transform="translate(251 145) scale(.36)">${doodle(icons[id-1])}</g><path d="M65 168l-7-19m7 19 8-20M285 74v13m-6-7h13" stroke="#b2c2a8"/></svg>`;}
