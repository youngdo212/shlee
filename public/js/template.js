export const projectView = ({title, description, image}) => {
  return `
    <div class="project" style="width: 47%; height: 40vh">
      <img class="project__image" src="${image}" alt="project_image">
      <div class="project__title">${title}</div>
      <div class="project__footer">
        <div class="project__description">${description}</div>
        <div class="project__quick-view">Quick view</div>
      </div>
    </div>
  `
}

export const menuItemView = ({name, path, color = "#000"}) => {
  return `<a href="${path}" style="color: ${color}" class="menu__item menu__item--active">${name}</a>`
}