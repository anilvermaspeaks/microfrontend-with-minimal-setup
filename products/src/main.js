
const mount = (el) => {
    let products = '';
    const productsList = [{
        name: 'product 1'
    },
    {
        name: 'product 2'
    },
    {
        name: 'product 3'
    },
    {
        name: 'product 4'
    },
    {
        name: 'product 5'
    }]
    for (let i = 0; i < productsList.length; i++) {
        products += `<div>${productsList[i].name}</div>`;
    }
    el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {

    const el = document.querySelector('#app-products')

    if (el) {
        mount(el)
    }

}


export { mount };