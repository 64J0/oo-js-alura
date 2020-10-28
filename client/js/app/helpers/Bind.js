class Bind {
  // Usando o rest operator nesse construtor
  // Nessa instrução está sendo dito que quando qualquer valor 
  // passado em props for alterado então será executada a função
  // da view.update() passando o model como parâmetro
  constructor(model, view, ...props) {
    let proxy = ProxyFactory.create(
      model, props, (model) => {
        return view.update(model);
      }
    );

    view.update(model);

    return proxy;
  }
}