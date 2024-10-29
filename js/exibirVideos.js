import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function construirCard(titulo, descricao, url, imagem) {
	const videoElemento = document.createElement('li');
	videoElemento.className = "videos__item";
	videoElemento.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`;
	return videoElemento;
}

async function exibirListaVideos() {
	try {
		const listaApi = await conectaApi.listaVideos();
		listaApi.forEach(video => {
			const cardVideo = construirCard(video.titulo, video.descricao, video.url, video.imagem);
			lista.appendChild(cardVideo);
		})
	} catch {
		lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos.</h2>`;
	}
}

exibirListaVideos();
