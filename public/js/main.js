import Navigation from './navigation.js';
import Modal from './modal.js';

let nav = new Navigation({
  navigation: document.querySelector('nav'),
  top: document.querySelector('header').offsetHeight,
})

let modal = new Modal({
  modal: document.querySelector('.modal'),
  activeButtons: document.querySelectorAll('.project__quick-view'),
})