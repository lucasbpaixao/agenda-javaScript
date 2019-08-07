class MensagemView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(mensagem, tipo){
        if(tipo == 'sucesso'){
            return `
            <div class="alert alert-success" role="alert">
                ${mensagem}
            </div>
            `;
        }
        
        if(tipo == 'erro'){
            return `
            <div class="alert alert-danger" role="alert">
                ${mensagem}
            </div>`;
        }
    }

    update(mensagem, tipo){
        this._elemento.innerHTML = this._template(mensagem, tipo);
    }
}