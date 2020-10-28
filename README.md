# Tabela de transações - OO ES6

Este projeto consiste em uma aplicação criada utilizando HTML, CSS e JavaScript de uma tabela de transações financeiras durante o curso de *OO* da **Alura** na trilha de **Front-end**. Este curso aborda a orientação a objetos observando as particularidades do JavaScript na versão *ES6*.

De maneira reduzida os conceitos mais importantes abordados são:

* Convenção para variáveis privadas do JavaScript, já que até essa versão ainda não existe uma maneira de criar esse tipo de variável em nossos objetos com uma sintaxe direta
* Programação defensiva (evitando que um valor possa ser alterado em uma classe crítica do sistema)
* Definição de propriedades *getters* e *setters* de maneira simplificada em classes do JavaScript
* Escopo de variáveis, e diferenças entre variáveis definidas com a palavra reservada *var* e *let*
* Arquitetura MVC - Model, View e Controller
  * View -> Lida com o que é exibido para o usuário na tela, por exemplo, a classe MensagemView controla se será mostrado um `<p>` ou não contendo informação sobre a operação realizada
  * Model -> Representa o tipo de objeto que será manipulado (ou 'enxergado') pelo sistema
  * Controller -> É a classe responsável por lidar com os models e as views de maneira organizada
* Métodos estáticos, que são métodos de objetos que não requerem uma nova instância da classe para serem executados
* Template strings para facilitar a composição de strings
* Contexto léxico das *arrow functions* em contraposição ao contexto dinâmico das *functions* normais
  * Basicamente o valor do parâmetro **this** é alterado dependendo de onde ele é criado. Caso seja em uma **function normal**, seu valor é definido no momento em que a função é **chamada**, jamais no momento em que é declarada. Já com as **arrow functions** o valor de **this** será sempre referente ao contexto em que função é **declarada** e não no que ela é chamada.
* Rest operator, que é bem parecido com o spread operator porém aplicado no campo de parâmetros de uma função
* Requisição Ajax com JS puro utilizando o objeto XMLHttpRequest
* Promises e programação assíncrona

## Técnicas para reutilizar código em classes

* Herança:

Uma classe extende a outra, reaproveitando seu código anteriormente criado.

```javascript
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
}

class Funcionario extends Pessoa {
    fala() {
        return `Eu, ${this._nome} tenho ${this._idade} anos.`;
    }
}
```

* Composição:

Uma classe aproveita alguma parte de uma determinada classe evitando ter que reescrever código.

```javascript
class Aviao {
  constructor(nome) {
      this._nome = nome;
  }

  voa() {
      alert(`${this._nome} está voando`);
  }

  ligaMotor() {
      console.log('liga o motor');
  }

  fechaPortas() {
      console.log('Portas sendo fechadas');
  }
}

class Passarinho {
  constructor(nome) {
      this._nome = nome;
      // guarda uma instância de avião
      this._aviao = new Aviao(nome);
  }

  voa() {
      // usa o método voa de Aviao
      this._aviao.voa();
  }
}
```

* Mixin:

Esse tipo é o mais confuso pois a API Reflect do JavaScript é confusa. Basicamente, com essa técnica é possível executar uma ação em uma classe considerando outro contexto passando um conjunto de parâmetros que são informados no terceiro argumento.

```javascript
class Aviao {
    constructor(nome) {
        this._nome = nome;
    }

    voa() {
        alert(`${this._nome} está voando`);
    }

    ligaMotor() {
        console.log('liga o motor');
    }

    fechaPortas() {
        console.log('Portas sendo fechadas');
    }
}

class Passarinho {
    constructor(nome) {
        this._nome = nome;
    }

    voa() {
        // executa o método `voa` de `Avião` usando como contexto a instância de `Passarinho`
        Reflect.apply(Aviao.prototype.voa, this, []);
    }
}
```

*Um detalhe: foi necessário fazer Aviao.prototype.voa porque métodos criados usando ES6 são adicionados no prototype. Qualquer método adicionado em prototype estará disponível para todas as instâncias.*

## Padrão de projeto

### Observer

Usamos o padrão de projeto Observer sempre que queremos notificar partes do sistema interessadas quando um evento importante for disparado em nosso sistema.

No contexto da nossa aplicação, entendemos um evento como o ato de adicionar ou esvaziar nossa lista de negociações. É a view que está interessada em observar esse evento e tomar uma ação, no caso, se atualizar com base no estado mais atual do modelo.

### Proxy

Basicamente, encapsula um objeto para executar algumas lógicas de maneira escondida do model, servindo como uma interface para o objeto real que queremos interagir, nos permitindo controlar o acesso às suas propriedades e métodos.

Ele é útil quando queremos deixar os nossos modelos mais limpos, sem várias armadilhas (traps) penduradas em seus métodos.

Exemplo: 

```javascript
let pessoa = {
    nome: 'Vinícius'
}

let pessoaProxy = new Proxy(pessoa, {
    /**
     * 
     * @param {Object} target - O objeto real que é encapsulado pela proxy. É o objeto que não queremos "sujar" com armadilhas.
     * @param {Object} prop - É a propriedade em si, que está sendo lida naquele momento (exemplo, 'nome')
     * @param {Object} receiver - É a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos as armadilhas.
     */
    get (target, prop, receiver) {
        //... restante da lógica
    }
});
```

### Factory

Classes especializadas em criar determinado tipo de objeto. É ideal quando queremos criar objetos similares, com apenas seus detalhes diferentes, que podemos passar nos argumentos da Factory.

É bom para abstrair a criação de um objeto complexo, já que o programador que utilizar a Factory não precisa necessariamente saber como é feita esta operação.

## Comentários finais

Foi um curso rápido mas bastante rico em informações. A didática utilizada é excelente, com vários exercícios e textos complementares que ajudam no entendimento e fixação do conhecimento.

Todavia, alguns conceitos podem ser melhor explorados, como os padrões de projeto.

No mais achei bacana realizar esse treinamento pois abriu minha mente para novos conceitos e me fez relembrar alguns que já tinha estudado anteriormente em outras linguagens e agora tenho mais noção de como implementar utilizando o JavaScript.

**Nota final: 9/10.**

---
Vinícius Gajo Marques Oliveira, 2020