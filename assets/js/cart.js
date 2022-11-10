// Carrito v1
// #1 BASE DE DATOS
const products = [
  {
    id: 1,
    name: ' VICTORY ONE ST',
    price: 802.00,
    image: 'assets/img/img2.png',
    category: 'urban',
    quantity: 3
  },
  {
    id: 2,
    name: 'BOMBER 125 MIX',
    price: 1002.54,
    image: 'assets/img/img3.png',
    category: 'urban',
    quantity: 2
  },
  {
    id: 3,
    name: 'NITRO 125 2022',
    price: 1203.09,
    image: 'assets/img/img4.png',
    category: 'urban',
    quantity: 1
  },
  {
    id: 4,
    name: 'BOMBER 150',
    price: 1403.64,
    image: 'assets/img/img5.png',
    category: 'urban',
    quantity: 3
  },
  {
    id: 5,
    name: 'SWITCH 150 TRAIL',
    price: 1564.08,
    image: 'assets/img/img6.png',
    category: 'sporty',
    quantity: 5
  },
  {
    id: 6,
    name: 'BENELLI TNT 150I',
    price: 1903.21,
    image: 'assets/img/img7.png',
    category: 'sporty',
    quantity: 3
  },
  {
    id: 7,
    name: 'BENELLI TNT 135',  
    price: 1905.01,
    image: 'assets/img/img8.png',
    category: 'sporty',
    quantity: 6
  },
  {
    id: 8,
    name: 'VENOM 400 2022',
    price: 3409.13,
    image: 'assets/img/img9.png',
    category: 'sporty',
    quantity: 7
  },
  {
    id: 9,
    name: 'ZONTES 350 R1',
    price: 5212.27,
    image: 'assets/img/img10.png',
    category: 'sporty',
    quantity: 4
  },
  {
    id: 10,
    name: 'NINJA 400',
    price: 6616.11,
    image: 'assets/img/img11.png',
    category: 'sporty',
    quantity: 3
  },
  {
    id: 11,
    name: 'BENELLI 180S',
    price: 2404.58,
    image: 'assets/img/img12.png',
    category: 'sporty',
    quantity: 2
  },
  {
    id: 12,
    name: 'MRX 125',
    price: 1554.05,
    image: 'assets/img/img13.png',
    category: 'terrain',
    quantity: 8
  },
  {
    id: 13,
    name: 'VICTORY MRX 125 PRO',
    price: 1614.22,
    image: 'assets/img/img14.png',
    category: 'terrain',
    quantity: 3
  },
  {
    id: 14,
    name: 'MRX 150',
    price: 1784.68,
    image: 'assets/img/img15.png',
    category: 'terrain',
    quantity: 6
  },
  {
    id: 15,
    name: 'KAWASAKI KX 250',
    price: 9423.79,
    image: 'assets/img/img16.png',
    category: 'terrain',
    quantity: 5
  },
  {
    id: 16,
    name: 'BENELLI LEONCINO 500 TRAIL',
    price: 6816.66,
    image: 'assets/img/img17.png',
    category: 'terrain',
    quantity: 9
  },
  {
    id: 17,
    name: 'KLX150 J',
    price: 3006.23,
    image: 'assets/img/img18.png',
    category: 'terrain',
    quantity: 3
  },
  {
    id: 18,
    name: 'KYMCO TWIST',
    price: 1443.75,
    image: 'assets/img/img19.png',
    category: 'urban',
    quantity: 8
  },
  {
    id: 19,
    name: 'LIFE MULTICOLOR',
    price: 1403.64,
    image: 'assets/img/img20.png',
    category: 'urban',
    quantity: 4
  },
  {
    id: 20,
    name: 'BOLD PRO',
    price: 1664.36,
    image: 'assets/img/img21.png',
    category: 'urban',
    quantity: 12
  },
  {
    id: 21,
    name: 'SUPER 8',
    price: 2404.58,
    image: 'assets/img/img22.png',
    category: 'urban',
    quantity: 5
  },
  {
    id: 22,
    name: 'ZONTES 310 M',
    price: 5011.72,
    image: 'assets/img/img23.png',
    category: 'urban',
    quantity: 7
  },
  {
    id: 23,
    name: 'AGILITY ALL NEW',
    price: 2153.90,
    image: 'assets/img/img24.png',
    category: 'urban',
    quantity: 3
  },
  {
    id: 24,
    name: 'BENELLI TRK 251',
    price: 4209.52,
    image: 'assets/img/img25.png',
    category: 'sporty',
    quantity: 2
  },
  {
    id: 25,
    name: 'BENELLI TRK 251 ARENA',
    price: 4410.07,
    image: 'assets/img/img26.png',
    category: 'sporty',
    quantity: 3
  },
  {
    id: 26,
    name: 'ZONTES 350 GK',
    price: 5412.81,
    image: 'assets/img/img27.png',
    category: 'sporty',
    quantity: 6
  },
  {
    id: 27,
    name: 'ZONTES 350 T2',
    price: 5813.91,
    image: 'assets/img/img28.png',
    category: 'sporty',
    quantity: 8
  },
  {
    id: 28,
    name: 'BENELLI LEONCINO 500',
    price: 6014.46,
    image: 'assets/img/img29.png',
    category: 'sporty',
    quantity: 2
  },
  {
    id: 29,
    name: 'BENELLI 502C',
    price: 7017.21,
    image: 'assets/img/img30.png',
    category: 'sporty',
    quantity: 4
  },
  {
    id: 30,
    name: 'Z1000',
    price: 12030.93,
    image: 'assets/img/img31.png',
    category: 'sporty',
    quantity: 6
  },
  {
    id: 31,
    name: 'VERSYS 1000 S',
    price: 15039.16,
    image: 'assets/img/img32.png',
    category: 'sporty',
    quantity: 1
  },
  {
    id: 32  ,
    name: 'BENELLI TNT 600I',
    price: 8822.15,
    image: 'assets/img/img33.png',
    category: 'sporty',
    quantity: 4
  },
  {
    id: 33,
    name: 'BENELLI 180S PRO X',
    price: 2504.86,
    image: 'assets/img/img.png',
    category: 'sporty',
    quantity: 12
  }
]

//const products = window.localStorage.getItem('productsDB') ? JSON.parse(window.localStorage.getItem('productsDB')) : db

// #2 Pintar los productos en el DOM
const productContainer = document.getElementById('products__content')

function printProducts() {
  let html = ''

  for (let product of products) { 
    html += `
    <article class="products__card ${product.category}">
    <div class="products__shape">
      <img src="${product.image}" alt="${product.name}" class="products__img">
    </div>

    <div class="products__data">
      <h2 class="products__name">${product.name}</h2>
      <div class="">
        <h3 class="products__price">$ ${product.price}</h3>
        <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
      </div>
      <button type="button" class="button products__button addToCart" data-id="${product.id}">
        <i class="bx bx-plus"></i>
      </button>
    </div>
  </article>`
  }

  productContainer.innerHTML = html
  window.localStorage.setItem('productsDB', JSON.stringify(products))
}

printProducts()

// #3 Carrito
let cart = window.localStorage.getItem('cartDB') ? JSON.parse(window.localStorage.getItem('cartDB')) : []

const cartContainer = document.getElementById('cart__container')
const cartCount = document.getElementById('cart-count')
const itemsCount = document.getElementById('items-count')
const cartTotal = document.getElementById('cart-total')

function printCart() {
  let html = ''
  for (let article of cart) {
    const product = products.find(p => p.id === article.id)

    html += `
    <article class="cart__card">
    <div class="cart__box">
      <img src="${product.image}" alt="${product.name}" class="cart__img">
    </div>

    <div class="cart__details">
      <h3 class="cart__title">${product.name} <span class="cart__price">$ ${product.price}</span></h3>

      <div class="cart__amount">
        <div class="cart__amount-content">
          <span class="cart__amount-box removeToCart" data-id="${product.id}">
            <i class="bx bx-minus"></i>
          </span>

          <span class="cart__amount-number">${article.qty}</span>

          <span class="cart__amount-box addToCart" data-id="${product.id}">
            <i class="bx bx-plus"></i>
          </span>
        </div>

        <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${product.id}"></i>
      </div>

      <span class="cart__subtotal">
        <span class="cart__stock">Quedan ${product.quantity - article.qty} unidades</span>
        <span class="cart__subtotal-price">${product.price * article.qty}</span>
      </span>
    </div>
  </article>`
  }

  cartContainer.innerHTML = html
  cartCount.innerHTML = totalArticles()
  itemsCount.innerHTML = totalArticles()
  cartTotal.innerHTML = numberToCurrency(totalAmount())
  checkButtons()

  window.localStorage.setItem('cartDB', JSON.stringify(cart))
}

// #4 agregar al carrito
function addToCart(id, qty = 1) {
  const product = products.find(p => p.id === id)

  if (product && product.quantity > 0) {
    const article = cart.find(a => a.id === id)

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      cart.push({ id, qty })
    }
  } else {
    window.alert('Producto agotado')
  }
  printCart()
}

function checkStock(id, qty) {
  const product = products.find(p => p.id === id)
  return product.quantity - qty >= 0
}

// #5 remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find(a => a.id === id)

  if (article && article.qty - qty > 0) {
    article.qty--
  } else {
    const confirm = window.confirm('Estás Seguro?')

    if (confirm) {
      cart = cart.filter(a => a.id !== id)
    }
  }
  printCart()
}

// #6 Eliminar del carrito
function deleteFormCart(id) {
  const article = cart.find(a => a.id === id)
  cart.splice(cart.indexOf(article), 1)
  printCart()
}

// #7 Contar Articulos
function totalArticles() {
  return cart.reduce((acc, article) => acc + article.qty, 0)
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    const product = products.find(p => p.id === article.id)

    return acc + product.price * article.qty
  }, 0)
}

// #9 Limpiar carrito
function clearCart() {
  cart = []
  // cart.length = 0
  printCart()
}

// #10 Comparar
function checkout() {
  cart.forEach(artcile => {
    const product = products.find(p => p.id === artcile.id)
    product.quantity -= artcile.qty
  })
  clearCart()
  printCart()
  printProducts()
  window.alert('Gracias por su compra')
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById('cart-checkout').removeAttribute('disabled')
    document.getElementById('cart-empty').removeAttribute('disabled')
  } else {
    document.getElementById('cart-checkout').setAttribute('disabled', 'disabled')
    document.getElementById('cart-empty').setAttribute('disabled', 'disabled')
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

printCart()

productContainer.addEventListener('click', function (e) {
  const add = e.target.closest('.addToCart')

  if (add) {
    const id = +add.dataset.id
    addToCart(id)
  }
})

cartContainer.addEventListener('click', function (e) {
  const remove = e.target.closest('.removeToCart')
  const add = e.target.closest('.addToCart')
  const deleteCart = e.target.closest('.deleteToCart')

  if (remove) {
    const id = +remove.dataset.id
    removeFromCart(id)
  }

  if (add) {
    const id = +add.dataset.id
    addToCart(id)
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id
    deleteFormCart(id)
  }
})

const actionButtons = document.getElementById('action-buttons')

actionButtons.addEventListener('click', function (e) {
  const clear = e.target.closest('#cart-empty')
  const buy = e.target.closest('#cart-checkout')

  if (clear) {
    clearCart()
  }

  if (buy) {
    checkout()
  }
})