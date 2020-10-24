class ListaNegociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this);
  }

  get negociacoes() {
    // Retorna uma nova lista com os
    // dados copiados das negociacoes, 
    // blindando a lista original
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
  }
}