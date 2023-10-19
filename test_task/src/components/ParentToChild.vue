<template>
    <div>
<p>Parent to child communication</p>
<p>Name: {{ data.name }}</p>
<p>Location: {{ data.location }}</p>
    </div>
</template>
<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>