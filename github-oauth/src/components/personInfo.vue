<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
console.log(route);
const handelClick = ()=>{
    router.push("/")
}
</script>

<template>
  <h1>登陆成功</h1>
  <div class="dec"><img class="img" :src="route.query.avatar_url" />用户名:{{ route.query.login }}</div>
  <div class="dec">个性签名:{{ route.query.bio }}</div>
  <div class="dec">个人主页地址:<a :href="route.query.html_url" target="_blank">{{ route.query.html_url }}</a></div>
  <h1 class="reset" @click="handelClick">重新登陆</h1>
</template>

<style scoped>

.dec {
    padding: 10px 0;
}
.reset {
  cursor: pointer;
}
.img {
  width: 100px;
  border-radius: 50%;
}
.read-the-docs {
  color: #888;
}
</style>
