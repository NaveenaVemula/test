<template>
    <div>
<p>Child to child communication</p>
<p>{{ message }}</p>
    </div>
</template>
<script setup>
import { inject } from 'vue'
const message=inject('msg')
console.log("message",message)
</script>