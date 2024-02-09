import { IPlayer } from "./interfaces";
import "./style.css";
import { createMapHtml, createPlayer, getRoomRows } from "./tools";

const redraw = (roomRows: any, player: IPlayer) => {
	const gameArea = document.querySelector<HTMLDivElement>(".gameArea");
	if (gameArea) {
		gameArea.innerHTML = createMapHtml(roomRows, player);
	}

}

setTimeout(() => {
	const bodyElem = document.querySelector<HTMLBodyElement>("body");
	// const playerElem = document.querySelector<HTMLSpanElement>(".player");

	// redraw
	const roomRows = getRoomRows(height, width);
	const player:IPlayer = createPlayer(height, width);
	redraw(roomRows, player);

	if (bodyElem) {
		bodyElem.addEventListener("keyup", (event) => {
			console.log(event.code);
			switch (event.code) {
				case "ArrowUp":
					player.y--;
					break;
				case "ArrowDown":
					player.y++;
					break;
				case "ArrowLeft":
					player.x--;
					break;
				case "ArrowRight":
					player.x++;
					break;
			}
			redraw(roomRows, player);
		});
	}
}, 0);

const height = 5;
const width = 5;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
	<h1 class="text-2xl mb-4">Maze Game</h1>
	<main class="gameArea"></main>
`;
