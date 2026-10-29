import {STORY} from './story.mjs';
import {doodle,person} from './art.mjs';
const ink='#364338',paper='#fffdf7',mint='#c9dac5',peach='#e9aa91',yellow='#edda9c';
const p=(d,fill='none',extra='')=>`<path d="${d}" fill="${fill}" ${extra}/>`;
const r=(x,y,w,h,fill=paper,rx=5)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>`;
const tx=(s,x=0,y=0,size=14)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="sans-serif" font-size="${size}" fill="${ink}" stroke="none">${s}</text>`;
const miniature=(type,x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})">${doodle(type)}</g>`;
function card(inner,color=paper){return r(-80,-83,160,167,color,7)+inner;}
function stamp(symbol,color=mint){return r(-62,-62,124,124,paper,16)+`<circle r="42" fill="${color}"/>`+tx(symbol,0,13,34)+p('M-44 76H45','none','stroke="#b8c4b0"');}
function object(type){switch(type){
 case'doorphoto':return r(-77,-102,154,208)+miniature('door',0,-8,.75)+tx('神秘线索 · 门牌 27',0,88,12)+r(-5,-62,37,22,yellow,2)+tx('27',13,-46,15);
 case'workshop':return p('M-85-21L-66-71H68L85-21Z',peach)+r(-73,-21,146,105)+r(-54,-4,52,59,mint)+r(19,-4,35,88)+miniature('tools',-28,18,.27)+tx('修理铺',0,-37,15);
 case'glasshouse':return p('M-77 72V-36L0-97 77-36V72Z','#e0ebe1')+p('M0-97V72M-77-36H77M-77 16H77M-39-65V72M39-65V72')+miniature('plant',0,35,.52);
 case'streetSound':return miniature('cafe',0,0,.7)+p('M-70-65Q-91-48-75-31M80-43Q100-26 80-13')+tx('街声',0,82,16);
 case'notice':return r(-70,-95,140,188,mint)+r(-58,-80,116,148)+tx('出去一下啦',0,-37,17)+tx('线索在门边 ↓',0,0,14)+p('M-35 30H35M-35 46H13')+miniature('notes',64,65,.34);
 case'openpage':return p('M-82-71Q-35-85 0-63Q39-85 82-70V70Q34 51 0 70Q-38 50-82 71Z',paper)+p('M0-63V70M-62-41H-18M-62-20H-16M-62 3H-23M17-40H63M17-19H62M17 3H51')+r(17,20,42,26,mint,2)+tx('这一页',-42,47,12);
 case'bookstart':return miniature('book',0,0,1)+r(-22,-39,50,75,yellow,2)+tx('第 1 页',2,4,15);
 case'theory':return card(tx('路线原理',0,-54,15)+p('M-45-26H44M-45-9H21M-45 8H37','none','stroke-width="2"')+`<circle cx="-30" cy="45" r="13" fill="${mint}"/><circle cx="34" cy="45" r="13" fill="${yellow}"/>`+p('M-17 45H21M14 38L21 45 14 52'));
 case'steps':return card(tx('具体走法',0,-54,15)+[0,1,2].map(i=>tx(i+1,-43,-14+i*30,14)+p(`M-22 ${-19+i*30}H43`,'none','stroke-width="2"')).join(''));
 case'realbench':return r(-69,-12,138,24,yellow)+p('M-58 12V74M58 12V74M-58 54H58')+miniature('tools',-31,-38,.45)+miniature('pencil',41,-44,.45);
 case'sorted':return miniature('notes',-45,-7,.6)+miniature('photo',44,-9,.58)+r(-29,54,58,24,mint)+tx('分好再找',0,71,12);
 case'paperpile':return `<g transform="rotate(-12)">${miniature('notes',-28,-14,.7)}</g><g transform="rotate(10)">${miniature('receipt',27,0,.8)}</g>`+r(-17,45,70,27,yellow)+tx('认领条？',19,63,13);
 case'talk':return r(-76,-58,152,92,paper,22)+p('M-29 34L-42 58-7 34',paper)+tx('我想问问……',0,-6,17)+miniature('phone',65,59,.4);
 case'prototype':return miniature('realbench',0,0,1); // handled below by object composition
 case'windowSeat':return miniature('window',0,-31,.85)+miniature('chair',0,57,.6);
 case'postcard':return r(-92,-73,184,146)+p('M0-55V55M13-33H70M13-11H70M13 11H54')+tx('后来……',-42,-15,15)+miniature('pencil',-21,44,.56);
 case'tape':return `<ellipse cx="0" cy="0" rx="55" ry="42" fill="${yellow}"/><ellipse cx="0" cy="0" rx="26" ry="19" fill="${paper}"/>`+p('M51 17L70 45 40 59 20 38',yellow);
 case'parcelphoto':return r(-67,-80,134,160)+miniature('box',0,-4,.61)+tx('保管中的纸箱',0,64,12);
 case'projectphoto':return r(-67,-80,134,160)+miniature('chair',0,-12,.65)+tx('还没做完',0,64,12);
 case'location':return miniature('map',0,10,.9)+p('M0-82Q-32-82-32-52Q-32-30 0-9Q32-30 32-52Q32-82 0-82Z',peach)+`<circle cx="0" cy="-52" r="10" fill="${paper}"/>`;
 case'tworecords':return `<g transform="rotate(-7)">${miniature('notes',-38,-2,.8)}</g><g transform="rotate(8)">${miniature('notes',43,8,.8)}</g>`+r(-68,-40,60,29,yellow)+r(10,-30,60,29,mint)+tx('15:00',-38,-20,14)+tx('16:00',39,-10,14);
 case'quietSeat':return miniature('plant',55,-31,.58)+miniature('chair',-24,26,.86)+p('M-75 102H70','none','stroke="#b9c6b0"');
 case'timeline':return [-1,0,1].map((n,i)=>r(-72+i*51,-54+(i%2)*27,47,81,i===1?mint:paper)+tx(['周一','周二','周三'][i],-49+i*51,-5+(i%2)*27,12)).join('')+p('M-61 57H62M51 48L62 57 51 67');
 case'starphoto':return miniature('photo',0,0,1)+miniature('star',44,-40,.4);
 case'stampGo':return stamp('▶');case'stampPause':return stamp('Ⅱ',yellow);case'stampAsk':return stamp('？',peach);case'stampChange':return stamp('↻',mint);
 case'logThink':return card(miniature('clock',0,-9,.62)+p('M-45 55H42'),yellow);
 case'logNew':return card(r(-58,-47,58,64)+r(-18,-20,58,64,mint)+r(10,9,58,64,peach),paper);
 case'logOthers':return card(miniature('friends',0,-10,.61)+p('M-35 64H36'),mint);
 case'logEdit':return card(miniature('pencil',0,-10,.65)+p('M-51 59H48M-42 68H18'),paper);
 case'logRemind':return card(miniature('bell',0,-7,.65),peach);
 case'logNone':return card(miniature('leaf',0,-5,.65)+tx('都不像',0,65,15),paper);
 case'ticketRoad':case'ticketBook':case'ticketFriends':case'ticketCompass':case'ticketTea':{const item={ticketRoad:'road',ticketBook:'book',ticketFriends:'friends',ticketCompass:'compass',ticketTea:'tea'}[type];return r(-78,-86,156,172,paper,15)+p('M-78 53H78','none','stroke-dasharray="5 6"')+miniature(item,0,-14,.66)+tx('下一章 · 无期限',0,75,12);}
 default:return doodle(type);
}}
// A small physical model on a work mat, rather than another full chair.
const draw=(type)=>type==='prototype'?r(-76,39,152,34,mint)+miniature('chair',-13,-16,.7)+miniature('pencil',49,-36,.5):object(type);
function base(kind,page){
 const wall=r(16,20,568,550,'#f0f0e5',24),skirting=p('M18 433H583','none','stroke="#d6ddce"');
 const floor=p('M17 434H583V550Q583 572 561 572H39Q17 572 17 550Z','#e6ecde','stroke="none"');
 const table=p('M53 112L539 99 570 496 30 509Z','#eadfc5','stroke="#d7c9ac"')+p('M53 112L539 99M30 509L37 532 561 522 570 496','#e0d1b2','stroke="#d7c9ac"');
 if(kind==='street')return r(16,20,568,550,'#eaf0e5',24)+`<circle cx="470" cy="83" r="28" fill="${yellow}" stroke="none"/>`+p('M17 345Q156 275 287 359T582 351V568H17Z','#d2dfc8','stroke="none"')+p('M42 489Q162 353 300 422Q421 479 569 382','none','stroke="#fdf9e8" stroke-width="55"')+p('M32 542Q130 498 233 542T582 531','none','stroke="#b8d3ce" stroke-width="25"')+p('M61 551L147 530M388 548L491 533','none','stroke="#93b5af" stroke-width="2"');
 if(kind==='board')return wall+r(29,62,542,476,'#e6d8b9',13)+r(44,77,512,446,'#f2ead6',6)+[65,535].map(x=>`<circle cx="${x}" cy="96" r="4" fill="#b5aa8e" stroke="none"/>`).join('');
 if(kind==='album')return wall+p('M31 91Q167 57 300 91Q427 57 570 91V512Q430 481 300 513Q164 481 31 512Z',paper)+p('M300 91V513','none','stroke="#d8dccc"')+tx('档案馆的保管记录',300,551,12);
 if(kind==='bag')return wall+floor+p('M50 192Q300 140 550 192V479Q550 522 503 524H96Q50 522 50 479Z','#d3dfcd')+p('M201 180Q201 92 300 92Q399 92 399 180','none','stroke="#a1b99b" stroke-width="22"')+p('M62 212Q300 158 538 212','none','stroke="#98ad90"')+p('M72 488H529','none','stroke="#a8b99f"');
 if(kind==='message')return wall+r(63,59,473,163,paper,17)+miniature('portrait',118,114,.35)+tx('新消息',307,97,16)+tx('“后院这只纸箱有点像。要过来吗？”',306,142,15)+tx('点下方物件，回复这条消息',300,192,12)+floor;
 if(['shopfront','rainroom','workshop'].includes(kind)){let result=wall+skirting+floor;if(kind==='shopfront')result+=r(191,77,221,354,mint,12)+r(211,97,181,313,paper)+`<circle cx="370" cy="280" r="6" fill="${yellow}"/>`+tx('很快回来',300,140,17);else result+=r(49,53,503,99,'#e8eddc',6)+p('M71 78H530M71 122H530','none','stroke="#c9d6c2"');if(kind==='rainroom')result+=Array.from({length:7},(_,i)=>p(`M${65+i*73} 79l-7 18`,'none','stroke="#b4cbc5"')).join('');return result;}
 if(kind==='shelf')return wall+floor+p('M38 231H562V249H38ZM38 453H562V471H38Z','#dfd0b1')+p('M60 249V287M541 249V287M60 471V516M541 471V516');
 if(kind==='musicshop')return wall+r(45,132,510,322,'#e7dfca',15)+r(63,151,474,281,paper,10)+p('M64 322H538','none','stroke="#d1d9ca"')+tx('街角试听台',300,542,15);
 if(kind==='boxdesk')return wall+table+p('M43 136L109 77 525 101 565 158V455L41 474Z','#d9c9a7')+p('M43 136L565 158M43 136L26 94 95 40 109 77M565 158L580 104 530 64 525 101',paper);
 if(kind==='archive')return wall+table+miniature('box',298,307,2.6)+tx('幕后玩家 / 隐藏文件',300,81,14);
 if(kind==='stamps')return wall+table+r(229,157,141,274,paper,3)+tx('最近的一件事',300,196,17)+p('M252 231H345M252 253H329M252 275H343','none','stroke="#c3cbb8"');
 if(kind==='tickets')return wall+table+p('M42 296Q305 346 558 301','none','stroke="#cab793"');
 return wall+table;
}
export function scene(page,indices,variant=0,selected=[],override=null){
 const spec=override||STORY[page-1];const targets=indices.map((idx,j)=>{const original=spec.targets[idx];return page===16?{...original,x:j===0?158:440,y:289,lx:j===0?147:451,ly:463}:original;});
 const intro=`<g class="scene-piece scene-base" style="--delay:0s">${base(spec.kind,page)}</g>`;
 const items=targets.map((v,j)=>`<g class="scene-piece target ${selected.includes(indices[j])?'target-selected':''}" style="--delay:${.13+j*.12}s" data-target="${indices[j]}"><g transform="translate(${v.x} ${v.y}) scale(${v.s})">${draw(v.icon)}</g>${v.caption?tx(v.caption,v.x,v.y+v.s*97,13):''}</g>`).join('');
 const leads=targets.map((v,j)=>{const above=v.ly<v.y;const sy=v.y+(above?-1:1)*Math.min(62*v.s,65),ey=v.ly+(above?23:-23);return `<g class="scene-piece target-link" style="--delay:${.4+j*.12}s"><path d="M${v.x} ${sy}Q${v.x} ${(sy+ey)/2} ${v.lx} ${ey}" stroke="#8b9f84" stroke-width="1.6" fill="none"/><circle cx="${v.x}" cy="${sy}" r="3.7" fill="${peach}" stroke="${paper}" stroke-width="2"/></g>`;}).join('');
 return {pos:targets.map(v=>[v.lx/600,v.ly/600]),svg:`<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="scene-line composed-scene" fill="none" stroke="${ink}" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">${intro}${items}${leads}</svg>`};
}
