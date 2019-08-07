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
                <th>EXCLUIR</th>
                <th>PREENCHER CAMPOS</th>
            </tr>
        </thead>

        <tbody>
            ${contatos.map(c => `
                <tr>
                    <td> ${c.id} </td>
                    <td> ${c.nome} </td>
                    <td> ${c.numero} </td>
                    <td><a align="center"> <button type="button" onclick="controller.excluir(${c.id})" class="btn btn-success">Excluir</button> </a></td>
                    <td><a align="center"> <button type="button" onclick="controller.preencherCampos(${c.id})" class="btn btn-success">Preencher Campos</button> </a></td>
                </tr>
            `)}
        </tbody>

        <tfoot>
        </tfoot>
    </table>`;
    }

    update(){
        let agendaService = new AgendaService();

        agendaService.listarTodos().then(contatos => {
            this._elemento.innerHTML = this._template(contatos);
        });
        
    }
}