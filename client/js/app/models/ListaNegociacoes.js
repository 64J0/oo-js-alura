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

  get volumeTotal() {
    if (this._negociacoes.length === 0) {
      return '0';
    }

    let vTotal = this._negociacoes.reduce(
      (total, item) => {
        return total + item.volume
      }, 0);
    return String(vTotal);
  }

  ordena(criterio) {
    this._negociacoes.sort(criterio);
  }

  inverteOrdem() {
    this._negociacoes.reverse();
  }
}