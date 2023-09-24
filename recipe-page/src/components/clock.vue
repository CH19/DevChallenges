<script setup lang="ts">

const steps = [{
   message: 'Prep TIme',
   time: '45 mins',
},{
   message: 'Cook Time ',
   time: '1 hour',
},{
   message: 'Total Time',
   time: '12,5 hours'
}]
</script>
<template>
   <div class="clock">
      <div class="restaurant-container" style="display: flex; margin: 10px 15px; height: fit-content;">
      <img src="../assets/restaurant.svg" style="filter: invert(65%) sepia(62%) saturate(572%) hue-rotate(334deg) brightness(98%) contrast(93%);" alt="">
      <div style="font-size: 10px;">
         <p>Yields</p>
         <p style="color: orange;">Servings</p>
      </div>
   </div>
<div class="clock-container" >
      <div v-for="step of steps" :key="step.message" style="display: flex; flex-direction: row;">
         <figure>

<img  src="../../node_modules/feather-icons/dist/icons/clock.svg" alt="">
</figure>
    <div class="message" style="display: flex; flex-direction: column; height: fit-content;">
        <p style="height: fit-content;">        {{ step.message}}</p>
        <p style="height: fit-content;">        {{ step.time }}</p>
    </div>
      </div>
   </div>
   </div>
</template>

<style scoped>
.clock-container{
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-size: 10px;
    display: flex;  
    /* background: red; */
    width: fit-content;
    justify-content: space-between;
    align-items: center;
    width: 90%;

 }
 .clock-container div:first-of-type{
   display: flex;
   flex-direction: row;
 }
.message{
   display: flex;
   flex-direction: column;
   height: 150px;
}
 .clock-container > div p{
    padding: 0;
    margin: 0;
 }
 .clock-container figure{
    padding: 0;
    width: 10px;
    margin: 0 1rem;
    display: grid;
 }
 .clock-container figure img{
   width: 20px;
 }
 .clock-container > div p:first-of-type{
    color: #BDBDBD;
   font-weight: 300;
}
@media screen and (min-width: 600px) {
   .clock-container{
      flex-direction: column;
      align-items: start;
   }
   .clock{
      /* background-color: red; */
      margin-right: 2rem;
      border-radius: 5px;
      box-shadow: 0px 0px 5px 1px #000;
   }
}
</style>