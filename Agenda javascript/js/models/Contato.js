class Contato{
    constructor(id, nome, ddd, numero){
      this._id = id;
      this._nome = nome;
      this._ddd = ddd;
      this._numero = numero;
    }

    get getId(){
        return this._id;
    }

    get getNome(){
        return this._nome;
    }
    
    get getDdd(){
        return this._ddd;
    }
    
    get getNumero(){
        return this._numero;
    }
}