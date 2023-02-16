let serial = 0;
let fullAmount = 0;
// first card
//  using event listener
document.getElementById('first-card').addEventListener('click', function () {
    const data = getDataById('first-name', 'first-price', 'first-quantity');
    // addToCard();
    // const productName = document.getElementById('first-name').innerText;
    // const productPrice = document.getElementById('first-price').innerText;
    // const productQuantity = document.getElementById('first-quantity').innerText;
    // // console.log(productQuantity, productName,);

    const priceTotal = parseFloat(data.productPrice) * parseFloat(data.productQuantity);
    //  show data
    displayData(data.productName, data.productPrice, data.productQuantity, priceTotal);

    // document.getElementById('first-card').setAttribute('disabled', true);
});

// third card
//  using event listener
document.getElementById('third-card').addEventListener('click', function () {
    // addToCard();
    const data = getDataById('third-name', 'third-price', 'third-quantity');
    const priceTotal = parseFloat(data.productPrice) - parseFloat(data.productQuantity);
    //  show data
    displayData(data.productName, data.productPrice, data.productQuantity, priceTotal)

});

// 2nd Card
// using event node node node 
document.getElementById('second-card').addEventListener('click', function (e) {
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const priceTotal = parseFloat(productPrice) + parseFloat(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal)

});

// 4th Card
// using event node node node 
document.getElementById('fourth-card').addEventListener('click', function (e) {

    const data = getDataByEvent(e);

    const priceTotal = parseFloat(data.productPrice) ** parseFloat(data.productQuantity);
    displayData(data.productName, data.productPrice, data.productQuantity, priceTotal)

});

// 5th card
document.getElementById('last-card').addEventListener('click', function (e) {
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].value;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].value;

    if (productName == "" || productQuantity == "" || productPrice <= 0 || productQuantity <= 0) {
        return alert('provide valid number')
    }
    const priceTotal = parseFloat(productPrice) + parseFloat(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal)

});

//  common function=============================================
function displayData(productName, productPrice, productQuantity, priceTotal) {
    const container = document.getElementById('table-container')
    const tr = document.createElement("tr");
    serial += 1;
    // template string 
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);

    document.getElementById('cart').innerText = serial;
    document.getElementById('total-products').innerText = serial;
    fullAmount = fullAmount + priceTotal;
    console.log(fullAmount)
    document.getElementById('total-amount').innerText = fullAmount;

}

// for 1st and 3rd card
function getDataById(name, price, quantity) {
    const productName = document.getElementById(name).innerText;
    const productPrice = document.getElementById(price).innerText;
    const productQuantity = document.getElementById(quantity).innerText;
    // console.log(productQuantity, productName,);
    const pd = {
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
    };
    return pd;
};

// for 2nd and 4th card 
function getDataByEvent(e) {
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const data = {
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
    };
    return data;
};
