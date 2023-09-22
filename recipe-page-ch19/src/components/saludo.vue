<script setup lang="ts">
   import { ref, defineProps } from 'vue';
   interface Props{
    title: string
   }
   const talla = ref('M');
    const message = defineProps<Props>()
</script>


<template>
    <h1>Seleccione una talla {{ message.title }}</h1>
</template>

<style scoped>

</style>