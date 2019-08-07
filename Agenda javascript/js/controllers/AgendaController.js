class AgendaController{

    constructor(){
        var $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputTelefone = $('#telefone');
        this._inputId = $('#id');
        this._agendaService = new AgendaService();
        this._agendaView = new AgendaView($('#tabela'));
        this._mensagemView = new MensagemView($('#alertas'));
        this._agendaView.update();
    }

    cadastrar(){
        event.preventDefault();
        let contato = new Contato(this._inputNome.value, this._inputTelefone.value);
        this._agendaService.cadastrar(contato).then(() => {
            this._agendaView.update();
            this._mensagemView.update('Contato Cadastrado com Sucesso', 'sucesso');
        }).catch(erro => {
            console.log(erro);
            this._mensagemView.update('Não foi possivel registrar o contato', 'erro');
        });

        this._limpaFormulario();
    }

    excluir(id){
        this._agendaService.excluir(id).then(() => {
            this._agendaView.update();
            this._mensagemView.update('Contato Excluido com Sucesso', 'sucesso');
        }).catch(erro => {
            console.log(erro);
            this._mensagemView.update('Não foi possivel excluir o contato', 'erro');
        });
    }

    _limpaFormulario(){
        this._inputId.value = '';
        this._inputNome.value = '';
        this._inputTelefone.value = '';
    }
}