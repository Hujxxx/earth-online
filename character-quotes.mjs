// Short, source-checked excerpts. Foreign dialogue is translated here;
// label the actual speaker, including the line spoken to Amélie by Dufayel.
export const CHARACTER_QUOTES={
 1:{text:'皇帝轮流做，明年到我家。',speaker:'孙悟空',work:'西游记 · 第七回',url:'https://zh.wikisource.org/zh-hans/西遊記/第007回',note:'原著节选'},
 2:{text:'我希望是……一万年。',speaker:'至尊宝',work:'大话西游之大圣娶亲',url:'https://news.17173.com/content/04292026/231731346.shtml',note:'台词节选'},
 3:{text:'我不是很聪明，但我知道什么是爱。',speaker:'阿甘',work:'阿甘正传',url:'https://www.imdb.com/title/tt0109830/quotes/?item=qt3362658',note:'台词中译'},
 4:{text:'希望是个好东西。',speaker:'安迪',work:'肖申克的救赎',url:'https://www.imdb.com/title/tt0111161/quotes?item=qt0470728',note:'台词中译节选'},
 5:{text:'喜欢唱、跳、Rap、篮球。',speaker:'练习两年半的练习生',work:'偶像练习生 · 自我介绍',url:'https://ent.ifeng.com/c/7umugnBmJCy',note:'经典自我介绍节选'},
 6:{text:'还是单送我一人，还是别的姑娘们都有的？我就知道，别人不挑剩下的，也不给我。',speaker:'林黛玉',work:'红楼梦 · 第七回 · 送宫花',url:'https://www.shidianguji.com/book/SWX0013/chapter/1l0pypjf702l7',note:'原著对白节选'},
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
 22:{text:'连洋蓟都有心。',speaker:'艾米丽',work:'天使爱美丽',url:'https://assets.scriptslug.com/live/pdf/scripts/amelie-2001.pdf?v=1729114858',note:'角色台词中译节选'},
 23:{text:'想象力比知识更重要。',speaker:'爱因斯坦',work:'1929年访谈',url:'https://quoteinvestigator.com/2013/01/01/einstein-imagination/',note:'名言中译节选'},
 24:{text:'说的是一辈子！',speaker:'程蝶衣',work:'霸王别姬',url:'https://news.culr.edu.cn/xlzx/xlyy/61d9225cf6cf4597b8091786e59d4748.htm',note:'台词节选'}
};

// Show a sourced character quotation, independent of attribute levels.
export function resultQuote(roleId){return {...CHARACTER_QUOTES[roleId],original:false,connection:''};}
