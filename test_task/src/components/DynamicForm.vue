<template>
    <div v-if="enable">
        <form @submit="enable=false">
<div v-for="(item,index) in data.blocks" :key="index">
    <div v-if="item.type==='text'">
      <label>{{ item.props.title }}</label>
       <input :type="item.type" :placeholder="item.props.placeholder">
   </div>
   <div v-if="item.type==='checkbox'">
      <label>{{ item.props.title }}</label>
       <input :type="item.type" :checked="item.props.default">
   </div>
   <div v-if="item.type==='date'">
      <label>{{ item.props.title }}</label>
       <input :type="item.type" :placeholder="item.props.placeholder">
   </div>
</div>
<input type="submit" value="Submit">
</form>
    </div>
</template>
<script setup>
import { ref} from 'vue'
import data from '../data/dynamic.json'
const enable=ref(true)
</script>