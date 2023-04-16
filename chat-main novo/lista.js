function adicionaMensagem(descMensagem) {
  const novoMensagem = document.createElement(`li`);
  novoMensagem.innerHTML = `<div class="chatUsuario">
                        <h5 class="labelUsuario">Você diz:</h5>\n
                        <h4 class="h4Usuario">${descMensagem}</h4>
                        </div>`;

  const listaMensagem = document.querySelector("#lista-das-mensagem");
  listaMensagem.appendChild(novoMensagem);

}

function formAdiciona(event) {
  event.preventDefault();

  const campoMensagem = document.querySelector("#mensagem");
  // se eu chegar aqui, o código está validado...
  adicionaMensagem(campoMensagem.value);

  campoMensagem.value = "";
}

const formAdd = document.querySelector("#formAdd");
formAdd.addEventListener("submit", formAdiciona);


