// Short, source-checked excerpts. Foreign dialogue is translated here;
// label the actual speaker, including the line spoken to Amélie by Dufayel.
export const CHARACTER_QUOTES={
 1:{text:'皇帝轮流做，明年到我家。',speaker:'孙悟空',work:'西游记 · 第七回',url:'https://zh.wikisource.org/zh-hans/西遊記/第007回',note:'原著节选'},
 2:{text:'我希望是……一万年。',speaker:'至尊宝',work:'大话西游之大圣娶亲',url:'https://news.17173.com/content/04292026/231731346.shtml',note:'台词节选'},
 3:{text:'我不是很聪明，但我知道什么是爱。',speaker:'阿甘',work:'阿甘正传',url:'https://www.imdb.com/title/tt0109830/quotes/?item=qt3362658',note:'台词中译'},
 4:{text:'希望是个好东西。',speaker:'安迪',work:'肖申克的救赎',url:'https://www.imdb.com/title/tt0111161/quotes?item=qt0470728',note:'台词中译节选'},
 5:{text:'喜欢唱、跳、Rap、篮球。',speaker:'练习两年半的练习生',work:'偶像练习生 · 自我介绍',url:'https://ent.ifeng.com/c/7umugnBmJCy',note:'经典自我介绍节选'},
 6:{text:'愿侬此日生双翼，随花飞到天尽头。',speaker:'林黛玉',work:'红楼梦 · 葬花吟',url:'https://m.gushiwen.cn/mingju/juv_033abdb79e82.aspx',note:'原著诗句节选'},
 7:{text:'陆地对我来说，是一艘太大的船。',speaker:'1900',work:'海上钢琴师',url:'https://www.imdb.com/title/tt0120731/quotes/',note:'台词中译节选'},
 8:{text:'振作点，别灰心！我们会有办法的。',speaker:'流浪汉',work:'摩登时代',url:'https://www.moma.org/documents/moma_catalogue_2136_300062892.pdf',note:'对白字幕中译'},
 9:{text:'既然我活了下来，就不会白白地活着。',speaker:'梅长苏',work:'琅琊榜',url:'https://zz.mnw.cn/zh/yl/996010.html',note:'经典台词'},
 10:{text:'真相永远只有一个！',speaker:'柯南',work:'名侦探柯南',url:'https://www.conanpedia.com/Detective_Conan',note:'经典台词中译'},
 11:{text:'天才是1%的灵感加99%的汗水。',speaker:'爱迪生',work:'人物名言',url:'https://www.nps.gov/edis/learn/kidsyouth/index.htm',note:'名言中译'},
 12:{text:'真拿你没办法！',speaker:'哆啦A梦',work:'哆啦A梦',url:'https://doraemon.fandom.com/zh/wiki/各角色常見台詞?variant=zh-hans',note:'经典口头禅中译'},
 13:{text:'活，你背着我！死，你背着我！',speaker:'黄蓉',work:'射雕英雄传 · 借曲改唱',url:'https://www.master-insight.com/article/36201',note:'原著人物唱句节选'},
 14:{text:'我李逍遥要做天下第一大侠！',speaker:'李逍遥',work:'仙剑奇侠传',url:'https://www.mnw.cn/tv/guonei/2085281.html',note:'台词节选'},
 15:{text:'最重要的还是广开民智。',speaker:'黄飞鸿',work:'黄飞鸿之三：狮王争霸',url:'https://k.sina.cn/article_5044281310_12ca99fde02001nr23.html?from=ent&subch=oent',note:'台词节选'},
 16:{text:'以我自己的方式，我爱你们所有人。',speaker:'谢尔顿',work:'生活大爆炸 · 第十二季结局',url:'https://www.etonline.com/big-bang-theory-series-finale-breaking-down-the-biggest-plot-twists-with-inside-secrets-exclusive',note:'台词中译节选'},
 17:{text:'并非所有宝藏都是金银，伙计。',speaker:'杰克船长',work:'加勒比海盗：黑珍珠号的诅咒',url:'https://news.disney.com/the-definitive-ranking-of-jack-sparrow-quotes/',note:'台词中译'},
 18:{text:'因为我是天才！',speaker:'樱木花道',work:'灌篮高手',url:'https://game.xiaomi.com/viewpoint/61662204_1576468226773_12',note:'经典台词中译'},
 19:{text:'因为这是我的选择。',speaker:'尼奥',work:'黑客帝国3：矩阵革命',url:'https://www.matrixfans.net/movies/the-matrix-revolutions/transcript/',note:'经典台词中译'},
 20:{text:'凉风有信，秋月无边。',speaker:'韦小宝',work:'小宝与康熙',url:'https://ent.sina.cn/review/media/2006-08-09/detail-icczmvun4173734.d.html?from=wap',note:'人物引用《客途秋恨》节选'},
 21:{text:'假如再也见不到你，祝你早安、午安、晚安。',speaker:'楚门',work:'楚门的世界',url:'https://www.simaqingshan.com/post/1658.html',note:'台词中译'},
 22:{text:'你的骨头不是玻璃做的。',speaker:'画家杜法耶写给艾米丽',work:'天使爱美丽',url:'https://assets.scriptslug.com/live/pdf/scripts/amelie-2001.pdf?v=1729114858',note:'给这个角色的一句话 · 台词中译节选'},
 23:{text:'想象力比知识更重要。',speaker:'爱因斯坦',work:'1929年访谈',url:'https://quoteinvestigator.com/2013/01/01/einstein-imagination/',note:'名言中译节选'},
 24:{text:'说的是一辈子！',speaker:'程蝶衣',work:'霸王别姬',url:'https://news.culr.edu.cn/xlzx/xlyy/61d9225cf6cf4597b8091786e59d4748.htm',note:'台词节选'}
};

// Only use a canonical quote when one of the strongest visible attributes supports it.
// Otherwise prefer a relevant editorial line, explicitly labelled as original writing.
const QUOTE_MATCHES={
 1:['探索欲','自主值'],4:['探索欲','耐力值','侦查值'],8:['沟通值','协作值','战术规划'],
 10:['侦查值','洞察力'],11:['创造力','熟练度'],12:['支援值','创造力'],
 14:['支援值','耐力值','恢复力'],16:['共情值','羁绊值'],17:['协作值','沟通值'],
 18:['行动力','熟练度'],19:['探索欲','侦查值'],21:['自主值','探索欲'],
 22:['共情值','支援值','羁绊值'],23:['脑洞值','探索欲']
};
const QUOTE_CONNECTIONS={
 1:'你愿意亲自试一试，也在意下一步能不能由自己决定。',
 4:'你愿意给长期的事留时间；希望也可以落实成今天能做的一小步。',
 8:'你会用沟通和一点幽默接住难题，也值得有人陪你一起想办法。',
 10:'你在意依据，愿意多核实一步；这份认真值得用在真正重要的问题上。',
 11:'你愿意把想法变成实际尝试。灵感需要出口，尝试也需要允许失败的空间。',
 12:'你很容易替别人多想一步，但能帮忙和必须帮忙，是两回事。',
 14:'你愿意认真帮人，也请给自己留一点不必独自扛事的余地。',
 16:'你不一定擅长热闹的表达，但关心也可以有自己清楚、具体的方式。',
 17:'你愿意和人一起把事情推进。同行的体验，有时比最后拿到了什么更值得留下。',
 18:'你愿意行动、愿意练习。真正可用的底气，也包括允许自己暂时做不好。',
 19:'你愿意了解事实，再为自己的选择负责，不轻易把判断交给别人的声音。',
 21:'你可以带着善意离开熟悉的安排，给真正想过的生活留一个入口。',
 22:'你习惯照顾别人的需要，也可以试着直接表达自己的心意和期待。',
 23:'你愿意追问还有没有别的可能；好奇心不必总按标准答案规定的方向生长。'
};
export function resultQuote(roleId,skills,originalText){
 const highest=Math.max(...skills.map(s=>s.level));
 const matches=QUOTE_MATCHES[roleId]||[];
 const supported=skills.some(s=>s.level===highest&&matches.includes(s.name));
 if(supported)return {...CHARACTER_QUOTES[roleId],original:false,connection:QUOTE_CONNECTIONS[roleId]};
 return {text:originalText,speaker:'地球 Online',work:'本次结果寄语',note:'项目原创 · 非角色原台词',url:null,original:true,connection:''};
}
