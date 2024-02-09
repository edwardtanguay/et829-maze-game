import { IPlayer } from "./interfaces";
import "./style.css";
import { createMapHtml, createPlayer, createTreasure, getRoomRows } from "./tools";

const redraw = (roomRows: any, player: IPlayer, treasure: IPlayer) => {
	const gameArea = document.querySelector<HTMLDivElement>(".gameArea");
	if (gameArea) {
		gameArea.innerHTML = createMapHtml(roomRows, player, treasure);
	}

}

setTimeout(() => {
	const bodyElem = document.querySelector<HTMLBodyElement>("body");
	// const playerElem = document.querySelector<HTMLSpanElement>(".player");

	// redraw
	const roomRows = getRoomRows(height, width);
	const player:IPlayer = createPlayer(height, width);
	const treasure:IPlayer = createTreasure(height, width);

	redraw(roomRows, player, treasure);

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
			redraw(roomRows, player, treasure);
		});
	}
}, 0);

const height = 5;
const width = 5;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
	<h1 class="text-2xl mb-4">Maze Game</h1>
	<main class="gameArea"></main>
`;
