<template>
    <div>
        <el-button plain @click="`${ props.status }`">{{ props.anniu }}</el-button>

        <hr>
        <el-button plain @click=" open1 "> Success </el-button>
    </div>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'


const props:any = defineProps({

    // 按钮名称 必填
    anniu: {
        type: String,
        default: () => "Closes automatically",
        require: true,
    },

    // 四个状态 success、warning、info 和error。
    status: {
        type: null,
        default: () => "open1",
        require: true,
    }
})

console.log(props.status);

const open1 = () => {
    ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
    })
}

const open2 = () => {
    ElNotification({
        title: 'Warning',
        message: 'This is a warning message',
        type: 'warning',
    })
}

const open3 = () => {
    ElNotification({
        title: 'Info',
        message: 'This is an info message',
        type: 'info',
    })
}

const open4 = () => {
    ElNotification({
        title: 'Error',
        message: 'This is an error message',
        type: 'error',
    })
}
</script>

<style lang="scss" scoped></style>