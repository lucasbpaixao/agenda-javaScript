class Contato{
    constructor(nome, numero){
      this._nome = nome;
      this._numero = numero;
    }

    get getId(){
        return this._id;
    }

    get getNome(){
        return this._nome;
    }
    
    get getNumero(){
        return this._numero;
    }
}