const list = document.querySelector('ul')
let myLi = ''

menuOptions.forEach((product) => {
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