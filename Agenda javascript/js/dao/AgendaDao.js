class AgendaDao {
    cadastrarContato(contato) {
        return new Promise((resolve, reject) => {
            Connection.getConnection().then(connection => {
                let request = connection.transaction(['contato'], 'readwrite').objectStore('contato').add(contato);
                request.onsuccess = e => {
                    resolve();
                }
                request.onerror = e => {
                    reject(e.target.error)
                }
            }).catch(error => console.log(error));
        });
    }

    listarTodos(){
        return new Promise((resolve, reject) => {
            Connection.getConnection().then(connection => {
                let cursor = connection.transaction(['contato'], 'readwrite').objectStore('contato').openCursor();

                let contatos = [];

                cursor.onsuccess = e => {
                    let atual = e.target.result;

                    if(atual){
                        let dado = atual.value;
                        contatos.push(dado.nome, dado.telefone);
                    }else{
                        resolve(contatos);
                    }
                };

                cursor.onerror = e => {
                    reject(e.target.error)
                }
            });
        });
    }
}