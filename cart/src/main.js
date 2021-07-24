export const mount = (el) => {

    el.innerHTML = 'Cart Screen'

}

if (process.env.NODE_ENV === 'development') {

    const el = document.querySelector('#app-cart')

    if (el) {
        mount(el)
    }
}

