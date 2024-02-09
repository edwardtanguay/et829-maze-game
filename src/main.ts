import "./style.css";
import { createMapHtml, createPlayer, getRoomRows } from "./tools";

const height = 5;
const width = 5;

const roomRows = getRoomRows(height, width);
const player = createPlayer(height, width);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
	<h1 class="text-2xl mb-4">Maze Game</h1>
	${createMapHtml(roomRows, player)}
`;
