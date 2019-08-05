class AgendaController{

    constructor(){
        var $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputTelefone = $('#telefone');
        this._agendaService = new AgendaService();
        this._agendaView = new AgendaView($('#tabela'));
        this._mensagemView = new MensagemView($('#alertas'));
        this._agendaView.update();
    }

    cadastrar(){
        event.preventDefault();
        let contato = new Contato(this._inputNome.value, this._inputTelefone.value);
        this._agendaService.cadastrar(contato).then();
        this._agendaView.update();
        this._mensagemView.update('Contato Cadastrado com Sucesso', 'sucesso');
        this._limpaFormulario();
    }

    _limpaFormulario(){
        this._inputNome.value = '';
        this._inputTelefone.value = '';
    }
}