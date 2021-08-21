// cost function
 
function getPrice(productName, price) {
    const product = document.getElementById(productName + '-price');
    product.innerText = parseFloat(price);
    // const product = document.getElementById
    setTotalPrice();
    getPomoCode();
}
// total price
function getPriceText(cost) {
    const productPrice = document.getElementById(cost + '-price');
    const productPriceText = parseFloat(productPrice.innerText);
    return productPriceText;
}
function setTotalPrice() {
    const bestPrice = getPriceText('best');
    const memoryPrice = getPriceText('memory');
    const storagePrice = getPriceText('storage');
    const deliveryPrice = getPriceText('delivery');
    var totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    return totalPrice.innerText;
}
//pomo code
function getPomoCode() {
    var fullTotal = document.getElementById('full-total-extra-part');
    fullTotal.innerText = setTotalPrice();
    var pomoInput = document.getElementById('pomo-input');
    if (pomoInput.value == 'stevekaku') {
        fullTotal.innerText = (parseFloat(setTotalPrice()) / 100) * 80;
        pomoInput.value = '';
    }
}
// memory cost
//without memory cost
document.getElementById('memory-cost').addEventListener('click', function () {
    getPrice('memory', 0);
})
//with memory cost
document.getElementById('memory-cost').addEventListener('click', function () {
    getPrice('memory', 180);
})
// Storage cost
// without storage cost
document.getElementById('without-ssd-cost').addEventListener('click', function () {
    getPrice('storage', 0);
})
// with low storage cost
document.getElementById('low-ssd-cost').addEventListener('click', function () {
    getPrice('storage', 100);
})
// with heigh storage cost
document.getElementById('heigh-ssd-cost').addEventListener('click', function () {
    getPrice('storage', 180);
})
// delivery charges
// without devery cost
document.getElementById('without-delivery-cost').addEventListener('click', function () {
    getPrice('delivery', 0);
})
// with devery cost
document.getElementById('delivery-cost').addEventListener('click', function () {
    getPrice('delivery', 20);
})
// pomo code 
document.getElementById('pomo-btn').addEventListener('click', function () {
    getPomoCode();
})



  


