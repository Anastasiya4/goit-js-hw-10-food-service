import './styles.css';
import itemTimeplate from '../src/timeplates/reseipt-items.hbs';
import menu from './menu.json';

const menuDesc = document.querySelector('.js-menu');

menuDesc.insertAdjacentHTML('beforeend', itemTimeplate(menu));