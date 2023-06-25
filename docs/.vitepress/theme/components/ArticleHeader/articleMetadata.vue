<template>
    <div class="container">
        <div class="author">Anthony</div>
        <div class="time">2022/6/25</div>
        <div class="book_type">
            <div class="item">Vue3</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
$height: 30px;

.container {
    width: 100%;
    height: $height;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;


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


        .item{
            padding-left: 10px;
            padding-right: 10px;
            background-color: #ccc;
        }
    }
}
</style>