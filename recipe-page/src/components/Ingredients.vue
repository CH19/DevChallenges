<script setup lang="ts" >
import { ref } from "vue";


const ingredients = [
    {
    title: '',
    steps: [
    '1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)',
      '5 Tablespoons (70g) unsalted butter, melted',
    '1/4 cup (50g) granulated sugar',        
    ]
},
{
    title: 'Cheesecake',
    steps: [
        'four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature',
    '1 cup (200g) granulated sugar',
    '1 teaspoon pure vanilla extract',
    '2 teaspoons fresh lemon juice (optional, but recommended)',
    '3 large eggs, at room temperature',
    'topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) ',
]
}
]
let cantidadProductos = ref(ingredients.length);
cantidadProductos.value = 1;

function itsCompelted(event: MouseEvent){
    const boton = event.target;
    // const blueSelected = '#A2C7E9'
    if(boton instanceof HTMLElement)     boton.classList.toggle('boton-selected')
}

</script>

<template>

    <div v-if="cantidadProductos > 0" >
        <h4>Ingredients</h4>
        <!-- <img src="../../node_modules/feather-icons/dist/icons/check" alt=""> -->
       <div id="StepsContainer" v-for="ingredient of ingredients" :key="ingredient.title">
        <h4>{{ ingredient.title }}</h4>
        <div class="steps-container" v-for="step of ingredient.steps" :key="step" >
            <div class="step" style="display: flex; flex-direction: row; align-items: center; gap: 10px;">
                <button class="boton" @click="itsCompelted"></button>
                 <p>{{ step }}</p>
                </div>
        </div>
    </div>
       </div>
       <div v-else>Error no hay ingredientes</div>
</template>

<style scoped>
    .boton{
        width: 21px; height: 21px; border: 1px solid #828282; background-color: #fff; border-radius: 30%;
}
.boton-selected{
    background-color: #A2C7E9;
    outline: 2px solid #B07D65;
}
.boton-selected::before{
    content: '✔';
    color: #B07D65;
    width: inherit;
    height: inherit;
    position: relative;
    z-index: 3;

}
</style>