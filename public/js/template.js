export default function({title, description, image}) {
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