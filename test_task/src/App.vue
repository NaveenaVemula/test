<template>
 <div>
  <DynamicForm/>
  <ParentToChild :data="userInfo" />
  <ChildToParent @select="getChildData"/>
 <p>{{ childData }}</p> 
 <ChildToChild/>
<FilterData v-if="filterData.length" :filter-data="filterData"/>
</div>
</template>
<script setup>
import DynamicForm from './components/DynamicForm.vue';
import ParentToChild from './components/ParentToChild.vue';
import ChildToParent from './components/ChildToParent.vue';
import ChildToChild from './components/ChildToChild.vue';
import FilterData from './components/FilterData.vue';
import store from './stores/index.js'
import {onMounted, ref} from 'vue'
const userInfo={
  name:'ABC',
  location:'Hyderabad'
}
const childData=ref('')
const filterData=ref([])
onMounted(async()=>{
const response= await fetch('https://jsonplaceholder.typicode.com/posts')
filterData.value=await response.json()
store.actions.fetchUsers(filterData.value)
})
const getChildData=(data)=>{
childData.value=data
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
