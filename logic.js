function creatItem(name, price, category, img, amount) {
  if (name && price && category && img && amount) {
    if (
      typeof name === 'string' &&
      typeof price === 'number' &&
      typeof category === 'string' &&
      typeof img === 'string' &&
      typeof amount === 'number'
    ) {
      let item = {
        name: name,
        price: price,
        category: category,
        img: img,
        amount: amount,
      }
      return item
    } else if (typeof price !== 'number' || typeof amount !== 'number') {
      return 'This is not a NUMBER!'
    } else {
      return 'This is not a STRING!'
    }
  } else {
    return 'Complete the form!'
  }
}
function addItem(array, item) {
  array.push(item);
  return array;
}

function search(array, string) {
  if (!string) {
    return array
  }
  return array.filter((e) =>
    e.name.toLowerCase().includes(string.toLowerCase().trim()),
  )
}

function editItem(item, name, price, category, img, amount) {
  item = {
    name: name && typeof name === 'string' ? name : item.name,
    price: price && typeof price === 'number' ? price : item.price,
    category: category && typeof category === 'string' ? category : item.category,
    img: img && typeof img === 'string' ? img : item.img,
    amount: amount && typeof amount === 'number' ? amount : item.amount,
  }
  return item;
}

function removeItem(array, item) {
  return array.filter(e => e.id !== item.id)
}

function sortingArray(array) {
  return array.sort((a, b) => a.price - b.price);
}

function filterCategory(array, string) {
  return array.filter(e => e.category === string);
}

// module.exports = { creatItem, addItem, search, editItem, removeItem, sortingArray, filterCategory }
