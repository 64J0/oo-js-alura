# Tabela de transações - OO ES6

Este projeto consiste em uma aplicação criada em javascript de uma tabela de transações financeiras. 

O curso está disponível na plataforma da **Alura** na trilha de javascript, contemplando as novidades do ES6 e orientação a objetos.

O principal motivo para sua concepção é apresentar os conceitos de orientação a objetos com as particularidades do javascript com as novidades do ES6.

São abordados conceitos de:

* Convenção para variáveis privadas do javascript
* Programação defensiva (evitando que um valor possa ser alterado em uma classe crítica do sistema)
* Definição de propriedades getters 
* Escopo de variáveis
* Arquitetura MVC
* Métodos estáticos
* Template strings
* Contexto léxico das arrow functions em contraposição ao contexto dinâmico das functions normais
  * Basicamente o valor de this é alterado dependendo de onde ele é criado. Caso seja em uma function normal seu valor é definido no momento em que a função é **chamada**, jamais no momento em que é declarada. Já com as arrow functions o valor de this será sempre referente ao contexto em que função é **declarada** e não no que ela é chamada.
* Rest operator, que é bem parecido com o spread operator
* Requisição Ajax com JS puro
* Promises

## Técnicas para reutilizar código em classes

* Herança
* Composição:

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

Classes especializadas em criar determinado tipo de objeto.

Ele é utilizado quando precisamos facilitar a criação de um objeto.

É ideal quando queremos criar objetos similares, com apenas seus detalhes diferentes, que podemos passar nos argumentos da Factory.

É bom para abstrair a criação de um objeto complexo, já que o programador que utilizar a Factory não precisa necessariamente saber como é feita esta operação.

---
Vinícius Gajo Marques Oliveira, 2020