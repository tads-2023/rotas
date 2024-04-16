class VerdeController {
  constructor() {
    this.container = document.querySelector("#aplicacao");
    this.init();
  }

  init() {
    const view = new VerdeView();
    this.container.innerHTML = view.render();
  }
}