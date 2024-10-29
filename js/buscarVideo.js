import { conectaApi } from "./conectaApi.js";
import construirCard from "./exibirVideos.js";

async function buscarVideo(evento) {
	evento.preventDefault();
	const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
	const busca = await conectaApi.buscaVideo(dadosDePesquisa);
	const lista = document.querySelector("[data-lista]");
	
	while (lista.firstChild) {
		lista.removeChild(lista.firstChild);
	}

	busca.forEach(video => lista.appendChild(construirCard(video.titulo, video.descricao, video.url, video.imagem)));

	if (busca.length == 0) {
		lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo.</h2>`;
	}
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
const pesquisaInput = document.querySelector("[data-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
pesquisaInput.addEventListener("keydown", evento => {
	if (evento.code == "Enter") {
		buscarVideo(evento);
	}
})