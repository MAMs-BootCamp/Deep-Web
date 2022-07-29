const { creatItem, addItem, search, editItem, removeItem, sortingArray, filterCategory } = require('../logic')

test('creat new item', () => {
  expect(creatItem('Kakashi', 20, 'Anime', 'image', 1)).toEqual({
    name: 'Kakashi',
    price: 20,
    category: 'Anime',
    img: 'image',
    amount: 1,
  })
})

test('creat new item', () => {
  expect(creatItem('', 20, 'Anime', 'image', 1)).toEqual('Complete the form!')
})

test('creat new item', () => {
  expect(creatItem('Kakashi', 20, 'Anime', 'image', '1')).toEqual(
    'This is not a NUMBER!',
  )
})

test('creat new item', () => {
  expect(creatItem(3, 20, 'Anime', 'image', 1)).toEqual('This is not a STRING!')
})

test('add new item to array', () => {
  expect(addItem([], { name: 'kakashi' })).toEqual([{ name: 'kakashi' }])
})

test('Item search ', () => {
  expect(search([], 'kakashi')).toEqual([])
})
test('Item search ', () => {
  expect(search([{ name: 'kakashi' }], 'kakashi')).toEqual([
    { name: 'kakashi' },
  ])
})
test('Item search ', () => {
  expect(search([{ name: 'kakashi' }], ' kakashi')).toEqual([
    { name: 'kakashi' },
  ])
})
test('Item search ', () => {
  expect(search([{ name: 'kakashi' }], 'mohmmed')).toEqual([])
})
test('Item search ', () => {
  expect(search([{ name: 'kakashi' }, { name: 'kaka' }], 'ka')).toEqual([
    { name: 'kakashi' },
    { name: 'kaka' },
  ])
})
test('Item search ', () => {
  expect(search([{ name: 'kakashi' }, { name: 'kaka' }], 'Ka')).toEqual([
    { name: 'kakashi' },
    { name: 'kaka' },
  ])
})
test('Item search ', () => {
  expect(search([{ name: 'kakashi' }, { name: 'Kaka' }], 'ka')).toEqual([
    { name: 'kakashi' },
    { name: 'Kaka' },
  ])
})
test('Item search ', () => {
  expect(search([{ name: 'kakashi' }, { name: 'Kaka' }], '')).toEqual([
    { name: 'kakashi' },
    { name: 'Kaka' },
  ])
})

test('edit item', () => {
  expect(editItem(
    {
      name: 'Kakashi',
      price: 20,
      category: 'Anime',
      img: 'image',
      amount: 1,
    },
    'mohammad',
    '',
    '',
    '',
    '',
  )).toEqual({
    name: 'mohammad',
    price: 20,
    category: 'Anime',
    img: 'image',
    amount: 1,
  })
})

test('edit item', () => {
  expect(editItem(
    {
      name: 'Kakashi',
      price: 20,
      category: 'Anime',
      img: 'image',
      amount: 1,
    },
    'mohammad',
    40,
    '',
    '',
    '',
  )).toEqual({
    name: 'mohammad',
    price: 40,
    category: 'Anime',
    img: 'image',
    amount: 1,
  })
})

test('edit item', () => {
  expect(editItem(
    {
      name: 'Kakashi',
      price: 20,
      category: 'Anime',
      img: 'image',
      amount: 1,
    },
    'mohammad',
    '40',
    '',
    '',
    '',
  )).toEqual({
    name: 'mohammad',
    price: 20,
    category: 'Anime',
    img: 'image',
    amount: 1,
  })
})

test('remove an item from array ', () => {
  expect(removeItem([{ id: 1 }, { id: 2 }], { id: 1 })).toEqual([
    { id: 2 },
  ])
})
test('remove an item from array ', () => {
  expect(removeItem([{ id: 1 }, { id: 2 }], {})).toEqual([
    { id: 1 }, { id: 2 }])
})

test('sorting  the array ', () => {
  expect(sortingArray([{ price: 20 }, { price: 40 }, { price: 30 }])).toEqual([
    { price: 20 }, { price: 30 }, { price: 40 }])
})
test('sorting  the array ', () => {
  expect(sortingArray([{ price: 20 }])).toEqual([
    { price: 20 }])
})
test('sorting  the array ', () => {
  expect(sortingArray([])).toEqual([])
})

test('filter the array by category', () => {
  expect(filterCategory([{ category: 'mobiles' }, { category: 'labtops' }], 'mobiles'))
    .toEqual([{ category: 'mobiles' }])
})
