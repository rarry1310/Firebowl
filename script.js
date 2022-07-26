let nav = document.getElementById('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}





// SHOW/HIDE MENU

let navList = document.getElementById('navList');
let openNav = document.getElementById('openNav');
let closeNav = document.getElementById('closeNav');
let navLink = document.getElementsByClassName('navLink');
if(openNav) {
  openNav.addEventListener('click', () => {
    navList.classList.add('showMenu');
  })
}

if(closeNav) {
  closeNav.addEventListener('click', () => {
    navList.classList.remove('showMenu');
  })
}

for(i = 0; i<navLink.length;i++) {
    if(navLink) {
        navLink[i].addEventListener('click', () => {
            navList.classList.remove('showMenu');
        })
    }
}


// SHOW/HIDE CART

let showCart = document.getElementById('showCart');
let closeCart = document.getElementById('closeCart');
let openCart = document.getElementById('openCart');

if(openCart) {
    openCart.addEventListener('click', () => {
        showCart.classList.add('showCartClass');
    })
}

if(closeCart) {
    closeCart.addEventListener('click', () => {
        showCart.classList.remove('showCartClass');
    })
}


// CART PRODUCTS COUNT

// let products = document.querySelector('openCart');
// let button = document.getElementsByTagName('button');

// for(btn of button) {
//     btn.addEventListener('click', (e) => {
//         let add = Number(products.getAttribute('products-count') || 0);
//         products.setAttribute('data-count', add + 1);
//         products.classList.add('zero');
//     })
// }

// console.log(document.getElementsByTagName('button'));





//ADD ITEMS TO LOCAL STORAGE
let product = document.getElementById('product');

document.getElementById('button').addEventListener('click', () => {
    localStorage.setItem('product',
    JSON.stringify({ productName:product}));
});


