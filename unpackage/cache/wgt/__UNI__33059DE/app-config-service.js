
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/TUI-Login/login","pages/TUI-Index/index","pages/TUI-Conversation/conversation/conversation","pages/TUI-Chat/chat","pages/TUI-Conversation/create-conversation/create","pages/TUI-User-Center/mine/mine","pages/TUI-User-Center/about/about","pages/TUI-User-Center/personal/personal","pages/TUI-User-Center/cancel/cancel","pages/TUI-User-Center/webview/webview","pages/TUI-Group/create-group/create","pages/TUI-Group/join-group/join","pages/TUI-Chat/rtcPage"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"小胡专属app","compilerVersion":"3.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"你我"}},{"path":"/pages/TUI-Login/login","meta":{},"window":{}},{"path":"/pages/TUI-Index/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/TUI-Conversation/conversation/conversation","meta":{},"window":{"navigationBarTitleText":"会话列表","navigationBarBackgroundColor":"#006EFF","backgroundColor":"#FFFFFF","navigationBarTextStyle":"white"}},{"path":"/pages/TUI-Chat/chat","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/TUI-Conversation/create-conversation/create","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/TUI-User-Center/mine/mine","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/TUI-User-Center/about/about","meta":{},"window":{}},{"path":"/pages/TUI-User-Center/personal/personal","meta":{},"window":{}},{"path":"/pages/TUI-User-Center/cancel/cancel","meta":{},"window":{}},{"path":"/pages/TUI-User-Center/webview/webview","meta":{},"window":{}},{"path":"/pages/TUI-Group/create-group/create","meta":{},"window":{}},{"path":"/pages/TUI-Group/join-group/join","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/TUI-Chat/rtcPage","meta":{"isNVue":true},"window":{"navigationBarTitleText":"音视频通话"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
