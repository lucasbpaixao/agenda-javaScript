class AgendaService{

    cadastrar(contato){
        return new Promise((resolve, reject) => {
            new AgendaDao().cadastrarContato(contato).then(e => resolve()).catch(erro => reject(erro));
       });
    }
}