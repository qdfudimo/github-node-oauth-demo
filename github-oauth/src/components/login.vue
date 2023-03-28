
<template>
    <div class="login" @click="handelClick">
      <img src="/github.svg" class="logo" alt="Vite logo" />
    </div>
    <div class="test">github第三方登录</div>
  </template>
  
  <script setup>
  const handelClick = ()=>{
    const client_id = '**';
    const authorize_uri = 'https://github.com/login/oauth/authorize';
    const redirect_uri = 'http://localhost:8080/oauth/redirect';
    location.href =  `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
  }
  </script>
  
  <style scoped>
  .login {
    background-color: black;
    width: 60px;
    height: 60px;
    padding: 0;
  }
  .test {
    padding-top: 10px;
    color: #3e3e3e;
  }
  .logo {
    width: 60px;
    height: 60px;
    will-change: filter;
    transition: filter 300ms;
    cursor: pointer;
  }
  
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  