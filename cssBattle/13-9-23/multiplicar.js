// multiplicar un numero con el signo de la suma 
console.log(5 + multiplicar(4,5));

function multiplicar(num, toMulte){
    let total = 0;
    for (let index = 0; index < toMulte; index++) {
            total += num;
    }
    return total
}

const arr = [2,4,5,45,3456,7,4,2,67,56,56,1,57,7567]
console.log(Math.max(...arr));