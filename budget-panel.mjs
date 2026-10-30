// Fictional spending is drawn independently of answers, character and attribute levels.
export const BUDGET_SCHEMA='independent-v19';
export const BUDGET_DRAWS=[
 {weight:16,min:0,max:0,label:'0氪'},
 {weight:34,min:.1,max:68,label:'小额氪金'},
 {weight:10,min:128,max:6480,label:'日常预算'},
 {weight:10,min:10000,max:990000,label:'认真投入'},
 {weight:10,min:1000000,max:9990000,label:'豪华配置'},
 {weight:14,min:100000000,max:999000000,label:'亿元玩家'},
 {weight:5,min:1000000000,max:9990000000,label:'十亿级玩家'},
 {weight:1,min:10000000000,max:99900000000,label:'服务器级玩家'}
];
export function skillLevel(u){return Math.max(1,Math.min(5,Math.round((Number.isFinite(u)?Math.max(0,Math.min(1,u)):.5)*4)+1));}
export function formatBudget(amount){const f=n=>Number(n.toFixed(2)).toLocaleString('zh-CN',{maximumFractionDigits:2});return amount>=1e8?f(amount/1e8)+' 亿元':amount>=1e4?f(amount/1e4)+' 万元':f(amount)+' 元';}
export function drawBudget(random=Math.random){
 let pick=random()*100,band=BUDGET_DRAWS.at(-1);for(const b of BUDGET_DRAWS){pick-=b.weight;if(pick<0){band=b;break;}}
 const raw=band.min+(band.max-band.min)*random();const step=raw<100?.1:raw<1000?1:raw<10000?10:raw<1e6?100:raw<1e8?10000:1e6;
 const amount=Math.max(band.min,Math.min(band.max,+((Math.round(raw/step)*step).toFixed(1))));return {schema:BUDGET_SCHEMA,amount};
}
// Existing archives get a stable assignment from their random archive ID, never from traits.
function legacyDraw(r){let n=2166136261;for(const c of String(r.id||r.runId||'legacy-archive')){n^=c.charCodeAt(0);n=Math.imul(n,16777619)>>>0;}return drawBudget(()=>{n=(n+0x6D2B79F5)>>>0;let t=n;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;});}
export function storedBudget(r){
 if(r.spending?.schema===BUDGET_SCHEMA&&Number.isFinite(r.spending.amount)&&r.spending.amount>=0&&r.spending.amount<=99900000000)return r.spending;
 if(r.preview===true&&r.previewBudget==='zero-and-max'&&[5,21].includes(r.roleId))return {schema:BUDGET_SCHEMA,amount:r.roleId===5?0:97369000000};
 return legacyDraw(r);
}
export function panelBudget(r){const amount=storedBudget(r).amount;return {amount,label:formatBudget(amount),schema:BUDGET_SCHEMA,isZero:amount===0,totalLevel:(r.packs||[]).reduce((sum,p)=>sum+skillLevel(p.u),0),min:0,max:99900000000};}
export function roleBudgetRange(){return {min:0,max:99900000000,label:'0 元 ～ 999 亿元'};}
