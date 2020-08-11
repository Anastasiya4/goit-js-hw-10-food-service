import './styles.css';
import itemTimeplate from './timeplates/reseipt-items.hbs';
import menu from './menu.json';
import './js/theme.js';


const menuDesc = document.querySelector('.js-menu');

menuDesc.insertAdjacentHTML('beforeend', itemTimeplate(menu));