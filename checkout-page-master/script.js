const condicion = (value)=> {if(value < 3) return true};

for (let index = 0; index < 10 && condicion(index); index++) {
    console.log(index);
}

// desestructuracion ejemplo 
const user = {
    name: 'Juan',
    lastName: 'Dominguez',
    id: 34,
    password: 'fd',

    saludar(){
        console.log(`Hola mi nombre es ${this.name}`)
    }

}
class pedro extends user{
    eyesColor = ''
    constructor(eyesColor){
        super()
        this.eyesColor = eyesColor;
    }
}

const {id} = user
user.saludar();
console.log(id);
