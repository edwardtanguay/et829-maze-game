import "./style.css";
import { createMapHtml, createPlayer, getRoomRows } from "./tools";

setTimeout(() => {
	const bodyElem = document.querySelector<HTMLBodyElement>('body');
	const playerElem = document.querySelector<HTMLSpanElement>(".player");

	if (bodyElem) {
		bodyElem.addEventListener('keyup', (event) => {
			console.log(event.code);
		})
	}
}, 0);

const height = 5;
const width = 5;

const roomRows = getRoomRows(height, width);
const player = createPlayer(height, width);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
	<h1 class="text-2xl mb-4">Maze Game</h1>
	${createMapHtml(roomRows, player)}
`;
