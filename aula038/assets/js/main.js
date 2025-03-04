const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgc = estilosBody.backgroundColor;
console.log(bgc);



for (let p of ps){

    p.style.backgroundColor = bgc;
    p.style.color = '#FFFFFF'

}