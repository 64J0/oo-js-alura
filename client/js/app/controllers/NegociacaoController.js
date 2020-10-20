class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(
      ...this._inputData
        .value
        .split('-')
        .map((item, indice) => {
          return indice !== 1 ? item : (item - 1);
        })
    );

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }
}