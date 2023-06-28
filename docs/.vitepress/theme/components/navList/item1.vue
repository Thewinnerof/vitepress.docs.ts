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
.m-nav-links {
    --m-nav-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-row-gap: var(--m-nav-gap);
    grid-column-gap: var(--m-nav-gap);
    grid-auto-flow: row dense;
    justify-content: center;
    margin-top: var(--m-nav-gap);

    p {
        margin: 0;
    }

    .m-nav-link {
        --m-nav-icon-box-size: 40px;
        --m-nav-icon-size: 24px;
        --m-nav-box-gap: 12px;
        display: block;
        border: 1px solid var(--vp-c-bg-soft);
        border-radius: 8px;
        height: 100%;
        background-color: var(--vp-c-bg-soft);
        transition: all .25s;


        .box {
            display: flex;
            flex-direction: column;
            padding: var(--m-nav-box-gap);
            height: 100%;
            color: var(--vp-c-text-1);


            &-header {
                display: flex;
                align-items: center;


                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: calc(var(--m-nav-box-gap) - 2px);
                    border-radius: 6px;
                    width: var(--m-nav-icon-box-size);
                    height: var(--m-nav-icon-box-size);
                    font-size: var(--m-nav-icon-size);
                    background-color: var(--vp-c-bg-soft-down);
                    transition: background-color .25s;

                    img {
                        border-radius: 4px;
                        width: var(--m-nav-icon-size);
                    }
                }

                .title {
                    overflow: hidden;
                    flex-grow: 1;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    line-height: var(--m-nav-icon-box-size);
                    font-size: 14px;
                    font-weight: 600;
                }
            }


            .describle {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                flex-grow: 1;
                margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
                line-height: 1.5;
                font-size: 12px;
                color: var(--vp-c-text-2);
            }
        }
    }

    .m-nav-link:hover {
        box-shadow: var(--vp-shadow-2);
        border-color: var(--vp-c-brand);
        text-decoration: initial;
        background-color: var(--vp-c-bg-soft-up);
    }
}


@media (min-width: 500px) {
    .m-nav-links[data-v-2bcff0a9] {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
    }
}

@media (min-width: 640px) {
    .m-nav-links[data-v-2bcff0a9] {
        grid-template-columns: repeat(auto-fill, minmax(155px, 1fr))
    }
}

@media (min-width: 768px) {
    .m-nav-links[data-v-2bcff0a9] {
        grid-template-columns: repeat(auto-fill, minmax(175px, 1fr))
    }
}

@media (min-width: 960px) {
    .m-nav-links[data-v-2bcff0a9] {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
    }
}

@media (min-width: 1440px) {
    .m-nav-links[data-v-2bcff0a9] {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))
    }
}

@media (min-width: 960px) {
    .m-nav-links[data-v-2bcff0a9] {
        --m-nav-gap: 20px
    }
}
</style>