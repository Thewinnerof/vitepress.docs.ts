<template>
  <div id="vcomments">

  </div>
</template>

<script setup lang="ts">
import Valine from 'valine'
import { onMounted } from 'vue'

new Valine({
  el: '#vcomments',
  appId: 'sIUyEjy5xskFlPSZwsd323i6-gzGzoHsz',// your appId
  appKey: '4KuCDAhRy47qCv3lNQGYrUtD', // your appKey
  // other config
})
</script>

<style lang="scss" scoped></style>