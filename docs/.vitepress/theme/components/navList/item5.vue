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
                <p class="describle" v-if="navItem.describle.length === 0 ? false : true">{{ navItem.describle }}</p>
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
        url: "https://chat.openai.com/chat",
        imgUrl: "https://chat.openai.com/favicon-32x32.png",
        title: "Chat GPT(官网)",
        describle: ""
    },
]

</script>

<style scoped lang="scss">
@import "./common.scss";
</style>