const { creatItem } = require('../logic');

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
    expect(creatItem('Kakashi', '20', 'Anime', 'image', 1)).toEqual('This is not a NUMBER!')
})

test('creat new item', () => {
    expect(creatItem(3, 20, 'Anime', 'image', 1)).toEqual('This is not a STRING!')
})