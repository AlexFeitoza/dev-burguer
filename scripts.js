const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')


function showAll(productsArray) {
let myLi = ''

    productsArray.forEach((product) => {
        myLi = myLi +
            `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
   ...product,
    price: product.price * 0.9,   // usando Spread Operator para simplificar o codigo
                                //name: product.name,                         
                                //price: product * 0.9, // dar 10% de desconto
                                    //                 vegan: product.vegan,
                                    //                       src: product.src
    }))

    showAll(newPrices)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)