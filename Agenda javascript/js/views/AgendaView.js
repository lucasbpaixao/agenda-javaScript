class AgendaView {
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(contatos){
        return `<table class="table table-hover table-bordered" id="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>NÚMERO</th>
            </tr>
        </thead>

        <tbody>
            ${contatos.map(c => `
                <tr>
                    <td> ${c.id} </td>
                    <td> ${c.nome} </td>
                    <td> ${c.numero} </td>
                </tr>
            `)}
        </tbody>

        <tfoot>
        </tfoot>
    </table>`;
    }

    update(){
        
    }
}