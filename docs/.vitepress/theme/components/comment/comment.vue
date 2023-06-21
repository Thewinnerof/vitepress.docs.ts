<template>
  <div v-show=" isHidden " class="vite-comments">
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
.vite-comments {
  width: 100%;
  min-height: 320px;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 16px 16px 8px;
  line-height: 24px;
  font-size: var(--vp-custom-block-font-size);
  border-color: var(--vp-c-border);

  &-header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;


    .item {
      flex: 1;
      border-bottom-style: dashed;
      border-bottom-width: 1px;
      border-bottom-color: var(--vp-c-border);

      display: flex;
      align-items: center;
      justify-content: stretch;
    }


    .item:active,
    .item:focus,
    .item:hover {
      border-bottom-color: red
    }
  }


  &-body {
    display: flex;
    flex-direction: column;


    .top {
      width: 100%;
      // height: 120px;

      .top_input {
        width: 100%;
        height: 210px;
        max-height: 320px;
        transition: all .25s ease;
        padding: 10px 0px;
      }
    }

    .bottom {
      display: flex;
      flex: 1;
      justify-content: end;


      .submit {
        width: 60px;
        height: 30px;
        font-size: var(--vp-custom-block-font-size);
        border-color: var(--vp-c-border);
        line-height: 30px;
        text-align: center;
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        cursor: pointer;
      }

    }

  }
}



@media (max-width: 750px) {

  .vite-comments {
    width: 100%;
    min-height: 320px;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 16px 16px 8px;
    line-height: 24px;
    font-size: var(--vp-custom-block-font-size);
    border-color: var(--vp-c-border);


    &-header {
      width: 100%;
      height: 160px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

  }



}
</style>