## Github授权第三方登录

Github注册Register a new OAuth application地址 : https://github.com/settings/applications/new .

![image](https://github.com/qdfudimo/MarkdownImage/blob/master/register.png)

点击注册应用后，生成一个Client secrets

![image](https://github.com/qdfudimo/MarkdownImage/blob/master/github-success.jpg)


`/oauth/redirect`成功或失败的URL

- "callback URL" field, enter "http://localhost:8080/oauth/redirect ".

授权接口文档地址 https://docs.github.com/zh/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow

```bash
$ git clone https://github.com/qdfudimo/github-node-oauth-demo.git
$ cd github-node-oauth-demo
```

```bash
$ npm install
```

## 启动服务端

```bash
$ node index.js
```

```js
const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";
```

- `index.js`: 将 `clientID` 和 `clientSecret` 替换成自己的github秘钥和ID.
服务端默认端口 http://localhost:8080 

- 页面启动

```bash
$ cd ./github-oauth
$ pnpm i
$ pnpm dev
```
三个界面 登录界面 失败界面 成功界面

初始界面

![image](https://github.com/qdfudimo/MarkdownImage/blob/master/github.png)

授权界面

![image](https://github.com/qdfudimo/MarkdownImage/blob/master/oauth.jpg)

授权成功

```js
//之类信息
{
  login: 'qdfudimo',
  avatar_url: 'https://avatars.githubusercontent.com/u/50398817?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/qdfudimo',
  html_url: 'https://github.com/qdfudimo',
  type: 'User',
  site_admin: false,
  name: null,
  company: null,
  blog: '',
  location: '南京',
  email: null,
  hireable: null,
  bio: '往事如风，我自飞扬',
}

```