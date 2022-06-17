//****** image tabs
const productImages = document.querySelectorAll('.product-image');
const mainProductImage = document.querySelector('.product__image--main')

productImages.forEach(productImage => {
  productImage.addEventListener('click', () => {
    mainProductImage.src = productImage.src;

    let active = document.getElementsByClassName('active')
    active[0].className = active[0].className.replace(" active", "");
    productImage.className += ' active';
  })
});

//*** nav profile
const profile = document.querySelector('.nav__icon--profile')
profile.addEventListener('click', () => {
  profile.classList.toggle('profile-active')
})

//******* modals
const modal = document.querySelector('.images-wrapper--modal');
const cancelBtn = document.querySelector('.cancel-button');
const productsModal = document.querySelectorAll('.product-image--modal');
const mainProductModal = document.querySelector('.main-image--modal')

mainProductImage.addEventListener('click', () => {
  modal.classList.add('show-modal')
})
cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})

productsModal.forEach(element => {
  element.addEventListener('click', () => {
    mainProductModal.src = element.src;

    let modalActive = document.getElementsByClassName('modal-active')
    modalActive[0].className = modalActive[0].className.replace(" modal-active", "")
    element.className += ' modal-active';
  })
});


//***** sliders
const nextBtn = document.querySelector('.slider--next')
const previousBtn = document.querySelector('.slider--previous')
let sliderActive = 0;

function initial() {
  for (let i = 0; i < productsModal.length; i++) {
    mainProductModal.src = productsModal[i].src;
  }
}

function slideRight() {
  initial()
  mainProductModal.src = productsModal[sliderActive + 1].src;
  sliderActive++
  console.log(sliderActive)
}

function slideLeft() {
  initial()
  mainProductModal.src = productsModal[sliderActive - 1].src;
  sliderActive--
}

nextBtn.addEventListener('click', () => {
  if (sliderActive == productsModal.length - 1) {
    sliderActive = -1
  }
  slideRight()
})

previousBtn.addEventListener('click', () => {
  if (sliderActive === 0) {
    sliderActive = productsModal.length
  }
  slideLeft()
})

//******** cart
const decreaseBtn = document.querySelector('.decrease-container')
const increaseBtn = document.querySelector('.increase-container')
const showAmount = document.querySelector('#amount')
const cartBtn = document.querySelector('.button-cart')
const showCart = document.querySelector('.nav__icons')
// product in cart
const emptyCart = document.querySelector('#cart-notice')
const cartProduct = document.querySelector('.product-added')
const deleteProduct = document.querySelector('.delete-icon')
const numberProduct = document.querySelector('.cart__product--number')
const productPrice = document.querySelector('.cart__product--price')
const cartIndicator = document.querySelector('.show-amount')

let amount = 0;

function showProduct() {
  cartProduct.style.display = 'none'
  emptyCart.style.display = 'flex'
  cartIndicator.style.display = 'none';
}

increaseBtn.addEventListener('click', () => {
  amount += 1;
  showAmount.innerHTML = amount;

  cartBtn.addEventListener('click', () => {
    if (amount > 0) {
      cartProduct.style.display = 'block';
      emptyCart.style.display = 'none';
      numberProduct.innerHTML = amount;

      const totalPrice = `$${amount * 125.00}.00`;
      productPrice.innerHTML = totalPrice;
      cartIndicator.innerHTML = amount;
      cartIndicator.style.display = 'flex';
    }
  })
  deleteProduct.addEventListener('click', () => {
    showProduct()
  })
})
decreaseBtn.addEventListener('click', () => {
  amount -= 1;
  if (amount <= -1) {
    amount = 0
  }
  showAmount.innerHTML = amount;
  cartBtn.addEventListener('click', () => {
    if (amount == 0) {
      showProduct()
    }
  })
})

// cart popup
showCart.addEventListener('click', () => {
  showCart.classList.toggle('cartShow')
})
