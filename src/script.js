"use strict"



let tabContent = document.querySelectorAll(".tabcontent");
let tabItem = document.querySelectorAll('.tabheader__item');
let tabItems = document.querySelector(".tabheader__items");



function wovContent (i = 0){
    tabContent.forEach( key => key.style.display = 'none')
    tabItem.forEach(item => item.classList.remove("tabheader__item_active"))
     tabContent[i].style.display = 'block';
    tabItem[i].classList.add("tabheader__item_active")
}

  wovContent();

tabItems.addEventListener('click',(e)=>{
    if (e.target && e.target.classList.contains('tabheader__item')){
        tabItem.forEach((key ,i)=>{
            if(e.target == key)
                wovContent(i);
              })
            }})

             
 //=========================== section-modal =============
 
let modal = document.querySelector('.modal');
let btns = document.querySelectorAll('[data-model');
let modal__close = document.querySelector(".modal__close");

function openmodel(){
     modal.classList.remove('hide')
     modal.classList.add('wov');
     document.body.style.overflow = 'hidden';

}
function hideModal(){
      modal.classList.remove('wov')
      modal.classList.add('hide');
    document.body.style.overflow = '';
  
  
//    // clearInterval(timeropenmodel);
  
}
modal__close.addEventListener('click',hideModal)

btns.forEach( btn => btn.addEventListener('click', openmodel));

modal.addEventListener('click',(e) => {
    if (e.target == modal || e.target.getAttribute("data-model") == '' ){
    hideModal();
}});

// need to fix 
 
/*function wovScrolMyModal(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openmodel()
        window.removeEventListener('scroll', wovScrolMyModal);
    };
};
window.addEventListener('scroll',wovScrolMyModal);
wovScrolMyModal()*/

//===================== class-card========================

const getrecuest = async(url)=>{
let res = await fetch(url)
if(!res.ok){
    throw new console.error(`not fetch ${url} status ${res.status}`);
}
return await res.json()
}

class Carcart{
    constructor(src, alt, title, deser, price, perendselector,...classes ){
        this.src = src,
        this.alt = alt,
        this.title = title,
        this.deser = deser,
        this.price = price,
        this.perend = document.querySelector(perendselector),
        this.classes = classes,
        this.trnsfer = 10500,
        this.changeToUSD()
    }
    changeToUSD(){
        this.price = (this.price / this.trnsfer).toFixed(2)
    }
    
    rendom(){
        let element = document.createElement('div');

        element.innerHTML = `<div class="menu__item">
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
             ${this.deser}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> $</div>
            </div>
          </div>  `;
        this.perend.append(element);
    } 
  
}
getrecuest('http://localhost:3000/menu')
.then( data => {
    data.forEach(({img, alt, title, descr, price,})=>{
        new Carcart(img, alt, title, descr, price, '.menu .container').rendom()
    })

})

/*
// new Carcart(
//     "img/tabs/3.jpg",
//     "vegy",
//     "2021 Mercedes-Benz C-Class",

//    `The 2021 Mercedes-Benz C-Class finishes in the top half of our
//     luxury small car rankings. It's powerful and upscale, but it has
//     so-so handli... `,
//     120000000,
//     ".menu .container",

// ).rendom();

// new Carcart(
//     "img/tabs/2.jpg",
//     "vegy",
//     "2021 Mercedes-Benz C-Class",

//     `The 2021 Mercedes-Benz C-Class finishes in the top half of our
//     luxury small car rankings. It's powerful and upscale, but it has
//     so-so handli... `,
//     1050000000,
//     ".menu .container",

// ).rendom();

//-------------------slider----------------------

*/
let curent = document.querySelector('#current');
let next = document.querySelector('.offer__slider-next');
let prev = document.querySelector('.offer__slider-prev');
let slide = document.querySelectorAll('.offer__slide');
let slideField = document.querySelector('.offer__slide-inner');
let wrapper = document.querySelector(".offer__slider-wrapper");
let width = window.getComputedStyle(wrapper).width;


slideField.style.width = 100 * slide.length +'%' ;
slideField.style.display = 'flex';
wrapper.style.overflow = 'hidden';
slideField.style.transition = ' 0.5s all'


let ofer = 0 ;

let slideindex = 1 ;
curent.innerHTML = `0${slideindex}`

;
next.addEventListener('click', ()=> {
    slideindex++
    if( slide.length < slideindex){
        slideindex = 1
    }
    curent.innerHTML = ` 0${slideindex}`

    if(ofer == (+width.replace(/\D/g ,'')) * (slide.length - 1)){
        ofer = 0 
    }
    else{
        ofer += +width.replace(/\D/g, '')
    }
    slideField.style.transform = `transLatex(-${ofer}px)`
})



prev.addEventListener('click', ()=> {
  slideindex--
    if( slideindex == 0){
        slideindex = slide.length
    }
    curent.innerHTML = ` 0${slideindex}`
    if(ofer == 0){
        ofer = (+width.replace(/\D/g, '')) * (slide.length - 1);
    }
    else{
        ofer -= +width.replace(/\D/g, '')
    }
    slideField.style.transform = `transLatex(-${ofer}px)`
})


//======slader=== easy style ======= 

//  let slide = document.querySelectorAll('.offer__slide');
//  let current = document.querySelector('#current');
//  let next =document.querySelector('.offer__slider-next');
//  let prev = document.querySelector('.offer__slider-prev');

// let index = 1;
// function wovslide(){
//     slide.forEach( s => s.style.display = 'none' );
//     slide[index - 1].style.display = 'block'
// }

// wovslide()

// next.addEventListener('click',()=>{
//     index++
//  if( index >slide.length)
//      index = 1 ;

//  wovslide(index)
 
//  if(index < 10) { 
//      current.innerHTML= `0${index}`
//     }
    
// else{ 
//     current.innerHTML = index
//    }
    
// })


// prev.addEventListener('click', () => {
//     index--
//     if (index == 0)
//         index = slide.length

//     wovslide()

//     if (index < 10) {
//          current.innerHTML = `0${index}`
//          }

//     else {
//          current.innerHTML = index 
//         }
// })




//--------------------------------------------------deta

 let detaline = '2022-10-30';

 function gettime(endtime){
 const totil = Date.parse(endtime)- Date.parse(new Date()),
 deys = Math.floor(totil / (1000 * 60 * 60 * 24)),
 seconds = Math.floor((totil / 1000) % 60 ),
 minutes = Math.floor(( totil / 1000 / 60) % 60),
 hours = Math.floor((totil / (1000 * 60 * 60 )) % 20);
 return{
 totil: totil,
 deys: deys,
 hours: hours,
 minutes: minutes,
 seconds: seconds
 };

 }
 function getzero(num){
 if(num >= 0 && num < 10){
     return '0'+ num
 }else{
     return num ;
 }

}

 function setClock(selector,endtime){
     const timer = document.querySelector(selector),
     deys = timer.querySelector('#days'),
 hours= timer.querySelector('#hours'),
 minutes =timer.querySelector('#minutes'),
 seconds =timer.querySelector('#seconds');
 let timeInterval = setInterval(updateClock, 1000);

 updateClock();

 function updateClock(){
     const time = gettime(endtime)
     deys.innerHTML = getzero(time.deys);
     hours.innerHTML = getzero(time.hours);
     minutes.innerHTML = getzero(time.minutes);
     seconds.innerHTML = getzero(time.seconds);
    if(time.totil <= 0){
       clearInterval(timeropenmodel)
    }
 }

 }

  setClock(".timer",detaline);

//======================form============

let forms = document.querySelectorAll('form');

let message = {
    loading: 'loading',
    success: 'murojatingiz yuborildi',
    failuer: 'error'
};
forms.forEach((item)=>{
    postget(item)
})


forms.forEach((item)=>{
    postform(item)
})


function postform(form){
    form.addEventListener('submit',(e) => {
        e.preventDefault()
   let dataform = new FormData(form)
   let object = {}
    
        dataform.forEach((value, key)=>{
            object[key] = value
        })

       
      fetch('http://localhost:3000/requests', {
          method: 'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(object),
          })
          .then(data => data.text())
        .then( data =>{
          console.log(data);
          shovThanksModal(message.success);
      })
      .catch((e)=>{
           shovThanksModal(message.failuer);
           console.log(e);
      })
      .finally(()=>{
           form.reset()
      })

    })}
       
  

       
//     function shovThanksModal(message){
//         let prevModalDialog = document.querySelector('.modal__dialog');
//         prevModalDialog.classList.add('hide')
//    openmodel()
//  let thenksModal = document.createElement('div')
//         thenksModal.classList.add('modal__dialog')
//         thenksModal.style.color = 'green'
//         thenksModal.innerHTML = `
//         <div class="modal__content">
//             <div class="modal__close" data-model >&times;</div>
//             <div class="modal__title">${message}</div>
//             </div>
//         `
//        modal.append(thenksModal)
//         setTimeout(()=>{
//             prevModalDialog.classList.add('wov')
//             prevModalDialog.classList.remove('hide')
//             thenksModal.remove()
//             hideModal()
//         },3000)
//         }   

