import stickyNavigation from './stickyNavigation.js';
import Modal from './modal.js';

let nav = new stickyNavigation({
  navigation: document.querySelector('.sticky-nav'),
  disableTop: document.querySelector('header').offsetHeight,
})

let modal = new Modal({
  modal: document.querySelector('.modal'),
  activeButtons: document.querySelectorAll('.project__quick-view'),
})