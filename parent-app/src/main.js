import { mount as loadProductApp } from 'products/ProductIndex';
import { mount as loadCartApp } from 'cart/CartIndex';
loadProductApp(document.querySelector('#app-products-container'))

loadCartApp(document.querySelector('#app-cart-container'))