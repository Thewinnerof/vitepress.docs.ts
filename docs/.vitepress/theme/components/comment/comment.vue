<template>
  <!-- 评论编辑器组件 -->
  <div v-show="isHidden" class="vite-comments">
    <div class="vite-comments-header">
      <div class="item User_input">
        <input type="text" placeholder="昵称">
      </div>
      <div class="item Email_input">
        <input type="text" placeholder="邮箱">
      </div>
      <div class="item Url_input">
        <input type="text" placeholder="网址">
      </div>
    </div>
    <div class="vite-comments-body">
      <div class="top">
        <textarea name="" id="" cols="30" rows="10" placeholder="来都来了，不留点啥嘛？" class="top_input"></textarea>
      </div>
      <div class="bottom">
        <div class="submit">提交</div>
      </div>
    </div>
  </div>


  <!-- 评论消息 -->
  <div class="vite-showComments">
    <div class="top_header">{{ CommentsNumber }}条评论</div>

    <div class="Cards" v-for="(item, index) in userData" :key="index">
      <div class="vite-cards">
        <div class="vite-avatar" :style="`background-image: url(${item.avatar});`"></div>
        <div class="vite-info">
          <div class="vite-info-top">
            <span class="Name">{{ item.userName }}</span>
            <span class="circle"></span>
            <span class="Posistion">{{ item.region }}</span>
            <span class="circle"></span>
            <span class="OSversion">{{ item.OS }}</span>
          </div>
          <div class="vite-info-middle">
            <p class="huifu-time">{{ item.ReleaseTime }}</p>
            <div class="useful">
              <div class="click-dianzan">{{ item.dianzan }}</div>
              <div class="click-huifu">回复</div>
            </div>
          </div>
        </div>
      </div>
      <div class="vite-info-bottom">
        <span>{{ item.ReleaseContent }}</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps({
  Username: {
    type: String,
    default: () => '',
    require: false,
  },
  Email: {
    type: Number,
    default: () => null,
    requeire: false
  },
  isHidden: {
    type: Boolean,
    default: () => true,
    require: true,
  }

})



// 点击回复将会显示评论框
interface UserDataType {
  avatar: String,
  userName: String,
  region: String,
  OS: String,
  ReleaseTime: String,
  ReleaseContent?: String | null,
  dianzan?: Number,
}



// 构造假数据
const userData: UserDataType[] = [
  {
    avatar: "//thewinnerof.github.io/Picture-repository/1.vitepress.docs.ts/comments/avatar3.png",
    userName: "奚佳惠",
    region: "河南郑州",
    OS: "Windows 10",
    ReleaseTime: "6/22/2023, 12:23:42 AM",
    ReleaseContent: "这是第一个评论内容",
    dianzan: 3,
  },
  {
    avatar: "//thewinnerof.github.io/Picture-repository/1.vitepress.docs.ts/comments/avatar4.png",
    userName: "酆晶莹",
    region: "河南洛阳",
    OS: "Windows 11",
    ReleaseTime: "6/22/2023, 12:23:42 AM",
    ReleaseContent: "这是第二个评论内容",
    dianzan: 36,
  },
  {
    avatar: "//thewinnerof.github.io/Picture-repository/1.vitepress.docs.ts/comments/avatar5.png",
    userName: "云晨璐",
    region: "山西晋城",
    OS: "Windows 10",
    ReleaseTime: "6/22/2023, 12:23:42 AM",
    ReleaseContent: "这是第三个评论内容",
    dianzan: 21,
  },
  {
    avatar: "//thewinnerof.github.io/Picture-repository/1.vitepress.docs.ts/comments/avatar6.png",
    userName: "平雪瑶",
    region: "上海市",
    OS: "Windows 10",
    ReleaseTime: "6/22/2023, 12:23:42 AM",
    ReleaseContent: "这是第四个评论内容",
    dianzan: 36,
  },
]


const CommentsNumber = computed(() => {
  return userData.length
})
</script>

<style lang="scss" scoped>
@import "./comment.scss";
</style>