
const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')

let myLi = ''
function showAll(){
menuOptions.forEach((product) => {
    myLi = myLi +
            `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${product.price}</p>
            </li>

            `
            list.innerHTML = myLi
});
} 

buttonShowAll.addEventListener('click', showAll)

// Map ------------>

const buttonMapAll = document.querySelector('.map-all')

function mapAllItems(){
    const newPrices = menuOptions.map((product) => ({
        name: product.name,
        price: product.price * 0.9,
        vegan: product.vegan,
        src: product.src
    }))

    console.log(newPrices)
}



buttonMapAll.addEventListener('click', 'mapAllItems')