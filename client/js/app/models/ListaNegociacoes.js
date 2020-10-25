class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    // Retorna uma nova lista com os
    // dados copiados das negociacoes, 
    // blindando a lista original
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
  }
}