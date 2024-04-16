class RosaController {
  constructor() {
    this.container = document.querySelector("#aplicacao")
    this.init()
  }

  init() {
    const view = new RosaView();
    this.container.innerHTML = view.render();
  }
}