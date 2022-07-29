//NAV SCROLL STICKY

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









let containerProducts = document.getElementById("containerProducts");

let shopItemsData = [
  {
    id:"qwerty",
    img:"./assets/Studio/Studio03.jpg",
    name:"Firebowl1",
    price:"1250$"
  },
  {
    id:"dfgsdfgsdfg",
    img:"./assets/Studio/Studio07.jpg",
    name:"Firebowl2",
    price:"1250$"
  },
  {
    id:"ghadfgadfg",
    img:"./assets/Studio/Studio09.jpg",
    name:"Firebowl3",
    price:"180$"
  },
  {
    id:"fgsdfgsdfg",
    img:"./assets/Studio/Studio01.jpg",
    name:"Firebowl4",
    price:"850$"
  },
  {
    id:"sdfgsdfgdsfg",
    img:"./assets/Studio/Studio02.jpg",
    name:"Firebowl5",
    price:"150$"
  },
  {
    id:"dfhsdfhsdfh",
    img:"./assets/Studio/Studio05.jpg",
    name:"Firebowl6",
    price:"1250$"
  }];

let generateShop = () => {
  return (containerProducts.innerHTML= shopItemsData.map((e) => {
    let{id, name,price,img} = e;
    return `
    <div id= productName-id-${id} class="containerProduct">
      <img src=${img} alt="" class="productImg">
      <h4 class="productName">
          ${name}
      </h4>
      <span class="productPrice">
          ${price}
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

let cartItemsData = [
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

let cart = [];

let generateCart = () => {
  return (cartContainer.innerHTML= cartItemsData.map((x) => {
    let{id, name,price,img} = x;
    return `
    <div id=product-id-${id} class="containerProducts" id="containerProducts">
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
                    <i onclick="decrement(${id})" class='bx bxs-minus-square' ></i>
                </span>
                <span id=${id} class="cartAmountNumber">
                    0
                </span>
                <span class="cartAmountBox">
                    <i onclick="increment(${id})" class='bx bxs-plus-square' ></i>
                </span>
            </div>
            <i class='bx bxs-trash cartAmountTrash' ></i>
          </div>
        </div>
      </article>
      <div class="cartPrices">
        <span class="cartPricesItem" id="cartPricesItem"></span>
        <span class="cartPricesTotal" id="cartPricesTotal">3000 LEI</span>
      </div>
    </div>
    `
  }).join(""));
};

generateCart();



let increment = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);


  if(search === undefined) {
    cart.push({
      id: selectedItem.id,
      item:1,
    });
  }
  else {
    search.item += 1;
  };

  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);

  if(search.item === 0)
    return;  
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
};

let update = (id) => {
  let search = cart.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  console.log(search.item)
};


let calculation =() => {
  let cartTotalItems = document.getElementById("cartPricesItem");
}