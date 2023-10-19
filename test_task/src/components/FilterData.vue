<template>
<div >
    <div class="search-container">
      <input v-model="searchQuery" placeholder="Search users..." />
    </div>
   <div v-if="searchQuery" class="dropdown-container">
    <div>
      <span v-for="(item,index) in searchUsers" :key="index">{{ item.title }}</span>
    </div>
   </div>
 </div>
</template>
<script setup>
import {ref,computed} from 'vue'
import store from '../stores/index.js'
const props=defineProps({
  filterData: {
    type: Array,
    required: true
  }
})
const searchQuery=ref('')
const filterQuery=ref([])

filterQuery.value=store.getters['user/getUsers'];
filterQuery.value=filterQuery.value?.length?filterQuery.value:props.filterData
const searchUsers= computed(() => {
  const query = searchQuery.value.toLowerCase();
   return filterQuery.value.filter(user => user.title.toLowerCase().includes(query))
  });
</script>
<style scoped>
.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.dropdown-container {
  margin-top: 10px;
}
</style>