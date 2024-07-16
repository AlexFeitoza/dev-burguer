const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

// formatando o valor para a moeda BRL
function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}

function showAll(productsArray) {
let myLi = ''

    productsArray.forEach((product) => {
        myLi = myLi +
            `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
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

function sumAllItems(){
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p> O Valor total dos itens è R$ ${formatCurrency(totalValue)}</p>
        </li>
    `
    }

function filterAllItems(){
    const filterVeganItems = menuOptions.filter((product) => product.vegan === true)

    showAll(filterVeganItems)
}

    

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)