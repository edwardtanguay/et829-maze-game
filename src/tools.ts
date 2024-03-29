import { IPlayer } from "./interfaces";
import * as tools from "./tools";

export const getRoomRows = (height: number, width: number) => {
	const roomRows = [];
	let roomNumber = 1;
	for (let x = 0; x < height; x++) {
		const roomRow = [];
		for (let y = 0; y < width; y++) {
			const room = {
				number: roomNumber,
				name: `Room ${roomNumber}`,
			};
			roomRow.push(room);
			roomNumber++;
		}
		roomRows.push(roomRow);
	}
	return roomRows;
};

export const createMapHtml = (
	roomRows: any,
	player: IPlayer,
	treasure: IPlayer
) => {
	let mapHtml = "";
	let y = 0;
	for (const roomRow of roomRows) {
		mapHtml += '<div class="flex gap-2 mb-2">';
		let x = 0;
		for (const _room of roomRow) {
			let roomText = "";
			if (treasure.y === y && treasure.x === x) {
				roomText = `<span class="treasure">${treasure.icon}</span>`;
			}
			if (player.y === y && player.x === x) {
				roomText = `<span class="player">${player.icon}</span>`;
			}
			mapHtml += `<div class="bg-gray-200 w-[5rem] h-[5rem] flex justify-center items-center"><p>${roomText}</p></div>`;
			x++;
		}
		mapHtml += "</div>";
		y++;
	}
	return mapHtml;
};

export const getRandomNumber = (start: number, end: number) => {
	const range = end - start;
	return Math.floor(Math.random() * (range + 1)) + start;
};

export const createPlayer = (height: number, width: number) => {
	return {
		name: "Moving Man",
		x: tools.getRandomNumber(0, height - 1),
		y: tools.getRandomNumber(0, width - 1),
		icon: "P",
	};
};

export const createTreasure = (height: number, width: number) => {
	return {
		name: "Treasure",
		x: tools.getRandomNumber(0, height - 1),
		y: tools.getRandomNumber(0, width - 1),
		icon: "T",
	};
};
