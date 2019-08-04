class AgendaService{

    constructor(){
        this._agendaDao = new AgendaDao();
    }
    cadastrar(contato){
        return new Promise((resolve, reject) => {
            this._agendaDao.cadastrarContato(contato).then(e => resolve()).catch(erro => reject(erro));
       });
    }

    listarTodos(){
            let contatosArray = [];
            this._agendaDao.listarTodos().then(contatos => contatosArray.concat(contatos)).catch(erro => reject(erro));
            console.log('vish');
            return contatosArray;
    }
}