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
// let product = document.getElementById('product');

// document.getElementById('button').addEventListener('click', () => {
//     localStorage.setItem('product',
//     JSON.stringify({ productName:product}));
// });








let containerProducts = document.getElementById("containerProducts");

let shopItemsData = [
  {
    id:"qwerty",
    productImg:"./assets/Studio/Studio03.jpg",
    productName:"Firebowl1",
    productPrice:"1250$"
  },
  {
    id:"qwerty",
    productImg:"./assets/Studio/Studio07.jpg",
    productName:"Firebowl2",
    productPrice:"1250$"
  },
  {
    id:"qwerty",
    productImg:"./assets/Studio/Studio09.jpg",
    productName:"Firebowl3",
    productPrice:"180$"
  },
  {
    id:"qwerty",
    productImg:"./assets/Studio/Studio01.jpg",
    productName:"Firebowl4",
    productPrice:"850$"
  },
  {
    id:"qwerty",
    productImg:"./assets/Studio/Studio02.jpg",
    productName:"Firebowl5",
    productPrice:"150$"
  },
  {
    id:"qwerty",
    productImg:"./assets/Studio/Studio05.jpg",
    productName:"Firebowl6",
    productPrice:"1250$"
  }];

let generateShop = () => {
  return (containerProducts.innerHTML= shopItemsData.map((e) => {
    let{id, productName,productPrice,productImg} = e;
    return `
    <div class="containerProduct">
      <img src=${productImg} alt="" class="productImg">
      <h4 class="productName">
          ${productName}
      </h4>
      <span class="productPrice">
          ${productPrice}
      </span>
      <a href="" class="productAdd active" id="productAdd">
          Adauga in cos
      </a>
    </div>
    `
  }).join(""));
};

generateShop();





let cartContainer = document.getElementById('cartContainer');

letCastItemsData = [
  {
    id:"iudsifva",
    img:"./assets/Studio/Studio09.jpg",
    name:"Firebowl test 1",
    price:"1000 LEI"
  },
  {
    id:"iudsivatva",
    img:"./assets/Studio/Studio02.jpg",
    name:"Firebowl test 2",
    price:"300 LEI"
  },
  {
    id:"fvavcrc",
    img:"./assets/Studio/Studio04.jpg",
    name:"Firebowl test 13",
    price:"800 LEI"
  }
];


let generateCart = () => {
  return (containerProducts.innerHTML= shopItemsData.map((e) => {
    let{id, productName,productPrice,productImg} = e;
    return `
    <article class="cartCard">
      <div class="cartBox">
          <img src="${img}" alt="" class="cartImg">
      </div>
      <div class="cartDetails">
    <h3 class="cartTitle">${name}</h3>
    <span class="cartPrice">${price}</span>
    <div class="cartAmount">
        <div class="cartAmountContent">
            <span class="cartAmountBox">
                <i class='bx bxs-minus-square' ></i>
            </span>
            <span class="cartAmountNumber">
                1
            </span>
            <span class="cartAmountBox">
                <i class='bx bxs-plus-square' ></i>
            </span>
        </div>
        <i class='bx bxs-trash cartAmountTrash' ></i>
    </div>
  </div>
</article>
    `
  }).join(""));
};

generateCart();


{/* <article class="cartCard">
  <div class="cartBox">
      <img src="./assets/Studio/Studio09.jpg" alt="" class="cartImg">
  </div>
  <div class="cartDetails">
    <h3 class="cartTitle">Firebowl test 1</h3>
    <span class="cartPrice">1000 LEI</span>
    <div class="cartAmount">
        <div class="cartAmountContent">
            <span class="cartAmountBox">
                <i class='bx bxs-minus-square' ></i>
            </span>
            <span class="cartAmountNumber">
                1
            </span>
            <span class="cartAmountBox">
                <i class='bx bxs-plus-square' ></i>
            </span>
        </div>
        <i class='bx bxs-trash cartAmountTrash' ></i>
    </div>
  </div>
</article> */}