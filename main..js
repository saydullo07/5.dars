import data from "./data.js";

data.forEach((malumod)=>{
    console.log(malumod)
    const {
        id,
        brand,
        category,
        description,
        discountPercentage,
        images,
        price,
        rating,
        stock,
        thumbnail,
        title,
    }=malumod;
const div1 =document.createElement('div')
const div2 =document.createElement('div')
const div3 =document.createElement('div')
const img =document.createElement('img')
const p =document.createElement('p')
const h1 =document.createElement('h2')
const h2 =document.createElement('h2')
const h3 =document.createElement('h2')
const h4 =document.createElement('h2')
const h5 =document.createElement('h2')
const h6 =document.createElement('h2')
const h7 =document.createElement('h2')
const button =document.createElement('button')
let div0 =document.querySelector('#div0')
button.textContent='harit'
p.textContent=description;
h1.textContent=brand;
h2.textContent=category;
h3.textContent=rating;
h4.textContent=title;
h5.textContent=stock;
h6.textContent=price;
h7.textContent=discountPercentage;
img.src=thumbnail;
div1.appendChild(img);
div2.appendChild(p);
div3.appendChild(h1)
div3.appendChild(h2)
div3.appendChild(h3)
div3.appendChild(h4)
div3.appendChild(h5)
div3.appendChild(h6)
div3.appendChild(h7)
div3.appendChild(button)
div2.appendChild(div3);
div1.appendChild(div2);
div0.appendChild(div1);
div0.appendChild(div1);
div3.classList='div3';
div2.classList='div2';
div1.classList='div1';
console.log(div3)
})