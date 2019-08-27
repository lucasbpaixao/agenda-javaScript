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
        let contato = new Contato(parseFloat((Math.random() * 100).toFixed(0)), this._inputNome.value, this._inputTelefone.value);
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

        this._limpaFormulario();
    }

    preencherCampos(id){
        this._agendaService.preencherCampos(id).then(contato => {
            this._inputId.value =  contato.id;
            this._inputNome.value = contato.nome;
            this._inputTelefone.value = contato.numero;

            this._mensagemView.update('Campos Preenchidos', 'sucesso');
        });
    }

    alterar(){
        let contato = new Contato(this._inputId.value, this._inputNome.value, this._inputTelefone.value);

        this._agendaService.alterar(contato).then(() => {

            this._mensagemView.update('Contato Alterado com Sucesso', 'sucesso');
            this._agendaView.update();
        }).catch(erro => {
            console.log(erro);
            this._mensagemView.uptade('Não foi Possivel Alterar o Contato', 'erro');
        });
    }

    _limpaFormulario(){
        this._inputId.value = '';
        this._inputNome.value = '';
        this._inputTelefone.value = '';
    }
}