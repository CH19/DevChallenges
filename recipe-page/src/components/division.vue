<script setup lang="ts">

</script>

<template>
    <div class="division-content-container">
       <div>
        <slot name="recetContent"></slot>
       </div>
       <div>
        <slot name="clockTime"></slot>
       </div>
    </div>

</template>

<style scoped>
.division-content-container{
display: grid;
grid-template-columns: 55rem 1fr;
}


</style>