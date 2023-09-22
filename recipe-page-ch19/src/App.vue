<script setup lang="ts">
import {ref} from 'vue';
import saludo from './components/saludo.vue';
import sizeSelector from './components/size-selector.vue';
import HelloWorld from './components/HelloWorld.vue';

const actualSize = ref('L');
</script>

<template>
  <saludo :title="actualSize"></saludo>
  <size-selector @size-actual="size => actualSize = size" :selected-size="actualSize"></size-selector>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
