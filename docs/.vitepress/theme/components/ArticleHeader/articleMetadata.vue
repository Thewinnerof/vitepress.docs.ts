<template>
    <div class="container">
        <div class="author">{{ author }}</div>
        <div class="time">{{ date }}</div>
        <div class="book_type">
            <div class="item" v-for="itemName in tags">{{ itemName }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { reactive, toRefs } from 'vue'

const dic = ""
// 初始化文章元数据
const { frontmatter } = useData()
const data = reactive({
    author: frontmatter?.value?.username || 'Anthony',
    tags: frontmatter?.value?.tag?.split(',') || dic.split(','),
    date: frontmatter?.value?.createtime || new Date()
})

const { author, tags, date } = toRefs(data)
</script>

<style lang="scss" scoped>
$height: 25px;

.container {
    width: 100%;
    height: $height;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    


    .author {
        min-width: 60px;
        padding-left: 30px;
        height: $height;
        line-height: $height;
        background-image: url(//thewinnerof.github.io/Picture-repository/1.vitepress.docs.ts/header/myself.png);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position-x: 0px;
        background-position-y: center;
    }



    .time {
        margin-left: $height;
        min-width: 90px;
        padding-left: 30px;
        height: $height;
        line-height: $height;
        background-image: url(//thewinnerof.github.io/Picture-repository/1.vitepress.docs.ts/header/clock.png);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position-x: 0px;
        background-position-y: center;
        overflow: hidden;
    }

    .book_type {
        margin-left: $height;
        min-width: 90px;
        padding-left: 30px;
        height: $height;
        line-height: $height;
        background-image: url(//thewinnerof.github.io/Picture-repository/1.vitepress.docs.ts/header/book.png);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position-x: 0px;
        background-position-y: center;
        height: inherit;
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: start;

        .item {
            // padding: 10px;
            background-color: #34d399;
            color: #fff;
            height: inherit;
            text-align: center;
            line-height: $height;
            // padding-left: 6px;
            // padding-right: 6px;
            margin-left: 10px;
        }
    }
}
</style>