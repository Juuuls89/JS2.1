'use strict'
const products = [
    { id: 1, title: 'Shirt', price: 150, imageURL: 'https://www.olymp.com/medias/56603215-pv-main.jpeg-olymp-1412x1400?context=bWFzdGVyfGltYWdlc3wxMDk2Mzh8aW1hZ2UvanBlZ3xpbWFnZXMvaGRjL2g3Ny85NTkzNTM4NDEyNTc0LmpwZ3wxZDQwMGU2ODIwMzY5M2JiMjFiNjFlOTllZTE4YTlkYTc1OTM1MTFhNmM2MGJkY2YzMTIwY2MxNjA2NTI0ZmFl'},
    { id: 2, title: 'Socks', price: 50, imageURL: 'https://api.remember.de/thumbnail/b6/e7/69/1662782803/so01_damensocken_freisteller_01_pim_bb945c37_1000x1000.png'},
    { id: 3, title: 'Jacket', price: 350, imageURL: 'https://eu.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwbc7cd178/images/hi-res/26540_DYWH.jpg?sw=1914&sh=1914&sfrm=png&q=95&bgcolor=f5f5f5'},
    { id: 4, title: 'Shoes', price: 250, imageURL: 'https://cdn.shopify.com/s/files/1/0015/7315/8972/products/74-10-49318-572_1_1250x.progressive.jpg?v=1646888885'},
];

const renderProduct = item => {
    return `<div class="product-item">
                <img src="${item.imageURL}" alt="" class="picture">
                <h3>${item.title}</h3>
                <p>Price : ${item.price} $</p>
                <button class="buy-btn">Buy</button>
            </div>`;
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');


};

renderPage(products);
