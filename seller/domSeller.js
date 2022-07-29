//! DECLARATIONS:
//form
const title = document.querySelector('#product-name');
const category = document.querySelector('#category');
const description = document.querySelector('#description');
const imgLink = document.querySelector('#img-link');
const price = document.querySelector('#price');
const submitBtn = document.querySelector('#submit')

// initiating Products
const allProducts = [];
const localData = JSON.parse(localStorage.getItem('allProducts'));
if (!localData) {
localStorage.setItem('allProducts', JSON.stringify(allProducts));
}  

submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
let item = creatItem(
  title.value,
  +price.value,
  category.value,
  imgLink.value,
  20
);
const newArr = addItem(JSON.parse(localStorage.getItem('allProducts')), item);
localStorage.setItem('allProducts', JSON.stringify(newArr));
});

// const resetBtn = document.querySelector('#reset');
// resetBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     let test = JSON.parse(localStorage.getItem('allProducts'));

//     console.log(test);
//  })









