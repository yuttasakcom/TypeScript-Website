(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"L+7S":function(e,a,t){"use strict";t.r(a);var n=t("ERkP"),l=t.n(n),r=t("9Dj+"),o=t("Wbzz"),i=(t("pzji"),t("GO2c")),c=t("u1Qi"),u=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{title:"Developers - Playground Plugins",description:"What is a TypeScript Playground Plugin, and how can you make one?",lang:"en"},l.a.createElement("div",{id:"dev"},l.a.createElement(c.a,{active:"playground plugins"}),l.a.createElement("div",{className:"raised content",style:{padding:"2rem",margin:"2rem",marginTop:"1rem"}},l.a.createElement("div",{className:"split-sixhundred"},l.a.createElement("h1",{style:{marginTop:"0"}},"Playground Plugins"),l.a.createElement("p",null,"The new TypeScript Playground allows people to hook into the Playground and extend it in ways in which the TypeScript team don't expect."),l.a.createElement("p",null,"The sidebar of the Playground uses the same plugin infrastructure as external plugins, so you have the same level of access as the playground to build interesting projects."),l.a.createElement("p",null,"Playground plugins have no fancy frameworks, you're free to inject them at runtime and use them if you need to - but the current plugins are built with the DOM APIs and TypeScript."),l.a.createElement("p",null," "),l.a.createElement("p",null,"We have a template, and the Playground has a dev-mode for hooking directly to your local server, so you don't need to run a copy of the TypeScript website to have a working development environment."),l.a.createElement("p",null,"There is a complex reference plugin called ",l.a.createElement("a",{href:"https://github.com/orta/playground-slides"},"Presentation Mode")," which is available by default for you to investigate and understand."),l.a.createElement("p",null,"If you have a polished plugin, let us know and we can add it to the default registry - making it visible to everyone easily.")),l.a.createElement("div",{className:"sixhundred",style:{borderLeft:"1px solid gray"}},l.a.createElement("img",{src:t("bcCT"),width:"100%"}))),l.a.createElement("div",{className:"raised",style:{padding:"2rem",margin:"2rem"}},l.a.createElement("h2",null,"Quick Tutorial"),l.a.createElement("p",null,"You need about 5 minutes, Node.js, yarn and a Chromium based browser."),l.a.createElement("p",null,l.a.createElement("b",null,"Step 1"),": Use the template to bootstrap: ",l.a.createElement("code",null,"npm init typescript-playground-plugin MyPlugin")),l.a.createElement("p",null,l.a.createElement("b",null,"Step 2"),": Run ",l.a.createElement("code",null,"yarn start")," in the new repo, to start up the local dev server"),l.a.createElement("p",null,l.a.createElement("b",null,"Step 3"),": Open the ",l.a.createElement("a",{href:Object(o.withPrefix)("/en/play")},"playground"),' in your Chromium browser, click "Options" and enable ',l.a.createElement("code",null,'"Connect to localhost:5000/index.js"')),l.a.createElement("p",null,l.a.createElement("b",null,"Step 4"),": Refresh, and see the new tab. That's your plugin up and running"),l.a.createElement("p",null," "),l.a.createElement("p",null,"That's all the pieces working in tandem, now you can make changes to the template and build out your plugin. The plugin in dev mode will always become forefront when connected, so you can re-load without a lot off clicks. To understand the template's technology, read the ",l.a.createElement("a",{href:"https://github.com/microsoft/TypeScript-Website/blob/v2/packages/create-playground-plugin/template/CONTRIBUTING.md"},"CONTRIBUTING.md"))))))};a.default=function(e){return l.a.createElement(i.a,null,l.a.createElement(u,e))}},bcCT:function(e,a,t){e.exports=t.p+"static/playground-plugin-preview-7b7a02264bf84735447855d8be08b0bb.png"},u1Qi:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("ERkP"),l=t.n(n),r=t("Wbzz"),o=function(e){var a=function(a){return e.active.toLowerCase()===a?"active":""};return l.a.createElement("nav",{className:"navbar-sub"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"name"},l.a.createElement("span",null,"Developer Tools")),l.a.createElement("li",null,l.a.createElement("a",{className:a("compiler api"),href:Object(r.withPrefix)("/dev/compiler")},"Compiler API")),l.a.createElement("li",null,l.a.createElement("a",{className:a("sandbox"),href:Object(r.withPrefix)("/dev/sandbox")},"Sandbox")),l.a.createElement("li",null,l.a.createElement("a",{className:a("twoslash"),href:Object(r.withPrefix)("/dev/twoslash")},"Twoslash")),l.a.createElement("li",null,l.a.createElement("a",{className:a("playground plugins"),href:Object(r.withPrefix)("/dev/playground-plugins")},"Playground Plugins"))))}}}]);
//# sourceMappingURL=component---src-pages-dev-playground-plugins-tsx-f45ef3d705eec40fddbf.js.map