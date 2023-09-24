    <script setup lang="ts">
    import { ref, defineComponent } from 'vue';

    const message = ref('Classic Cheesecake Recipe');
    const subtitle = ref('Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.');
    // export default defineComponent{
    //     name: 'Head'
    // }
</script>

<template>
        <div class="content-container">
    <h2>{{ message }}</h2>
    <p class="conntent">{{ subtitle }}</p>
   </div>
</template>

<style scoped>
.cosa{
    display: flex;
}
.cosa div:first-of-type{
    width: 4rem;
}
.content-container{
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
    flex-grow: 2;
    width: fit-content;
}
    .content::before{
        content: 'dff';
        width: 30px;
        height: 30px;
        background: red;
        position: absolute;
        top: 0;
        left: -20px;
    }
</style>

