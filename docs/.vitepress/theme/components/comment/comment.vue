<template>
  <div v-show="param3">
    <p>参数1: {{ param1 }}</p>
    <p>参数2: {{ param2 }}</p>
    <p>参数3: {{ param3 }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  param1: {
    type: String,
    default: ''
  },
  param2: {
    type: Number,
    default: ''
  },
  param3: {
    type: Boolean,
    default: true,
    require: true,
  }

})




</script>

<style lang="scss" scoped></style>