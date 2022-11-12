//NAV SCROLL STICKY

let nav = document.getElementById('nav');
let alertMessage = document.getElementById("alertMessage");
let cartIcon = document.getElementById("openCart")

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
if (openNav) {
    openNav.addEventListener('click', () => {
        navList.classList.add('showMenu');
    })
}

if (closeNav) {
    closeNav.addEventListener('click', () => {
        navList.classList.remove('showMenu');
    })
}

for (i = 0; i < navLink.length; i++) {
    if (navLink) {
        navLink[i].addEventListener('click', () => {
            navList.classList.remove('showMenu');
        })
    }
}


// SHOW/HIDE CART

let showCart = document.getElementById('showCart');
let closeCart = document.getElementById('closeCart');
let openCart = document.getElementById('openCart');

if (openCart) {
    openCart.addEventListener('click', () => {
        showCart.classList.toggle('showCartClass');
    })
}


if (closeCart) {
    closeCart.addEventListener('click', () => {
        showCart.classList.remove('showCartClass');
    })    
}





let shop = document.getElementById('shop');
let cart = JSON.parse(localStorage.getItem("data")) || [];

let shopItemsData = [
    {
        id: 0,
        name: "Bol negru cu pietre negre",
        price: 600,
        img: "./assets/Studio/Studio01.jpg"
    },
    {
        id: 1,
        name: "Bol gri cu pietre negre",
        price: 600,
        img: "./assets/Studio/Studio05.jpg"
    },
    {
        id: 2,
        name: "Bol verde cu pietre negre",
        price: 600,
        img: "./assets/Studio/Studio03.jpg"
    },
    {
        id: 3,
        name: "Bol negru cu pietre albe",
        price: 600,
        img: "./assets/Studio/Studio10.jpg"
    },
    {
        id: 4,
        name: "Bol gri cu pietre albe",
        price: 600,
        img: "./assets/Studio/Studio07.jpg"
    },
    {
        id: 5,
        name: "Bol verde cu pietre albe",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 6,
        name: "Bol alb cu pietre albe",
        price: 600,
        img: "./assets/Studio/Studio08.jpg"
    },
    {
        id: 7,
        name: "Doza combustibil",
        price: 10,
        img: "./assets/Studio/Studio12.jpg"
    },
    {
        id: 8,
        name: "Pachet 6 doze combustibil",
        price: 50,
        img: "./assets/Studio/Studio13.jpg"
    }
]


let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, img } = x;
        return `
    <div id=product-id-${id} class="item">
        <img src=${img} alt="" class="productImg">
        <h4 class="productName">
            ${name}
        </h4>
        <span class="productPrice">
            <p class="old-price-cart">1000 LEI</p>
            ${price} LEI
        </span>
        <button onclick ="addToCart(${id})" class="button active discover" id="button">
            Adaugă în coș
        </button>
    </div>
    `
    }).join(''));
}
generateShop();


function addToCart(id) {
    //ADD ALERT ON ADD  TO CART BUTTON
    alertMessage.classList.add("alert-fade");
    setTimeout(function () {
        alertMessage.classList.remove("alert-fade");
    }, 1500);
    

    let search = cart.find((e) => e.id === id);
    if (search === undefined) {
        cart.push({
            id: id,
            item: 1,
        });
    } else {
        search.item++;
    }
    localStorage.setItem("data", JSON.stringify(cart));
    generateCart();
    addProductsToForm();
}



//cart products

let cartContainer = document.getElementById('cartContainer');
let label = document.getElementById('label');

function createCartCard(id, item, search) {
    let newItem = `<article class="cartCard" id="cartCard">
        <div class="cartBox">
            <img src="${search.img}" alt="" class="cartImg">
        </div>
        <div class="cartDetails">
            <h6 class="product-title">${search.name}</h3>
            <span class="cartPrice">${item * search.price} LEI</span>
            <div class="cartAmount">
                <div class="cartAmountContent">
                <span class="cartAmountBox">
                    <i onclick="decrement(${id})" class='bx bxs-minus-square' ></i>
                </span>
                <span id=${id} class="cartAmountNumber" id="cartAmountNumber">
                    ${item}
                </span>
                <span class="cartAmountBox">
                    <i onclick="increment(${id})" class='bx bxs-plus-square pluss' ></i>
                </span>
                </div>
                <i onclick = "cartAmountTrash(${id})" class='bx bxs-trash cartAmountTrash'></i>
            </div>
        </div>
      </article>`;
    return newItem;
}


function generateCart() {

    let submitOrder = document.getElementById('submit-order');

    if (cart.length !== 0) {
        let article = cart.map((cartItem) => {
            let { id, item } = cartItem;
            let shopItem = shopItemsData.find((shopItem) => shopItem.id === id) || [];
            return createCartCard(id, item, shopItem);
        }).join("");
        submitOrder.style.visibility = 'visible';
        submitOrder.removeAttribute('disabled');
        cartContainer.innerHTML = article;
    } else {
        
        cartContainer.innerHTML = `<h2>Cosul este gol</h2>`;
        submitOrder.style.visibility = 'hidden';
    }
}

generateCart();

let increment = (id) => {
    let search = cart.find((x) => x.id === id);

    if (search === 1) {
        cart.push({
            id: id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    
    localStorage.setItem("data", JSON.stringify(cart));
    generateCart();
    addProductsToForm();
};

let decrement = (id) => {
    let search = cart.find((x) => x.id === id);

    if (search === undefined)
        return;
    else if (search.item === 0) {
        objArr.splice(0, 1);
    } else {
        search.item -= 1;
    }
    
    cart = cart.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(cart));
    generateCart();
    addProductsToForm();
};

let cartAmountTrash = (id) => {
    let index = cart.findIndex(x => x.id === id);
    cart.splice(index, 1);
    
    localStorage.setItem("data", JSON.stringify(cart));
    generateCart();
    addProductsToForm();
}

let TotalAmount = () => {
    if (cart.length !== 0) {
        let amount = cart
            .map((x) => {
                let { item, id } = x;
                let search = shopItemsData.find((y) => y.id === id) || [];

                return item * search.price;
            })
            .reduce((x, y) => x + y, 0);
        label.innerHTML = `
    <span class="cartPricesTotal" id="cartPricesTotal">${amount} LEI</span>
    `;
    } else return;
};

TotalAmount();



function seeMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var aboutMoreButton = document.getElementById("about-more-button");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        aboutMoreButton.innerHTML = "Mai mult"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        aboutMoreButton.innerHTML = "Mai putin"; 
        moreText.style.display = "inline";
    }
}


// SHOW/HIDE ORDER FORM

let submitOrder = document.getElementById('submit-order');
let mainBlock = document.getElementById('main-block');
let submitBack = document.getElementById('submit-back');


if(submitOrder) {
    submitOrder.addEventListener('click', () => {
        mainBlock.style.visibility = 'initial';
        cartContainer.style.visibility = 'hidden';
        submitOrder.style.visibility = 'hidden';
        cartContainer.style.position = 'absolute';
        mainBlock.style.position = 'relative';
        mainBlock.style.top = '0';
    })
}

if(submitBack) {
    submitBack.addEventListener('click', () => {
        mainBlock.style.visibility = 'hidden';
        cartContainer.style.visibility = 'initial';
        submitOrder.style.visibility = 'initial';
        cartContainer.style.position = 'relative';
        checkbox.checked = false;
        lastOrderSubmit.setAttribute("disabled", "");
    })
}

// ADD PRODUCTS TO FORM

function addProductsToForm () {
    let someProducts = localStorage.getItem('data');
    document.getElementById('cartProducts').value = someProducts;
    console.log(someProducts);
}

addProductsToForm();


let lastOrderSubmit = document.getElementById('lastOrderSubmit');
lastOrderSubmit.addEventListener('click' , () => {
    localStorage.clear();
})

// DISABLE/ENABLE TRIMITE COMANDA

let checkbox = document.getElementById('checkbox');

function validate() {
    if (checkbox.checked) {
        lastOrderSubmit.removeAttribute("disabled");
    }
    else {
        lastOrderSubmit.setAttribute("disabled", "");
    }
}




// let cartAmountNumber = document.getElementById('cartAmountNumber');

// console.log(cartAmountNumber);