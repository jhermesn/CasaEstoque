if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CasaEstoque/_next/app-build-manifest.json",revision:"25d48f6d03e9d9e34804693ce50fbca5"},{url:"/CasaEstoque/_next/static/chunks/117-6f8dc38d0c263acc.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/2170a4aa-db4a172082f66a10.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/853-48441a22d6f7ce5d.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/app/_not-found/page-9319f73562718bf1.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/app/layout-1c38b1cddbef1945.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/app/page-97286733cdeac60a.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/fd9d1056-dd504a17eef30e15.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/framework-f66176bb897dc684.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/main-6157b760a19aac46.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/main-app-c22a4e8ea2465d17.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/CasaEstoque/_next/static/chunks/webpack-b29b9f5a94c749c8.js",revision:"fq9tpMNIW_Qjam9OYjryu"},{url:"/CasaEstoque/_next/static/css/8b6c799ef29b81fd.css",revision:"8b6c799ef29b81fd"},{url:"/CasaEstoque/_next/static/fq9tpMNIW_Qjam9OYjryu/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/CasaEstoque/_next/static/fq9tpMNIW_Qjam9OYjryu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/CasaEstoque/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/CasaEstoque/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/CasaEstoque/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/CasaEstoque/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/CasaEstoque/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/CasaEstoque/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/CasaEstoque/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/CasaEstoque/manifest.json",revision:"08ae62a9682bbf8d0fd1289b929dbf4e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/CasaEstoque",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
