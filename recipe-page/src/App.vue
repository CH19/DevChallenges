<script setup lang="ts">
  // import { App } from 'vue';
  import { computed } from 'vue';
  import Head from './components/header.vue';
  import Recet from './components/recet.vue';
  import Clock from './components/clock.vue';
  import Thing from './components/Recet-thign.vue' 
  import division from './components/division.vue';
  const phoneBreakPoint = 600;
  const widhtActual = computed(()=>{
    return window.innerWidth;
  });
  console.log(widhtActual.value);
</script>

<template>
<div>
  <Head ></Head>
  <Recet/>
  <div v-if="widhtActual < phoneBreakPoint">
    <Clock></Clock>
  <Thing />
  </div>
  <division v-if="widhtActual > phoneBreakPoint">
    <template v-slot:recetContent>
      <Thing/>
    </template>
    <template v-slot:clockTime>
      
      <Clock></Clock>
    </template>

  </division>
 
</div>
</template>

<style scoped>
</style>
