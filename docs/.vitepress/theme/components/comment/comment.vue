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
    <div class="top_header">1621评论</div>

    <div class="Cards">
      <div class="vite-cards">
        <div class="vite-avatar" style="background-image: url(./comments/avatars/avatar1.png);"></div>
        <div class="vite-info">
          <div class="vite-info-top">
            <span class="Name">Test测试用户</span>
            <span class="circle"></span>
            <span class="Posistion">河南·郑州</span>
            <span class="circle"></span>
            <span class="OSversion">Windows 10</span>
          </div>
          <div class="vite-info-middle">
            <p class="huifu-time">6/22/2023, 12:23:42 AM</p>
            <div class="useful">
              <div class="click-dianzan">1</div>
              <div class="click-huifu">回复</div>
            </div>
          </div>
        </div>
      </div>
      <div class="vite-info-bottom">
        <span>Hello World</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
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



</script>

<style lang="scss" scoped>
@import "./comment.scss";
</style>