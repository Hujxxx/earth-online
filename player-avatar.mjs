// A result's random UUID supplies variety; hashing keeps the chosen avatar stable
// across devices, history views and poster exports without storing extra data.
const PALETTES=[['#edf1df','#7d9567'],['#f6e9d5','#bb8754'],['#ede7ef','#9783a6'],['#e3eeeb','#72958a']];
const NAMES=['小猫','小机器人','小蘑菇','小星球','小花','小兔子','小幽灵','游戏手柄'];
const ICONS=[
 '<path d="m12 21 1-10 9 6h5l9-6 1 12v10c0 6-25 7-25 0Z" fill="COLOR"/><path d="m16 17 1-3 4 4m9 0 4-4 1 4" fill="#f4c5ae"/><path d="M18 25v2m12-2v2m-8 5h4m-2-3v3" stroke="#364338" stroke-width="2" stroke-linecap="round"/><path d="M12 29H7m29 0h5" stroke="#8b9b78" stroke-width="1.6"/>',
 '<path d="M24 10v5" stroke="#697c60" stroke-width="2"/><circle cx="24" cy="9" r="2.5" fill="#d9a769"/><rect x="11" y="16" width="26" height="22" rx="7" fill="COLOR"/><path d="M7 23h4v8H7m30-8h4v8h-4" fill="#b9c5a7"/><rect x="16" y="23" width="4" height="5" rx="1" fill="#fffdf3"/><rect x="28" y="23" width="4" height="5" rx="1" fill="#fffdf3"/><path d="M19 33h10" stroke="#364338" stroke-width="2" stroke-linecap="round"/>',
 '<path d="M18 25h13l1 13H17Z" fill="#f2dca7" stroke="#a68c5f" stroke-width="1.3"/><path d="M8 26c0-21 32-23 32 0Z" fill="#c48465"/><circle cx="17" cy="18" r="3.5" fill="#fff1d5"/><circle cx="30" cy="14" r="3" fill="#fff1d5"/><circle cx="32" cy="23" r="2.5" fill="#fff1d5"/><path d="M22 32v1m6-1v1" stroke="#53634b" stroke-width="2" stroke-linecap="round"/>',
 '<circle cx="24" cy="24" r="12" fill="#e6c47d"/><path d="M35 13c15 1 0 18-22 22-12 2-11-4 0-11" fill="none" stroke="COLOR" stroke-width="3"/><path d="m35 7 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z" fill="#ca9d55"/><circle cx="20" cy="19" r="2" fill="#fff0b9"/>',
 '<path d="M24 28v12m0-5c-9 0-9-7-9-7 7-1 9 4 9 7m0 2c8 0 9-7 9-7-7-1-9 3-9 7" fill="COLOR" stroke="COLOR" stroke-width="2"/><g fill="#ddb28d"><circle cx="24" cy="13" r="6"/><circle cx="16" cy="19" r="6"/><circle cx="32" cy="19" r="6"/><circle cx="19" cy="27" r="6"/><circle cx="29" cy="27" r="6"/></g><circle cx="24" cy="21" r="6" fill="#f3d685"/><path d="M22 20v1m4-1v1" stroke="#62714d" stroke-width="1.5" stroke-linecap="round"/>',
 '<ellipse cx="18" cy="15" rx="4" ry="10" fill="COLOR"/><ellipse cx="30" cy="15" rx="4" ry="10" fill="COLOR"/><ellipse cx="24" cy="29" rx="14" ry="11" fill="COLOR"/><path d="M18 12v5m12-5v5" stroke="#f1c9b9" stroke-width="2" stroke-linecap="round"/><path d="M19 28v2m10-2v2m-7 4h4" stroke="#364338" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="33" r="2" fill="#edbfae"/><circle cx="33" cy="33" r="2" fill="#edbfae"/>',
 '<path d="M11 25c0-20 27-20 27 0v14l-6-4-5 4-5-4-5 4-6-4Z" fill="COLOR"/><ellipse cx="20" cy="24" rx="2" ry="3" fill="#fffdf4"/><ellipse cx="29" cy="24" rx="2" ry="3" fill="#fffdf4"/><path d="M23 31h3" stroke="#fffdf4" stroke-width="2" stroke-linecap="round"/>',
 '<path d="M15 16h18c7 0 12 22 6 23-4 1-6-6-10-6H19c-4 0-6 7-10 6-6-1-1-23 6-23Z" fill="COLOR"/><path d="M16 21v10m-5-5h10" stroke="#fff8e6" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="23" r="2.4" fill="#e8b88e"/><circle cx="36" cy="29" r="2.4" fill="#efda9c"/>'
];
export function playerAvatar(r){
 const fallback=JSON.stringify(Object.entries(r.answers||{}).sort(([a],[b])=>Number(a)-Number(b)).map(([q,a])=>[q,[...a].sort()]));
 const key=String(r.id||r.runId||fallback)+'|'+r.roleId;
 let hash=2166136261;for(const ch of key)hash=Math.imul(hash^ch.codePointAt(0),16777619)>>>0;
 const index=hash%ICONS.length,palette=(hash>>>8)%PALETTES.length,[background,color]=PALETTES[palette];
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect x="1" y="1" width="46" height="46" rx="13" fill="${background}" stroke="#d5d9c8"/>${ICONS[index].replaceAll('COLOR',color)}</svg>`;
 return {index,palette,name:NAMES[index],svg};
}
