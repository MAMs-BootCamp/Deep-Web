const { creatItem, addItem, search } = require('../logic')

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
