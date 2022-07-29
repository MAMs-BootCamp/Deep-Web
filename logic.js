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
  array.push(item)
  return array
}

function search(array, string) {
    if (!string) {
       return array 
    }
  return array.filter((e) =>
    e.name.toLowerCase().includes(string.toLowerCase().trim()),
  )
}

module.exports = { creatItem, addItem, search }
