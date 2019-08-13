class Contato {
    constructor(id, nome, numero) {
        this._id = id;
        this._nome = nome;
        this._numero = numero;
    }

    get getId() {
        return this._id;
    }

    get getNome() {
        return this._nome;
    }

    get getNumero() {
        return this._numero;
    }
}