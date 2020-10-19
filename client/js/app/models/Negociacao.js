class Negociacao {
  constructor(data, quantidade, valor) {
    // O underline indica que a variável
    // deve ser privada
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  // Propriedades getter que podem ser acessadas
  // como propriedades
  get volume() {
    return this._quantidade * this._valor;
  }

  // Programação defensiva 
  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}