<script setup lang="ts">
// type posibleSizes =  'XS' | 'S' | 'M' |'L' |'Xl' | 'XXL'
import { defineProps } from 'vue/dist/vue.js';
import {defineEmits} from 'vue'
const posibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'X'];

// props 
const props = defineProps<{
    selectedSize: string
}>();
const emit = defineEmits<{
    sizeActual: [sizei: string]
}>()
</script>

<template>
    <div id="sizeContainer">
        <button @click="emit('sizeActual', size)" :class="props.selectedSize == size ? 'active' : ''" v-for="(size, index) of posibleSizes" :key="index">{{ size  }}</button>    

    </div>
</template>

<style scoped>
    #sizeContainer{
        display: flex;
        justify-content: space-between;
        max-width: 80vw;
        gap: 1rem;
    }
    .active{
        background: #000;
        color: #fff;    
         transition: all .3s ease-out;
    }
</style>