const porta = 3000;

async function listaVideos () {
	const conexaoApi = await fetch(`http://localhost:${porta}/videos`);
	const conexaoApiConvertida = await conexaoApi.json();
	return conexaoApiConvertida;

}

async function criaVideo(titulo, descricao, url, imagem) {
	const conexaoApi = await fetch(`http://localhost:${porta}/videos`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			titulo: titulo,
			descricao: `${descricao} mil visualizações.`,
			url: url,
			imagem: imagem
		})
	});
	if (!conexaoApi.ok) {
		throw new Error("Não foi possível enviar o video");
	}
	const conexaoApiConvertida = await conexaoApi.json();
	return conexaoApiConvertida;
}

async function buscaVideo(termoDeBusca) {
	const conexaoApi = await fetch(`http://localhost:${porta}/videos?q=${termoDeBusca}`);
	const conexaoApiConvertida = await conexaoApi.json();
	return conexaoApiConvertida;
}

export const conectaApi = {
	listaVideos,
	criaVideo,
	buscaVideo
}
