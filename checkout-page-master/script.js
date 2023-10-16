// const condicion = (value)=> {if(value < 3) return true};

// for (let index = 0; index < 10 && condicion(index); index++) {
//     console.log(index);
// }

// // desestructuracion ejemplo 
// const user = {
//     name: 'Juan',
//     lastName: 'Dominguez',
//     id: 34,
//     password: 'fd',

//     saludar(){
//         console.log(`Hola mi nombre es ${this.name}`)
//     }

// }
// // class pedro extends user{
// //     name = 'fsdf';
// //     eyesColor = '';
// //     constructor(eyesColor){
// //         super()
// //         this.eyesColor = eyesColor;
// //     }
// // }

// const {id} = user
// user.saludar();
// console.log(id);
// // const ped = new pedro('red');

// Generar un json a partir de object literal 
const usuarios = []
function newUser(user, id, score){
    return {
        user,
        id,
        score
    }
}

// for (let index = 0; index < 10; index++) {
//     usuarios.push(newUser(`usuario${index}`, index, Math.floor(Math.random() * 30)))
// }
// console.log(usuarios);


// // promesas en es6 
// const anotherFunction = (num) => {
//     return new Promise((resolve, reject) =>{
//         if(num > 5){
//             resolve('We get it ')
//         }else{
//             reject('sorry that isnt posible')
//         }
//     } )
// }

// anotherFunction(3).then(reps => console.log(reps))
// .catch(error => console.log(error));

const users = []
async function  mostrarUsuarios(){
    const userGen = new Promise((resolve, reject) => {
        for (let index = 0; index < 10; index++) {
            users.push(newUser(`user${index}`, index, Math.floor(Math.random() * 80))            )
        }
        if(users.length > 1){
            resolve(users)
        }else{
            reject('No tenemos usuarios');
        }
    })
    return userGen
}
mostrarUsuarios()
// mostrarUsuarios().then(resp => console.log(resp));
console.log(users[5]);