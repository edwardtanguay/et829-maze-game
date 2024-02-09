import "./style.css";
import { createMapHtml, getRoomRows } from "./tools";

const roomRows = getRoomRows(5, 5);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
	<h1 class="text-2xl mb-4">Maze Game</h1>
	${createMapHtml(roomRows)}
`;
