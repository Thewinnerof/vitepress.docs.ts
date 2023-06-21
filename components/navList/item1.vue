<template>
    <div class="container">
        <a :href=" item.link " class="item VPFeature1" v-for="item  in  ItemData" target="_blank">
            <div>{{ item.name }}</div>
        </a>
    </div>
</template>

<script setup>

const ItemData = [
    { name: "CSS压缩", link: "https://www.baidu.com/" },
    { name: "Js加解密" },
    { name: "Base64编码" },
    { name: "TinyPNG压缩" },
    { name: "IP/ICP备案" },
    { name: "Gif在线压缩" },
    { name: "URL加解密" },
    { name: "UTF8加解密" },
    { name: "JSON格式化" },
    { name: "JSON解码" },
]
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;


}


@media (min-width: 768px) {
    .item {
        width: calc(90% / 3);
        height: 100px;
        border-radius: 10px;
        background-color: #f6f6f7;
        margin-top: 20px;
        text-decoration: none !important;
        color: #000;
    }
}
</style>