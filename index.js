// Fill in your client ID and client secret that you obtained
// while registering the application
const clientID = '**'
const clientSecret = '**'

const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const axios = require('axios');

const app = new Koa();

const main = serve(path.join(__dirname + '/public'));

const oauth = async ctx => {
  try {
    let info =ctx.request.query;
    if(info.error||info.error_description) {
      ctx.response.redirect(`http://localhost:5173/#/error?error=${info.error}&error_description=${info.error_description}&error_uri=${info.error_uri}`);
      return
    }
    const requestToken = ctx.request.query.code;
    console.log('authorization code:', requestToken);
    const tokenResponse = await axios({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token?' +
        `client_id=${clientID}&` +
        `client_secret=${clientSecret}&` +
        `code=${requestToken}`,
      headers: {
        accept: 'application/json'
      }
    });
  
    const accessToken = tokenResponse.data.access_token;
    console.log(`access token: ${accessToken}`);
  
    const result = await axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        accept: 'application/json',
        Authorization: `token ${accessToken}`
      }
    });
    console.log(result.data);
    const {login,bio,html_url,avatar_url} = result.data;
  
    ctx.response.redirect(`http://localhost:5173/#/personInfo?login=${login}&bio=${bio}&html_url=${html_url}&avatar_url=${avatar_url}`);
  } catch (error) {
    ctx.response.redirect(`http://localhost:5173`);
  }
};

app.use(main);
app.use(route.get('/oauth/redirect', oauth));

app.listen(8080);
