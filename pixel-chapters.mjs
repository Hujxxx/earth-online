const CHAPTER_PROPS=[
 '<path d="M18 3h27v5h4v49h-4v5H18v-5h-4V8h4Z" fill="#506c58"/><path d="M20 12h23v38H20Z" fill="#f9f2d7"/><path d="M27 6h10v3H27Zm1 48h9v3h-9Z" fill="#e8cd82"/><path d="M26 22h11v5h-4v6h-5v-7h-2Zm2 15h5v5h-5Z" fill="#bb845e"/>',
 '<path d="M2 40h60v8H2Zm5-21h5v31H7Zm45 0h5v31h-5Z" fill="#9b7856"/><path d="M9 24h9v4h9v3h10v-3h9v-4h9v4h-7v5H38v4H26v-4H16v-5H9Z" fill="#cfb584"/><path d="M3 55h10v3h13v-3h13v3h13v-3h10" fill="none" stroke="#8ba8a2" stroke-width="4"/>',
 '<path d="M11 12h20v5h5v19h-5v5H11v-5H6V17h5Z" fill="#c6934e"/><path d="M15 19h12v14H15Z" fill="#fff0bd"/><path d="m32 35 6-6 23 23-6 6-5-5-5 5-6-6 5-5Z" fill="#d8b26b"/>',
 '<path d="M12 6h28l13 13v40H12Z" fill="#fff9e8" stroke="#9b9678" stroke-width="3"/><path d="M39 7v14h13" fill="#dce3cc"/><path d="M21 30h23v4H21Zm0 9h18v4H21Zm0 9h13v4H21Z" fill="#8fa17b"/><path d="m46 43 4 7 8 1-6 5 2 8-8-4-7 4 1-8-6-5 8-1Z" fill="#d8ae65"/>'
];
export function pixelChapterArt(chapter,animated=true){
 const n=String(chapter+1).padStart(2,'0'),titles=['接听来电','过桥冒险','找回秘密','打开档案'];
 return `<div class="chapter-pixel chapter-theme-${chapter} ${animated?'':'is-still'}" role="img" aria-label="CHAPTER ${n}，像素小人跳起来顶金币，${titles[chapter]}"><div class="chapter-pixel-title">CHAPTER ${n}</div><span class="chapter-pixel-subtitle">${titles[chapter]}</span><div class="chapter-pixel-cloud"></div><div class="chapter-pixel-floor"></div><img class="chapter-pixel-runner" src="./pixel-runner-v12.webp" alt="" width="512" height="512" decoding="async"><svg class="chapter-pixel-coin" viewBox="0 0 20 24" aria-hidden="true" shape-rendering="crispEdges"><path d="M6 0h8v3h3v3h3v12h-3v3h-3v3H6v-3H3v-3H0V6h3V3h3Z" fill="#b98747"/><path d="M6 3h8v3h3v12h-3v3H6v-3H3V6h3Z" fill="#efd078"/><path d="M7 6h3v12H7Z" fill="#fff4bb"/></svg><span class="chapter-pixel-plus">+1 ✦</span><svg class="chapter-pixel-prop" viewBox="0 0 64 68" aria-hidden="true" shape-rendering="crispEdges">${CHAPTER_PROPS[chapter]}</svg></div>`;
}
