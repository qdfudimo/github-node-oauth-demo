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
    <h1>授权登陆失败</h1>
    <div class="dec">失败:{{ route.query.error }}</div>
    <div class="dec">失败描述:{{ route.query.error_description }}</div>
    <div class="dec">解决方法:<a :href="route.query.error_uri" target="_blank">{{ route.query.error_uri }}</a></div>
    <h1 class="reset" @click="handelClick">重新登陆</h1>
</template>

<style scoped>
.dec {
    padding: 10px 0;
}
.reset {
    cursor: pointer;
}
.read-the-docs {
    color: #888;
}
</style>
