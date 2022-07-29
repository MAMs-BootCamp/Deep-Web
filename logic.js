function creatItem(name, price, category, img, amount) {
    if (name && price && category && img && amount) {
        if (typeof (name) === 'string' && typeof (price) === 'number' && typeof (category) === 'string' && typeof (img) === 'string' && typeof (amount) === 'number') {
            let item = {
                name: name,
                price: price,
                category: category,
                img: img,
                amount: amount,
            }
            return item;

        } else if (typeof (price) !== 'number' || typeof (amount) !== 'number') {
            return 'This is not a NUMBER!'
        } else { return 'This is not a STRING!' }
    } else {
        return 'Complete the form!'
    }
}

module.exports = { creatItem }