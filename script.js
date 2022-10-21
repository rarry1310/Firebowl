//NAV SCROLL STICKY

let nav = document.getElementById('nav');
let alert = document.getElementById("alert");
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
        name: "black & black",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 1,
        name: "tropical",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 2,
        name: "Firebowl3",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 3,
        name: "black & black",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 4,
        name: "tropical",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 5,
        name: "Firebowl3",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 6,
        name: "black & black",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 7,
        name: "tropical",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
    },
    {
        id: 8,
        name: "Firebowl3",
        price: 600,
        img: "./assets/Studio/Studio11.jpg"
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
            <h1 class="old-price-cart">1000 LEI</h1>
            ${price} LEI
        </span>
        <button onclick ="addToCart(${id})" class="button active discover" id="button">
            Adauga in cos
        </button>
    </div>
    `
    }).join(''));
}
generateShop();


function addToCart(id) {
    //ADD ALERT ON ADD  TO CART BUTTON
    alert.classList.add("alert-fade");
    setTimeout(function () {
        alert.classList.remove("alert-fade");
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
}



//cart products

let cartContainer = document.getElementById('cartContainer');
let label = document.getElementById('label');

function createCartCard(id, item, search) {
    let newItem = `<article class="cartCard">
        <div class="cartBox">
            <img src="${search.img}" alt="" class="cartImg">
        </div>
        <div class="cartDetails">
            <h3 class="product-title">${search.name}</h3>
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
                    <i onclick="increment(${id})" class='bx bxs-plus-square' ></i>
                </span>
                </div>
                <i class='bx bxs-trash cartAmountTrash' ></i>
            </div>
        </div>
      </article>`;
    return newItem;
}


function generateCart() {
    if (cart.length !== 0) {
        let article = cart.map((cartItem) => {
            let { id, item } = cartItem;
            let shopItem = shopItemsData.find((shopItem) => shopItem.id === id) || [];
            return createCartCard(id, item, shopItem);
        }).join("");
        cartContainer.innerHTML = article;
    } else {
        cartContainer.innerHTML = `<h2>Cosul este gol</h2>`;
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
    update(id);
    localStorage.setItem("data", JSON.stringify(cart));
    generateCart();
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
    update(id);
    cart = cart.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(cart));
    generateCart();
};

let update = (id) => {
    let search = cart.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};

let removeItem = (id) => {
    cart = cart.filter((x) => x.id !== id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(cart));
};

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



// PRODUCTS SLIDER

let productsContainer = document.getElementById('products-container');
let buttonLeft = document.getElementById('left-arrow');
let buttonRight = document.getElementById('right-arrow');

buttonLeft.addEventListener('click', () => {
    shop.scrollLeft -= 250;
    console.log("dada")
})

buttonRight.addEventListener('click', () => {
    shop.scrollLeft += 250;
    console.log("nunu")
})






function myFunction() {
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


// let terms = document.getElementById("terms");
// let termsAndConditions = document.getElementById('termsAndConditions');

// terms.addEventListener('click', () => {
//     termsAndConditions.classList.add('display-initial');
// });