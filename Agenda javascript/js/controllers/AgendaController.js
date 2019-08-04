class AgendaController{

    constructor(){
        var $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputTelefone = $('#telefone');
        this._agendaService = new AgendaService();
    }

    cadastrar(){
        event.preventDefault();
        let contato = new Contato(this._inputNome.value, this._inputTelefone.value);
        this._agendaService.cadastrar(contato).then();
    }
}