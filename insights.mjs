import {eventsFor} from './question-rules.mjs';
import {RULES} from './data.mjs';
import {CHARACTERS,SKILL_GUIDES} from './characters.mjs';
const record=(a,q)=>({question:q,title:eventsFor(a)[q-1][1],choices:(a[q]||[]).map(i=>eventsFor(a)[q-1][4][i].label)});
function strongest(a,mix,max=2){return eventsFor(a).map(e=>{const ids=a[e[0]]||[];let value=ids.reduce((n,i)=>n+Object.entries(mix).reduce((s,[k,w])=>s+(e[4][i].v[k]||0)*w,0),0)/(ids.length||1);return {...record(a,e[0]),value};}).filter(e=>e.value>0).sort((a,b)=>b.value-a.value||a.question-b.question).slice(0,max).map(({value,...r})=>r);}
const LAG_TIPS=[
 '如果最近常常想很久还没开始，试着把第一步缩到十分钟：先获得一个真实反馈，再回来想。',
 '如果开了很多新坑，可以先保留一件正在进行的事。其他点子收好，不必靠今天全部开工来证明喜欢。',
 '如果最近总把别人放在前面，下一次答应之前先看一眼自己的日程。你也可以说：我这次只能帮到这里。',
 '如果一直在修改，先写下三个完成条件。满足它们，就交出当前版本，让下一条反馈来自真实使用。',
 '如果没有提醒就容易漏掉，把下一步放到固定提醒或显眼的位置。借用工具不等于你不够认真。'
];
export function buildInsights(role,a,packs){
 const character=CHARACTERS[role.id-1],match=RULES.roles.find(r=>r.id===role.id);
 const evidence=strongest(a,match.weights,3);
 const total=packs.reduce((s,p)=>s+p.price,0);
 const guides=packs.map(pack=>{
  const rule=RULES.skills[pack.name],guide=SKILL_GUIDES[pack.name];let basis=[],source='角色附带配置';
  if(rule.mix){basis=strongest(a,rule.mix,2);source='随本次选择浮动';}
  else if(rule.direct==='alone_preference'){basis=[record(a,12),record(a,18)];source='随安静安排偏好浮动';}
  else if(rule.direct==='project_state'||rule.direct==='goal_review'){basis=[record(a,20)];source='随近期自述状态浮动';}
  if(total===0)source=pack.acquisition+' · 无需充值';return {name:pack.name,example:guide[0],tip:guide[1],basis,source,budgetPercent:total?Number((pack.price/total*100).toFixed(1)):0,measurement:rule.mix?'这些选择支持对关注方式的故事化描述，不代表实际能力测试。':rule.direct==='alone_preference'?'这里只记录你选择哪种环境，不判断独处能让你恢复多少。':rule.direct?'这里只记录最近一件事的状态，不推断长期能力。':'这项是角色携带的剧情工具，本次没有足够题目单独测量；金额保留参考预算。'};
 });
 const lag=(a[21]||[]).filter(i=>i<5).map(i=>LAG_TIPS[i]);
 const next=character.next;
 return {schema:2,character,evidence,guides,combo:character.combo,growth:lag.length?lag:['这次你没有保留常见卡顿便条，不代表生活不会卡住。遇到不顺时，先确认当下最需要的是休息、信息，还是一个更小的开始。'],next,headline:character.hook};
}
