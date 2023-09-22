<script setup lang="ts">
import { ref } from 'vue';
const message = ref('Hola');
const time = ref('30 mins');
</script>
<template>
   <div class="clock-container">
    <figure>

<img src="../../node_modules/feather-icons/dist/icons/clock.svg" alt="">
</figure>
    <div>
        <p>        {{ message }}</p>
        <p>        {{ time }}</p>
    </div>
   </div>
</template>

<style scoped>
 .clock-container{
    display: flex;  
    background: red;
    width: fit-content;
    justify-content: center;
    align-items: center;
 }
 .clock-container > div p{
    padding: 0;
    margin: 0;
 }
 .clock-container figure{
    padding: 0;
    margin: 0 1rem;
 }
 .clock-container > div p:first-of-type{
    color: #BDBDBD;
    font-weight: lighter;
 }
</style>