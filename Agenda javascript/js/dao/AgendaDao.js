class AgendaDao {
    static cadastrarContato(contato) {
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

    static listarTodos(){
        return new Promise((resolve, reject) => {
            Connection.getConnection().then(connection => {
                let store = connection.transaction(['contato'], 'readwrite').objectStore('contato');

                let cursor = store.openCursor();
                let contatos = [];

                cursor.onsuccess = e => {
                    let atual = e.target.result;

                    if(atual){
                        let dado = atual.value;
                        let id = atual.key;

                        let contato = {
                            id: id,
                            nome: dado._nome,
                            numero: dado._numero
                        }
                        contatos.push(contato);
                        atual.continue();
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