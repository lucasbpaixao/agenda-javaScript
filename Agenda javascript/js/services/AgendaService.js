class AgendaService{

    cadastrar(contato){
        return new Promise((resolve, reject) => {
            AgendaDao.cadastrarContato(contato).then(e => resolve()).catch(erro => reject(erro));
       });
    }

    listarTodos(){
        return new Promise((resolve, reject) => {
            AgendaDao.listarTodos().then(contatos => {
                resolve(contatos);
            }).catch(erro => reject(erro));
        });            
    }

    excluir(id){
        return new Promise((resolve, reject) => {
            AgendaDao.excluir(id).then(() => {
                resolve();
            }).catch(erro => {
                reject(erro);
            });
        });
    }
}