<p align="center"> <img src="https://imgur.com/J3hD21O.png" alt="Javascript: criando requisições"> </p>

<hr>

<p align="center"> <img src="./img/logo.png" alt="Logo da Alura"> </p>
<p align="center">Página inicial e formulário de cadastro de vídeos da AluraPlay, uma plataforma de compartilhamento de vídeos.</p>

## Resumo
- [Tecnologias utilizadas no curso](#tecnologias-utilizadas-durante-o-curso)
- [Tecnologias utilizadas no projeto](#tecnologias-utilizadas-no-projeto) 
- [Screenshots](#screenshots) 
- [Como utilizar](#como-utilizar)
- [Conteudo estudado](#conteúdo-aplicado-na-prática)

## Tecnologias utilizadas durante o curso
* Javascript
* NodeJS
* Json-server

## Tecnologias utilizadas no projeto
* HTML
* CSS

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)

## Como utilizar
1. Clonar este repositório para a máquina local;
2. Node.js deve estar instalado;
3. Inicializar o node package manager (npm)
	- No terminal: `npm init`
4. Instalar o pacote `json-server`. Este projeto utilizou a versão 0.17.4 na instalação
	- No terminal: `npm install json-server@0.17.4`
5. Iniciar o servidor e indicar o arquivo que será monitorado
	- No terminal: `npx json-server db.json --watch`
6. Verificar o caminho e porta retornado no terminal. No arquivo `conectaApi`, alterar o valor da variável `porta`, se necessário.

## Conteúdo aplicado na prática
- Instalar Node.js e json-server, simular um servidor localmente.
- Fazer uma requisição GET, utilizando `fetch("url")`
- Utilizar async/await para criar funções assíncronas e lidar com Promises/Respostas.
- Exportar/importar a api para utilizá-la em outras funções.
- Manipulação do DOM
	- Selecionar elementos com data attributes e o `querySelector()`;
	- criar elementos HTML com `document.createElement()`;
	- adicionar classes com `elemento.className`;
	- manipular o conteúdo do elemento com `innerHTML`;
	- adicionar filhos a um elemento pai com `appendChild()`;
	- remover filhos de um elemento pai com `removeChild()`.
- Percorrer uma lista (array) com o `forEach` e aplicar funções para cada elemento.
- Fazer uma requisição POST e salvar dados na base de dados com a estrutura
	```js
	await fetch("url", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			//corpo da requisição
		})
	})
	```
- Adicionar um monitorador de eventos `addEventListener` para o evento de `submit`, `click` e `keydown`.
- Métodos `Math.floor()`, `Math.random()`, `toString()`.
- Fazer o redirecionamento da página com `window.location.href`.
- Fazer pesquisas pelo lado do servidor ao utilizar a estrutura `http://localhost:${porta}/videos?q=${termoDePesquisa}`.
- Tratar erros de carregamento/inserção/busca.
