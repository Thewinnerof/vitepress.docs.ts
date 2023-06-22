<template>
    <div>
        <el-button plain @click="open1"> Closes automatically </el-button>
    </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'

const open1 = () => {
    ElNotification({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder'),
    })
}
</script>

<style lang="scss" scoped></style>