var $ = document.querySelector.bind(document);
$('.form').addEventListener('click',function(event){
    event.preventDefault();
    var contato = new Contato($('#id').value,$('#nome').value,$('#ddd').value,$('#numero').value);

    var tr = document.createElement('tr');

    var tdId = document.createElement('td');
    var tdNome = document.createElement('td');
    var tdDdd = document.createElement('td');
    var tdNumero = document.createElement('td');

    tdId.textContent = contato.getId;
    tdNome.textContent = contato.getNome;
    tdDdd.textContent = contato.getDdd;
    tdNumero.textContent = contato.getNumero;

    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdDdd);
    tr.appendChild(tdNumero);

    $('#table').appendChild(tr);
})

