class Connection{

    static getConnection(){
        
        return new Promise((resolve, reject) => {
            let request = window.indexedDB.open('contatos', 1);

            request.onupgradeneeded = (e) => {
                request.createObjectStore('contato');
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