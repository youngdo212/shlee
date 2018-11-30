import stickyNavigation from './stickyNavigation.js';
import Modal from './modal.js';
import ProjectSectionView from './projectSectionView.js';
import MenuView from './menuView.js';
import Header from './header.js';
import FooterForm from './footerForm.js';
import observer from './observer.js';

import {projects, showreel, menuItems} from './data.js';

const nav = new stickyNavigation({
  navigation: document.querySelector('.sticky-nav'),
  disableTop: document.querySelector('header').offsetHeight,
})

const modal = new Modal({
  modal: document.querySelector('.modal'),
})

const projectSectionView = new ProjectSectionView({
  projects,
  wrapper: document.querySelector('section'),
  observer,
})

projectSectionView.registerQuickViewHandler(modal.activate.bind(modal));

const showreelButton = document.querySelector('.header__showreel');

showreelButton.addEventListener('click', modal.activate.bind(modal, showreel));

const navigationMenuView = new MenuView({
  menuItems,
  wrapper: document.querySelector('.nav__menu'),
  toggleButton: document.querySelector('.nav__menu-button'),
  color: '#fff',
})

const stickyNavigationMenuView = new MenuView({
  menuItems,
  wrapper: document.querySelector('.sticky-nav__menu'),
})

const header = new Header({
  header: document.querySelector('header'),
})

const footerForm = new FooterForm({
  form: document.querySelector('.footer__form'),
  formMessage: document.querySelector('.footer__form-message'),
  submitMessage: 'Thank you for subscribing!',
  rejectMessage: 'Please enter a valid email address.',
})