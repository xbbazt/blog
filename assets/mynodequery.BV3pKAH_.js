import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang.BuEAVNs-.js";import{f as y,a as F}from"./chunks/vue-router.DNTHGQhS.js";import{D as o,O as E,a2 as l,u,N as m,R as s,V as i,Y as e}from"./framework.DTsYX98Z.js";import"./app.DEb5wvbS.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/nprogress.D5YWUqdw.js";import"./chunks/vue-i18n.DBUQk4Uq.js";import"./chunks/pinia.BZCK5L1u.js";import"./chunks/@vueuse/motion.Cu3FxAjX.js";import"./YunComment.vue_vue_type_style_index_0_lang.DySG5Dh5.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.DdS3O7Sb.js";import"./post.CirPAow7.js";const C=y("/posts/mynodequery",async t=>JSON.parse('{"title":"搭建一个属于自己VPS探针  MyNodeQuery","description":"","frontmatter":{"title":"搭建一个属于自己VPS探针  MyNodeQuery","date":"2024-10-20 23:53:35","updated":"2024-10-21 12:00:00","categories":"Linux折腾记录","tags":["VPS探针","MyNodeQuery"],"published":true,"hideInList":false,"feature":null,"isTop":false},"headers":[{"level":2,"title":"安装可能使用到的软件","slug":"安装可能使用到的软件","link":"#安装可能使用到的软件","children":[]},{"level":2,"title":"安装Docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装Docker-compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]},{"level":2,"title":"创建目录","slug":"创建目录","link":"#创建目录","children":[]},{"level":2,"title":"docker-compose配置文件的编写","slug":"docker-compose配置文件的编写","link":"#docker-compose配置文件的编写","children":[]},{"level":2,"title":"创建mynodequery配置文件","slug":"创建mynodequery配置文件","link":"#创建mynodequery配置文件","children":[]},{"level":2,"title":"申请证书","slug":"申请证书","link":"#申请证书","children":[]},{"level":2,"title":"nginx配置","slug":"nginx配置","link":"#nginx配置","children":[]},{"level":2,"title":"启动你的Docker容器","slug":"启动你的docker容器","link":"#启动你的docker容器","children":[]},{"level":2,"title":"访问","slug":"访问","link":"#访问","children":[]},{"level":2,"title":"站点设置","slug":"站点设置","link":"#站点设置","children":[]},{"level":2,"title":"ping 设置","slug":"ping-设置","link":"#ping-设置","children":[]},{"level":2,"title":"部署完毕","slug":"部署完毕","link":"#部署完毕","children":[]}],"relativePath":"pages/posts/mynodequery.md","lastUpdated":1735364761000}'),{lazy:(t,h)=>t.name===h.name}),M={__name:"mynodequery",setup(t,{expose:h}){var p;const{data:k}=C(),r=F(),n=Object.assign(r.meta.frontmatter||{},((p=k.value)==null?void 0:p.frontmatter)||{});return r.meta.frontmatter=n,o("pageData",k.value),o("valaxy:frontmatter",n),globalThis.$frontmatter=n,h({frontmatter:{title:"搭建一个属于自己VPS探针  MyNodeQuery",date:"2024-10-20 23:53:35",updated:"2024-10-21 12:00:00",categories:"Linux折腾记录",tags:["VPS探针","MyNodeQuery"],published:!0,hideInList:!1,feature:null,isTop:!1}}),(a,d)=>{const c=g;return m(),E(c,{frontmatter:u(n)},{"main-content-md":l(()=>d[0]||(d[0]=[s("h1",{id:"mynodequrey-简介",tabindex:"-1"},[i("MyNodeQurey 简介 "),s("a",{class:"header-anchor",href:"#mynodequrey-简介","aria-label":'Permalink to "MyNodeQurey 简介"'},"​")],-1),s("p",null,"关于 MyNodeQuery，这是一款轻量级的服务器和网络性能监控工具，特别用于延迟监控。它支持实时监控虚拟专用服务器（VPS）网络状况，支持对节点进行 IPv4 和 IPv6 的 Ping 测试。MyNodeQuery 提供多种更新和优化功能，例如在最新版本 1.0.3.0 中，性能得到了优化，增加了国家地区旗帜的显示功能，并增加了更多的网络监控细节！",-1),s("h1",{id:"搭建mynodequery",tabindex:"-1"},[i("搭建MyNodeQuery "),s("a",{class:"header-anchor",href:"#搭建mynodequery","aria-label":'Permalink to "搭建MyNodeQuery"'},"​")],-1),s("ol",null,[s("li",null,"1c512m10g 即可，区域按你的所在位置购买。如果你是在中国大陆，不是很推荐中国大陆服务器。会造成无法访问或下载速度慢种种原因导致无法正常部署。"),s("li",null,"域名一枚并托管到DNS服务商。")],-1),s("h1",{id:"准备环境",tabindex:"-1"},[i("准备环境 "),s("a",{class:"header-anchor",href:"#准备环境","aria-label":'Permalink to "准备环境"'},"​")],-1),s("ol",null,[s("li",null,"系统：最好使用yum或apt包管理器Linux系统易于操作。本教程以 Debian系统为例，centos等请替换教程中 apt 字样代码即可。"),s("li",null,"软件：Docker，Docker-compose，curl，Vim，socat，Nginx(本教程以Nginx为例),，acme")],-1),s("h1",{id:"安装流程",tabindex:"-1"},[i("安装流程 "),s("a",{class:"header-anchor",href:"#安装流程","aria-label":'Permalink to "安装流程"'},"​")],-1),s("p",null,"接下来我们废话不多说，直入主题吧！",-1),s("h2",{id:"安装可能使用到的软件",tabindex:"-1"},[i("安装可能使用到的软件 "),s("a",{class:"header-anchor",href:"#安装可能使用到的软件","aria-label":'Permalink to "安装可能使用到的软件"'},"​")],-1),s("p",null,"更新系统源数据及软件",-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," update"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," && "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," upgrade"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -y")])])]),s("button",{class:"collapse"})],-1),s("p",null,"安装软件",-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," curl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," vim"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," socat"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -y")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"安装docker",tabindex:"-1"},[i("安装Docker "),s("a",{class:"header-anchor",href:"#安装docker","aria-label":'Permalink to "安装Docker"'},"​")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"curl"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -fsSL"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://get.docker.com"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," bash"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," docker")])])]),s("button",{class:"collapse"})],-1),s("p",null,"测试是否安装成功",-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"root@localhost:~#"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," docker"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -v")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Docker"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," version"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 27.3.1,"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," build"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," ce12230")])])]),s("button",{class:"collapse"})],-1),s("p",null,"使用Docker官方一键安装最新版Docker，无需参考官方文档。简单又省力！",-1),s("h2",{id:"安装docker-compose",tabindex:"-1"},[i("安装Docker-compose "),s("a",{class:"header-anchor",href:"#安装docker-compose","aria-label":'Permalink to "安装Docker-compose"'},"​")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"curl"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -L"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "https://github.com/docker/compose/releases/download/v2.29.6/docker-compose-$('),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"uname"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -s"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},")-$("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"uname"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -m"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},')"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -o"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /usr/local/bin/docker-compose")])])]),s("button",{class:"collapse"})],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"chmod"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," +x"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /usr/local/bin/docker-compose")])])]),s("button",{class:"collapse"})],-1),s("p",null,"测试是否安装成功",-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"root@localhost:/usr/local/bin#"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," docker-compose"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," version")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Docker"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," Compose"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," version"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," v2.29.6")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"创建目录",tabindex:"-1"},[i("创建目录 "),s("a",{class:"header-anchor",href:"#创建目录","aria-label":'Permalink to "创建目录"'},"​")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /home")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mkdir"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," web")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"cd"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," web")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mkdir"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," mynodequery")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mkdir"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," mysql")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mkdir"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," certs")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"touch"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," nginx.conf")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"touch"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," docker-compose.yml")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"docker-compose配置文件的编写",tabindex:"-1"},[i("docker-compose配置文件的编写 "),s("a",{class:"header-anchor",href:"#docker-compose配置文件的编写","aria-label":'Permalink to "docker-compose配置文件的编写"'},"​")],-1),s("div",{class:"language-yml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"services"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  nginx"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    image"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"nginx")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    container_name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"nginx")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    restart"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"always")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    ports"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"80:80"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"443:443"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    volumes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/home/web/nginx.conf:/etc/nginx/nginx.conf")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/home/web/certs:/etc/nginx/certs")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  mysql"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    image"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"mysql")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    container_name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"mysql"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 主机名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    restart"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"always")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    volumes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/home/web/mysql:/var/lib/mysql")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    environment"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      MYSQL_ROOT_PASSWORD"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"rootpassword"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # root密码")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      MYSQL_DATABASE"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"mynodequery"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 数据库名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      MYSQL_USER"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"xbbazt"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 用户名")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      MYSQL_PASSWORD"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"xbbazt"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 密码")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  mynodequery"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    image"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"jaydenlee2019/mynodequery:latest")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    container_name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"mynodequery")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    restart"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"always")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    ports"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"5000:5000"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    volumes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/home/web/mynodequery/appsettings.json:/app/appsettings.json")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    links"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      - "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"mysql")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"创建mynodequery配置文件",tabindex:"-1"},[i("创建mynodequery配置文件 "),s("a",{class:"header-anchor",href:"#创建mynodequery配置文件","aria-label":'Permalink to "创建mynodequery配置文件"'},"​")],-1),s("div",{class:"language-shel vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shel"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"cat > /home/web/mynodequery/appsettings.json <<EOF")]),i(`
`),s("span",{class:"line"},[s("span",null,"{")]),i(`
`),s("span",{class:"line"},[s("span",null,'    "Logging": {')]),i(`
`),s("span",{class:"line"},[s("span",null,'        "LogLevel": {')]),i(`
`),s("span",{class:"line"},[s("span",null,'            "Default": "Information",')]),i(`
`),s("span",{class:"line"},[s("span",null,'            "Microsoft": "Warning",')]),i(`
`),s("span",{class:"line"},[s("span",null,'            "Microsoft.Hosting.Lifetime": "Information"')]),i(`
`),s("span",{class:"line"},[s("span",null,"        }")]),i(`
`),s("span",{class:"line"},[s("span",null,"    },")]),i(`
`),s("span",{class:"line"},[s("span",null,'    "MySql": {')]),i(`
`),s("span",{class:"line"},[s("span",null,'        "ConnectionString": ""')]),i(`
`),s("span",{class:"line"},[s("span",null,"    },")]),i(`
`),s("span",{class:"line"},[s("span",null,'    "AllowedHosts": "*",')]),i(`
`),s("span",{class:"line"},[s("span",null,'    "Installed": "false",')]),i(`
`),s("span",{class:"line"},[s("span",null,'    "ReadNodeIpHeaderKey": "X-Real-IP"')]),i(`
`),s("span",{class:"line"},[s("span",null,"}")]),i(`
`),s("span",{class:"line"},[s("span",null,"EOF")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"申请证书",tabindex:"-1"},[i("申请证书 "),s("a",{class:"header-anchor",href:"#申请证书","aria-label":'Permalink to "申请证书"'},"​")],-1),s("ol",null,[s("li",null,"下载acme")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"curl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://get.acme.sh"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," sh")])])]),s("button",{class:"collapse"})],-1),s("ol",{start:"2"},[s("li",null,"输入你的邮箱")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"~"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/.acme.sh/acme.sh --register-account -m xxxx@gmail.com")])])]),s("button",{class:"collapse"})],-1),s("ol",{start:"3"},[s("li",null,"申请证书")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"~"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/.acme.sh/acme.sh --issue -d 域名 --standalone")])])]),s("button",{class:"collapse"})],-1),s("ol",{start:"4"},[s("li",null,"下载证书")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"~"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/.acme.sh/acme.sh --installcert -d 域名 --key-file /home/web/certs/key.pem --fullchain-file /home/web/certs/cert.pem")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"nginx配置",tabindex:"-1"},[i("nginx配置 "),s("a",{class:"header-anchor",href:"#nginx配置","aria-label":'Permalink to "nginx配置"'},"​")],-1),s("div",{class:"language-yml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"worker_processes  auto;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"error_log  /var/log/nginx/error.log warn;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"pid        /var/run/nginx.pid;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"events {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    worker_connections  1024;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"http {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    include       /etc/nginx/mime.types;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    default_type  application/octet-stream;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`                      '$status $body_bytes_sent "$http_referer" '`)]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},`                      '"$http_user_agent" "$http_x_forwarded_for"';`)]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    access_log  /var/log/nginx/access.log  main;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    sendfile        on;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    keepalive_timeout  65;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    upstream backend {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        server 172.17.0.1:5000;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    server {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        listen       80;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        server_name  域名;"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 或者替换为你的域名")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        # 301 重定向 HTTP 到 HTTPS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        return 301 https://$host$request_uri;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"    server {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        listen       443 ssl;"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # 监听 HTTPS 端口")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        server_name  域名;"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        ssl_certificate      /etc/nginx/certs/cert.pem;"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # 证书文件路径")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        ssl_certificate_key  /etc/nginx/certs/key.pem;"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 私钥文件路径")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        ssl_protocols       TLSv1.2 TLSv1.3;"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # 使用的 TLS 版本")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        ssl_ciphers         HIGH:!aNULL:!MD5;"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 支持的加密套件")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"        location / {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"            proxy_pass http://backend;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"            proxy_set_header Host $host;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"            proxy_set_header X-Real-IP $remote_addr;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"            proxy_set_header X-Forwarded-Proto $scheme;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"启动你的docker容器",tabindex:"-1"},[i("启动你的Docker容器 "),s("a",{class:"header-anchor",href:"#启动你的docker容器","aria-label":'Permalink to "启动你的Docker容器"'},"​")],-1),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"docker-compose"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," up"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -d")])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"访问",tabindex:"-1"},[i("访问 "),s("a",{class:"header-anchor",href:"#访问","aria-label":'Permalink to "访问"'},"​")],-1),s("p",null,[i("访问刚才配置在nginx配置域名，就可得到如下页面！ "),s("img",{src:"https://blog.xbbazt.de/post-images/1729489586215.png",alt:""})],-1),s("ul",null,[s("li",null,"主机名：mysql"),s("li",null,"端口：3306"),s("li",null,"数据库名：mynodequery"),s("li",null,"用户ID：xbbazt"),s("li",null,"密码：xbbazt")],-1),s("h2",{id:"站点设置",tabindex:"-1"},[i("站点设置 "),s("a",{class:"header-anchor",href:"#站点设置","aria-label":'Permalink to "站点设置"'},"​")],-1),s("p",null,"其他不用修改，只需要为你的探针设置管理员密码即可。",-1),s("h2",{id:"ping-设置",tabindex:"-1"},[i("ping 设置 "),s("a",{class:"header-anchor",href:"#ping-设置","aria-label":'Permalink to "ping 设置"'},"​")],-1),s("ul",null,[s("li",null,"IP版本：IPv4/IPv6"),s("li",null,"协议：ICMP=ping(无需端口)/TCP(需要请求端口)"),s("li",null,"节点名称：取一个名字"),s("li",null,"节点地址：域名/IP")],-1),s("h2",{id:"部署完毕",tabindex:"-1"},[i("部署完毕 "),s("a",{class:"header-anchor",href:"#部署完毕","aria-label":'Permalink to "部署完毕"'},"​")],-1),s("figure",null,[s("img",{src:"https://blog.xbbazt.de/post-images/1729493237284.png",alt:"",loading:"lazy",decoding:"async"})],-1),s("h1",{id:"总结",tabindex:"-1"},[i("总结： "),s("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结："'},"​")],-1),s("p",null,"只要按照每一步操作几乎100%都可以部署出来，要换作以前没有容器化确实探针部署不是一件容易的事情！",-1)])),"main-header":l(()=>[e(a.$slots,"main-header")]),"main-header-after":l(()=>[e(a.$slots,"main-header-after")]),"main-nav":l(()=>[e(a.$slots,"main-nav")]),"main-content-before":l(()=>[e(a.$slots,"main-content-before")]),"main-content":l(()=>[e(a.$slots,"main-content")]),"main-content-after":l(()=>[e(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[e(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[e(a.$slots,"main-nav-after")]),comment:l(()=>[e(a.$slots,"comment")]),footer:l(()=>[e(a.$slots,"footer")]),aside:l(()=>[e(a.$slots,"aside")]),"aside-custom":l(()=>[e(a.$slots,"aside-custom")]),default:l(()=>[e(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{M as default,C as usePageData};