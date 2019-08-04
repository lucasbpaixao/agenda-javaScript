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
}