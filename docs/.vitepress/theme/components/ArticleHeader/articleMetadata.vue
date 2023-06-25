<template>
    <div class="container">
        <div class="author">Anthony</div>
        <div class="time">{{ date }}</div>
        <div class="book_type">
            <div class="item" v-for="itemName in ['vue3', 'typescript', 'python']">{{ itemName }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as dayjs from 'dayjs'

const date = dayjs().format('YYYY/MM/DD-HH/MM/ss')



// 透传组件
interface metaHead {
    username: String,
    typeList?: []
}

// 数据
const props: metaHead = defineProps({
    username: {
        type: String,
        default: () => "Anthony"
    },

    typeList: {
        type: []
    }

})
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
        background-image: url(../../../../public/meta_head/myself.png);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position-x: 0px;
        background-position-y: center;
    }



    .time {
        margin-left: 40px;
        min-width: 90px;
        padding-left: 30px;
        height: $height;
        line-height: $height;
        background-image: url(../../../../public/meta_head/clock.png);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position-x: 0px;
        background-position-y: center;
    }

    .book_type {
        margin-left: 40px;
        min-width: 90px;
        padding-left: 30px;
        height: $height;
        line-height: $height;
        background-image: url(../../../../public/meta_head/book.png);
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
            padding-left: 6px;
            padding-right: 6px;
            margin-left: 10px;
        }
    }
}
</style>