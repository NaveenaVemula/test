<template>
    <div>
<p>Child to parent communication</p>
<button @click="emits('select','Showing data from child')">Click</button>
    </div>
</template>
<script setup lang="ts">
import { provide,ref } from 'vue'
const message=ref('get data from another child')
provide('msg',message)
const emits=defineEmits(['select'])
</script>