var connection = null
class Connection{

    static getConnection(){
        
        return new Promise((resolve, reject) => {
            let request = window.indexedDB.open('contatos', 3);

            request.onupgradeneeded = (e) => {
                connection = e.target.result;
                connection.createObjectStore('contato', {keyPath: '_id', autoIncrement : true});
            };

            request.onsuccess = (e) => {
                resolve(e.target.result);
            }

            request.onerror = (e) => {
                reject(e.target.error);
            }
        });
    }
}