# ua-parser
ua-parser.js 在线调用版, [ua-parser.js](https://github.com/faisalman/ua-parser-js) 仓库地址
 
使用 [vercel](https://vercel.com) 进行部署

# 本地调试

```bash
git clone  https://github.com/vaebe/uaparser-api
```

## Install the Vercel CLI:

```bash
npm i -g vercel
```

## Then run the app at the root of the repository:

```bash
vercel dev
```
# 使用

接收一个 query `ua=xxx` 参数 `https://uaparser.vercel.app/api/query?ua=xxx`

输入 `https://uaparser.vercel.app/api/query?ua=Mozilla/100.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/125.0.0.0%20Safari/537.36`

<img width="1439" alt="image" src="https://github.com/vaebe/uaparser-api/assets/52314078/3fc39a03-a021-4584-a417-ff55ed575a44">

不输入任何参数返回本次请求的 ua 信息

<img width="801" alt="image" src="https://github.com/vaebe/uaparser-api/assets/52314078/1ec3d3ab-3b65-443e-b531-f61fb7ba288d">



