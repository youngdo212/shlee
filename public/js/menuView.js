import {menuItemView as template} from './template.js';

export default class MenuView {
  constructor({menuItems, wrapper, toggleButton}) {
    this.menuItems = menuItems;
    this.render({wrapper});
  }

  render({wrapper}) {
    this.menuItems.forEach((menuItem => {
      const html = template(menuItem);
      wrapper.insertAdjacentHTML('beforeend', html);
    }))
  }
}