class Router {
  constructor() {
    this.rotas = {
      'rosa': 'RosaController',
      'verde': 'VerdeController'
    }
  }

  goTo(rota) {
    history.pushState({}, '', rota);
    eval(`new ${this.rotas[rota]}()`);
  }
}