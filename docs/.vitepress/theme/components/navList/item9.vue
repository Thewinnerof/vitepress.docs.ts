<template>
    <div class="m-nav-links">
        <a :href="navItem.url" class="m-nav-link" target="_blank" v-for="(navItem, index) in navData1" :key="index">
            <article class="box">
                <div class="box-header">
                    <div class="icon">
                        <img :src="navItem.imgUrl" alt="Can I use" onerror="this.parentElement.style.display='none'"
                            data-v-94d36b8f="">
                    </div>
                    <div class="title">{{ navItem.title }}</div>
                </div>
                <p class="describle">{{ navItem.describle }}</p>
            </article>
        </a>
    </div>
</template>

<script setup lang="ts">
interface DataType {
    url: String,
    imgUrl: String,
    title: String,
    describle: String,
}


const navData1: DataType[] = [
    {
        url: "https://caniuse.com",
        imgUrl: "https://caniuse.com/img/favicon-128.png",
        title: "Can I Use",
        describle: "前端API兼容性查询"
    },
    {
        url: "https://tinypng.com",
        imgUrl: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        describle: "图片在线压缩工具"
    },
    {
        url: "",
        imgUrl: "",
        title: "坑位",
        describle: "坑位"
    },
    {
        url: "",
        imgUrl: "",
        title: "坑位",
        describle: "坑位"
    },
    {
        url: "",
        imgUrl: "",
        title: "坑位",
        describle: "坑位"
    },
    {
        url: "",
        imgUrl: "",
        title: "坑位",
        describle: "坑位"
    },
    {
        url: "",
        imgUrl: "",
        title: "坑位",
        describle: "坑位"
    },
    {
        url: "",
        imgUrl: "",
        title: "坑位",
        describle: "坑位"
    },
]

</script>

<style scoped lang="scss">
@import "./common.scss";
</style>