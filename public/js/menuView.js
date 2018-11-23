import {menuItemView as template} from './template.js';

export default class MenuView {
  constructor({menuItems, wrapper, toggleButton}) {
    this.menuItems = menuItems;
    this.wrapper = wrapper;
    this.toggleButton = toggleButton;
    this.isActive = !!toggleButton ? false : true;

    this.render({hasToggleButton: !!toggleButton});
    this.toggleButton && this.registerToggleButtonHandler();
  }

  render({hasToggleButton}) {
    this.menuItems.forEach((menuItem => {
      const html = template(menuItem);
      this.wrapper.insertAdjacentHTML('beforeend', html);
    }))

    hasToggleButton && this.wrapper.classList.add('menu-animation')
  }

  registerToggleButtonHandler() {
    this.toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.isActive ? this.deactivate() : this.activate();
      this.isActive = !this.isActive;
    })
  }

  activate() {
    this.wrapper.classList.add('menu-animation--active');
    this.wrapper.classList.remove('menu-animation--deactive');
  }

  deactivate() {
    this.wrapper.classList.remove('menu-animation--active');
    this.wrapper.classList.add('menu-animation--deactive');
  }
}