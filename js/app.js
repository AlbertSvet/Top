window.addEventListener('DOMContentLoaded', () => {

   new Swiper('.best__swiper', {
        speed: 400,
        
        loop:true,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        breakpoints: {
            320:{
              slidesPerView: 1,
              spaceBetween: 20
            },
          
           
            768: {
              slidesPerView: 2,
              spaceBetween: 33
              
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 33
            
            },
            
            1130: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
       
        
      });  
   new Swiper('.catalog__slider', {
    navigation: {
      nextEl: '.catalog__left',
      prevEl: '.catalog__right',
  },
        speed: 400,
        loop:true,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        breakpoints: {
            320:{
              slidesPerView: 1,
              spaceBetween: 20
            },
            600:{
              slidesPerView: 2,
              spaceBetween: 20
            },
            
            
            768: {
              slidesPerView: 2,
              spaceBetween: 33
              
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 33
            
            },
            
            1130: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
       
        
      });  
   new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.catalog__left',
      prevEl: '.catalog__right',
  },
        speed: 400,
        loop:true,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        breakpoints: {
            320:{
              slidesPerView: 1,
              spaceBetween: 20
            },
          
           
            768: {
              slidesPerView: 2,
              spaceBetween: 33
              
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 33
            
            },
            
            1130: {
              slidesPerView: 2,
              spaceBetween: 24
            }
          }
       
        
      });  
  

     



//==================================

const menu = document.querySelector('.header__menu ');
const menuBody = document.querySelector('.menu__body');
const iconBtn = document.querySelector('.menu__icon');
const childBtn = document.querySelector('.header__itemBlockRight');
const bodyBurg = document.querySelector('body');
const media = window.matchMedia('(max-width: 992px)');

function openMod() {
  iconBtn.classList.add('_active');
  menu.classList.add('_active');
  menuBody.classList.add('_active');
  bodyBurg.classList.add('lock');
  childBtn.insertBefore(iconBtn, childBtn.lastChild);
  menu.addEventListener('click', closeMenuOnClick);
}

function closeMod() {
  iconBtn.classList.remove('_active');
  menu.classList.remove('_active');
  menuBody.classList.remove('_active');
  bodyBurg.classList.remove('lock');
  
  menu.removeEventListener('click', closeMenuOnClick);
}

function closeMenuOnClick(e) {
  if (e.target === menu) {
    closeMod();
  }
}

function checkMedia(media) {
  if (media.matches) {
    iconBtn.addEventListener('click', toggleMenu);
  } else {
    iconBtn.removeEventListener('click', toggleMenu);
    closeMod();
  }
}

function toggleMenu() {
  if (menu.classList.contains('_active')) {
    closeMod();
  } else {
    openMod();
  }
}

window.addEventListener('resize', function() {
  checkMedia(media);
});

// Проверяем размер окна при загрузке страницы
checkMedia(media);
 //=========================================

 const tabsButton = document.querySelectorAll('.best__li'),
      tabsContent = document.querySelectorAll('.best__swiper '),
      tabsParent = document.querySelector('.best__list');
     

    function closeTab () {
      tabsContent.forEach(item  =>{
        item.classList.add('hide');
        item.classList.remove('show', 'fide');
      })
      tabsButton.forEach(tabs =>{
        tabs.classList.remove('active');
      })
    }    

    function openTab (i) {
      tabsContent[i].classList.add('show', 'fide');
      tabsContent[i].classList.remove('hide');
      tabsButton[i].classList.add('active');
    }
   
  closeTab();
  openTab(1);
    tabsParent.addEventListener('click', (e) =>{
      const target = e.target;
      if(target.classList.contains('best__li')){
        tabsButton.forEach ((item,i) =>{
          if(target == item){
            closeTab();
            openTab(i);
          }
        })
      }
    })



    //===================
    const tabsParents = document.querySelector('.reviews__list'),
          tabsTrigger = document.querySelectorAll('.reviews__item'),
          tabsContents = document.querySelectorAll('.reviews__slider ');

  function closeTabs () {
    tabsContents.forEach( item =>{
      item.classList.remove('show', 'fide');
      item.classList.add('hide');
    })
    tabsTrigger.forEach(items=> {
      items.classList.remove('active');
      
    })

  }

function openTabs (i) {
  
  tabsContents[i].classList.add('show','fide');
  tabsTrigger[i].classList.add('active');
  tabsContents[i].classList.remove('hide');
  
}
closeTabs();
openTabs(0);

tabsParents.addEventListener('click', (e) =>{
  const target = e.target;
  if(target.classList.contains('reviews__item')){
      tabsTrigger.forEach((item, i) =>{
        if(target == item) {
          closeTabs();
          openTabs(i);
        }
      })
  }
})

//==================

var myHeaders = new Headers();
myHeaders.append("apikey", "UBSaZ0Dk6yhGOaHLhUcXfVqCcSJMmM4h");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=RUB&base=USD", requestOptions)
  .then((response) => {
    return response.json();
  })
  .then ((dataUSD)=>{
    return fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=RUB&base=EUR", requestOptions)
    .then((response) => response.json())
    .then((dataEUR) => {
      // Доступ к данным RUB для USD
      const rateRUB_USD = dataUSD.rates.RUB;
      // Доступ к данным RUB для EUR
      const rateRUB_EUR = dataEUR.rates.RUB;
      let textColor = 'blue';
      const changePercentage = ((rateRUB_EUR - rateRUB_USD) / rateRUB_USD) * 100;
      
      if(changePercentage > 0) {
        textColor = 'green';
      } else if (changePercentage < 0) {
        textColor = 'red';
      } 

      const main = document.querySelector('.header__blockItemJs');
  const html = `
    <div class="apiBlock">
      <img src="img/Flag USA.svg" alt="">
      <p class="apiBlock__item" style="color: ${textColor}">
      ${parseFloat(rateRUB_USD.toFixed(4))}</p>
      <img src="img/Flag USA (1).svg" alt="">
      <p class="apiBlock__item" style="color: ${textColor}">
      ${parseFloat(rateRUB_EUR.toFixed(4))}</p>
    </div>
  `;
  main.insertAdjacentHTML('afterbegin', html);
  })
  
  .catch(error => console.log('error', error));
  
})


  
})

// =============================================================================================================//


// =============================================================================================================//



// =============================================================================================================//
// Анимация при скролле
// window.addEventListener('load', ()=>{


//     const animItems = document.querySelectorAll('._anim-items');

//     if (animItems.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;

//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     if (!animItem.classList.contains('_anim-no-hide')) {
//                         animItem.classList.remove('_active');
//                     }
//                 }
//             }
//         }
//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {
//                 top: rect.top + scrollTop, left: rect.left + scrollLeft
//             }
//         }
//     }

//     if (animItems.length > 0) {
//         setTimeout(() => {
//                 animOnScroll();
//             }, 500);
//     }
// })

// =============================================================================================================//


