class DateHelper {
  constructor() {
    throw new Error('DateHelper não pode ser instanciada');
  }

  static dataParaTexto(data) {
    let dataFormatada = `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    return dataFormatada;
  }

  static textoParaData(texto) {
    // yyyy-mm-dd
    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
      throw new Error('Deve estar no formado yyyy-mm-dd');
    }

    return new Date(
      ...texto
        .split('-')
        .map((item, indice) => {
          console.log(item, indice);
          return indice != 1 ? item : (item - 1);
        })
    );
  }
}