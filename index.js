// Classe
class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  } // Método
  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'tipo de ataque não informado';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Objeto
let mago = new hero('mago1', 100, 'mago');
mago.atacar();

let guerreiro = new hero('guerreiro1', 45, 'guerreiro');
guerreiro.atacar();

let monge = new hero('monge1', 65, 'monge');
monge.atacar();

let ninja = new hero('ninja1', 25, 'ninja');
ninja.atacar();

let heroi_desconhecido = new hero( 30);
heroi_desconhecido.atacar();
