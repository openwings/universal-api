declare const callNative: any;
declare const WXEnvironment: any;
declare const __kraken__: any;
declare const my: any;
declare const wx: any;

function isUndef(type): boolean {
  return type === 'undefined';
}

export const isWeb = !isUndef(typeof window) && 'onload' in window;
export const isNode =
  !isUndef(typeof process) && !!(process.versions && process.versions.node);
export const isWeex =
  !isUndef(typeof callNative) ||
  !isUndef(typeof WXEnvironment) && WXEnvironment.platform !== 'Web';
export const isKraken = !isUndef(typeof __kraken__);
export const isMiniApp = !isUndef(typeof my) && my !== null && !isUndef(my.alert);
// In wechat mini program, wx.login is a function
// In wechat mini propgram webview, there is no wx.login, but exist wx.miniProgram
export const isWeChatMiniProgram = !isUndef(typeof wx) && wx !== null && (!isUndef(wx.login) || !isUndef(wx.miniProgram));
