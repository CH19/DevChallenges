const users = [
    {
      "name": "Bill Mahoney ",
      "img": "./photo1.png",
      "companyPosition": "Product owner"
    },
    {
      "name": "Saba Cabrera",
      "img": "./photo2.png",
      "companyPosition": "Art director "
    },
    {
        "name": "Shae Lee    ",
        "img": "./photo3.png",
        "companyPosition": "Tech Lead       "
      },
      {
        "name": "Skylah Luu        ",
        "img": "./photo4.png",
        "companyPosition": "UX designer"
      },
      {
        "name": "Griff Richards ",
        "img": "./photo5.png",
        "companyPosition": "Developer"
      },
      {
        "name": "Stan Jhon ",
        "img": "./photo6.png",
        "companyPosition": "Developer"
      },]
class HolaMundo extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const user = {
            name: this.getAttribute('name'),
            img: this.getAttribute('img'),
            companyPosition: this.getAttribute('company-position')
        }
        this.innerHTML = `
        <div class="user">
          <figure class="user-photo-figure" company-position="${user.companyPosition}">
            <img src="${user.img}" class="user-photo" alt="">
          </figure>
          <h5 class="user-name">${user.name}</h5>
        </div>
       `;
    }

}

window.customElements.define('hola-mundo', HolaMundo);
window.addEventListener('load', ()=>{
    users.forEach((element, index) => {
        let card = document.createElement('hola-mundo');
        card.setAttribute('name', element.name);
        card.setAttribute('img', element.img);
        card.setAttribute('company-position', element.companyPosition);
        document.querySelector('#user-cont').appendChild(card)
    });
})
window.addEventListener('resize', ()=>{
    console.log(document.body.clientWidth);
    // if(document.body.clientWidth < 600){
    //     alert('Hola mundo como estas')
    // }

})