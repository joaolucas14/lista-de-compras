import { criarCampoHora } from "./criarCampoHora.js";
import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaDeComprados = document.getElementById("lista-comprados");


export function adicionarItem(evento) {
    evento.preventDefault()

    if (item.value === ""){
        alert("Por favor, isira um item!")
        return
    }
    
    const itemDaLista = criarItemDaLista(item.value)
    listaDeCompras.appendChild(itemDaLista)
    criarCampoHora(itemDaLista)
    verificarListaVazia(listaDeCompras)
    verificarListaComprados(listaDeComprados)
    item.value = "";
}