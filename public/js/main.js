import stickyNavigation from './stickyNavigation.js';
import Modal from './modal.js';
import ProjectSectionView from './projectSectionView.js';
import {projects} from './data.js';

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
})

projectSectionView.registerQuickViewHandler(modal.activate.bind(modal));