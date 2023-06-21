<template>
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
    <div class="vite-comments-body"></div>
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
    height: 50px;
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
}
</style>