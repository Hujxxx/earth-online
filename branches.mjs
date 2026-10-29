import {STORY,CHAPTER_INTROS} from './story.mjs';
const target=(icon,x,y,s,lx,ly)=>({icon,x,y,s,lx,ly});
// Stable route IDs preserve saved result compatibility. All routes now lead to personal retrieval.
export function routeFor(a){const first=a?.[1]?.[0],second=a?.[2]?.[0];if(first===1)return second===1?'foot':second===2?'wait':'delivery';if(first===3)return second===2?'foot':'wait';return 'foot';}
export const ROUTES={foot:{title:'沿街追寻',summary:'你决定亲自走进旧桥街，在沿途的线索里找回自己的秘密。'},delivery:{title:'隔空追踪',summary:'你先留在自己的地方，通过来电人的实时画面核对线索，确认包裹后再亲自去认领。'},wait:{title:'准备好再出发',summary:'你先留出一点准备时间，再接上追踪。秘密没有被放弃，出发的节奏由你决定。'}};
const remote={
3:{title:'先查哪一处画面',prompt:'来电人接通旧桥街的实时画面。你想先查哪一处？',place:'手机里的三个实时画面',kind:'street',labels:['河边小店','修理铺','玻璃温室'],icons:['cafe','workshop','glasshouse'],feedback:['画面里出现了一张旧桥档案馆的寄存便条。']},
4:{title:'手边先留哪两件',prompt:'你先在手机上查线索。桌上的东西，留哪两件在手边？',place:'家里的桌面',kind:'desk',labels:['留下本子','留下手机','留下胶带','留下耳机'],icons:['notebook','phone','tape','headphones']},
5:{title:'追踪时听点什么',prompt:'画面还在加载。你想给房间放哪种声音？',place:'家里的音乐角',labels:['摇滚鼓点','木吉他人声','电子乐','纯器乐','听窗外的声音'],feedback:['声音响起，旧桥街的画面也清楚了。']},
6:{title:'画面里的门关着',prompt:'你选中的地方关着门。画面上有一张便条，你先查哪里？',place:'手机里的旧桥街入口',kind:'desk',labels:['放大门边的提示','给店主留个言','看看附近的地图'],icons:['notice','phone','map'],feedback:['线索指向河对岸的旧桥档案馆。']},
7:{title:'桥头的手册传来了',prompt:'旧桥在检修。来电人发来桥头手册，你先看哪里？',place:'手机里的桥头手册',kind:'desk',labels:['接着读这一页','打开第一页','看看旁边的实景图'],feedback:['你找到了通向档案馆的绕行入口。']},
8:{title:'先看哪张绕行卡',prompt:'手机上有两张绕行卡。你先看路线原理，还是具体走法？',place:'手机里的两张指路卡',labels:['看看为什么这样绕','先收下具体走法'],feedback:['你把绕行路线记在了手机里。']},
9:{title:'镜头扫过一面风景墙',prompt:'实时镜头扫过桥边的风景墙。你会停在哪张小图上？',place:'手机里的桥边风景墙'},
10:{title:'一叠路线照片弹出来',prompt:'来电人发来的照片有点乱。你怎么找出有用的那张？',place:'桌面上的路线照片',kind:'desk',labels:['先按顺序分一分','只看地图那几张','问哪张是最新的'],icons:['sorted','map','phone'],feedback:['你找到了能通向档案馆的完整路线。']},
11:{title:'路线图缺了一角',prompt:'照片里的地图缺了一角。你先怎么接着查？',place:'手机上收到的缺角地图',labels:['先看清楚的部分','问缺的是哪一段','画个简图试着对上'],icons:['map','talk','pencil'],feedback:['缺失的路段被补齐，你把路线存好了。']},
12:{title:'镜头被一场雨挡住了',prompt:'实时画面被雨水遮住了。等它恢复时，你想做点什么？',place:'房间里的雨声',kind:'rainroom',labels:['坐在窗边等一等','找人聊两句','翻翻喜欢的照片'],icons:['windowSeat','friends','gallery'],feedback:['雨慢慢小了，画面重新清晰起来。']},
13:{title:'便条的后半句糊了',prompt:'来电人拍到一张寄存便条，“后来挪到……”后半句糊了。你先怎么看？',place:'画面里的寄存便条',labels:['对照照片找线索','猜猜没写完的话','先把便条存好'],feedback:['你圈出了后院雨棚，等待更多记录核实。']},
14:{title:'先放大哪张保管照',prompt:'管理员开放了三张模糊的保管照。你想先放大哪张？',place:'手机里的三张保管照片',labels:['后院的整体位置','保管人的表情','小车和纸箱']},
15:{title:'后院里出现了那只箱子',prompt:'来电人发来一张纸箱照片：“像是这一只。”你怎么回复？',place:'手机里的纸箱照片',labels:['先发我具体位置','先拍清楚封条','我核对完记录再回你'],icons:['location','camera','clock'],feedback:['管理员暂时保管好箱子，等你本人确认。']},
16:{title:'手边的东西用上了',prompt:'封条编号出现在屏幕上。你用手边哪件东西帮助确认？',place:'家里的核对记录',kind:'desk',labels:['用本子核对编号','用手机放大封条','用胶带拼好纸条','用耳机听保管录音'],icons:['notebook','phone','tape','headphones'],feedback:['纸条上的编号与箱子的封条对上了。']},
17:{title:'两条消息时间不一样',prompt:'保管截图写三点，来电人说四点。你先怎样核实？',place:'手机里的两条保管消息',labels:['把两份记录放一起比','分别听他们再说说','请管理员到后院核对'],feedback:['原来三点是寄存、四点是挪进雨棚。确认无误，你带上保存的路线，亲自来到档案馆。']},
18:{title:'你亲手接过那只包裹',prompt:'你来到档案馆，核对封条，亲手领回包裹。想带到哪里慢慢拆？',place:'旧桥档案馆的门口',kind:'street',labels:['安静的角落','和帮忙的人坐一桌','带回自己家'],icons:['quietSeat','friends','house'],feedback:['你把秘密带到了一个安静的角落。','你和帮过忙的人在长桌边坐下。','你把秘密带回了自己家。']},
19:{title:'把追踪的线索收一收',prompt:'包裹还没拆，截图、照片和便条都在手边。你先收哪一部分？',place:'包裹旁的追踪记录'},
22:{prompt:'从神秘来电到亲手找回包裹，你想怎样记住这段经历？'},
24:{discovery:['你终于打开了这只让你一路追寻的神秘包裹。','隔着屏幕查过的线索，最后引你来到旧桥街。秘密也终于回到你手里。','箱子里只有一份写着“{{name}} · 地球 Online 角色养成档案”的文件。']}
};
export function getStory(q,a={}){
 let story={...STORY[q-1],targets:STORY[q-1].targets.map(t=>({...t}))};
 if(q===1){story.labels=[...story.labels,'先保存线索，缓一缓'];story.targets=[target('doorphoto',154,190,.78,126,80),target('phone',439,188,.74,451,78),target('map',155,390,.78,126,505),target('clock',438,391,.78,451,505)];story.feedback=[...story.feedback,'你把线索保存下来。神秘号码又亮起：准备好时，再来找我。'];}
 if(q===2&&a[1]?.[0]===1){story={...story,title:'电话那头又传来声音',prompt:'“我能接通旧桥街的画面，但包裹只能由你认领。”你打算怎么找？',place:'与神秘来电人的通话',kind:'message',labels:['先远程查清位置','我现在就去旧桥街','先让他确认线索'],targets:[target('phone',128,308,.8,117,455),target('boots',311,305,.75,311,455),target('clock',488,309,.7,484,455)],feedback:['你接通实时画面，先找准位置，再亲自出发。','你记下地址，决定先走进旧桥街。','你让他先确认线索，自己准备好再出发。']};}
 if(q===2&&a[1]?.[0]===3){story={...story,title:'神秘号码又亮起来',prompt:'“别担心，我会帮你盯着。秘密还在等你。”你现在想怎么开始？',place:'稍后再打开的消息',kind:'message',labels:['先请他查清位置','准备一下，再接上线索','带上地址，现在出门'],targets:[target('phone',128,308,.8,117,455),target('quiet',311,305,.75,311,455),target('boots',488,309,.7,484,455)],feedback:['你和他约好，先在线确认位置，再去认领。','你留出一段准备时间，随后重新接上追踪。','你带好地址，向旧桥街出发。']};}
 const route=routeFor(a);
 if(q>=3&&route!=='foot'&&remote[q]){const v=remote[q];story={...story,...v,targets:story.targets.map((t,i)=>({...t,icon:v.icons?.[i]||t.icon,caption:v.icons?'':t.caption}))};if(v.feedback?.length===1)story.feedback=story.labels.map(()=>v.feedback[0]);}
 if(q===6&&route==='wait'){story.title='准备好了，重新接上线索';story.prompt='你重新接通画面。店门关着，门边有一张提示，你先看哪里？';}
 return story;
}
export function getChapter(index,a={}){const c=CHAPTER_INTROS[index],route=routeFor(a);if(route==='foot'||index===0)return c;const wait=route==='wait';const backgrounds={
1:[wait?'准备好后，你重新接上神秘来电。线索指向河对岸的旧桥档案馆。':'你留在自己的地方，通过来电人接通的画面查找包裹。线索指向河对岸的旧桥档案馆。','旧桥在检修，镜头前又下起了雨。桥头留下的手册里，藏着一条绕行路线。','先保存通向档案馆的路线。秘密需要你亲自认领，查清位置后就能出发。'],
2:['雨小了，来电人的镜头转向旧桥档案馆。','管理员说，包裹被临时挪进了后院雨棚，记录却被雨水打湿了。','先在线核对那只箱子。确认后，你会带着路线，亲自去找回秘密。'],
3:['你终于来到档案馆，亲手接过写着自己名字的包裹。','你把它带到{{unpack}}。封口旁的小屏幕忽然亮起：先留下这段追踪的存档，再打开看看。','电话里的秘密，就在里面。这一次，只有你能打开它。']};
return {...c,title:{1:'屏幕另一头的风雨',2:'确认那只箱子',3:'秘密终于回到你手里'}[index],background:backgrounds[index],goal:{1:'查清绕行路线，为亲自找回秘密做好准备。',2:'核对封条与保管记录，亲自前往档案馆。',3:'留下追踪的存档，打开属于你的秘密档案。'}[index]};}
