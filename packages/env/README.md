# universal-env [![npm](https://img.shields.io/npm/v/universal-env.svg)](https://www.npmjs.com/package/universal-env)

Judge runtime environment

## Support
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" /> <img alt="wechatMiniprogram" src="https://img.alicdn.com/tfs/TB1slcYdxv1gK0jSZFFXXb0sXXa-200-200.svg" width="25px" height="25px">

## Install
```bash
$ npm install universal-env --save
```

## Usage
```javascript
import { isWeex, isWeb, isMiniApp, isNode, isWeChatMiniProgram } from 'universal-env';

```

## APIS
### `isWeex: boolean`
Checks if environment is a weex environment.

### `isWeb: boolean`
Checks if environment is a web environment.

### `isMiniApp: boolean`
Checks if environment is an alibaba miniprogram environment.

### `isWeChatMiniProgram: boolean`
Checks if environment is a wechat miniprogram environment.

### `isNode: boolean`
Checks if environment is a Node.js environment.

## Results in each container

|                    | isMiniApp | isWeChatMiniProgram | isWeb | isWeex | isNode |
| ------------------ | --------- | ------------------- | ----- | ------ | ------ |
| Alibaba MiniApp         | ✔️         | ✘                   | ✘     | ✘      | ✘      |
| Alibaba MiniApp WebView | ✔️         | ✘                   | ✔️     | ✘      | ✘      |
| Wechat MiniProgram         | ✘         | ✔️                   | ✘     | ✘      | ✘      |
| Wechat MiniProgram WebView | ✘         | ✔️                   | ✔️     | ✘      | ✘      |
| Weex               | ✘         | ✘                   | ✘     | ✔️      | ✘      |
| Node               | ✘         | ✘                   | ✘     | ✘      | ✔️      |
| Web                | ✘         | ✘                   | ✔️     | ✘      | ✘      |


