import "./style.css";

const height = 5;
const width = 5;


// create room data
// for (let x = 0; x < height; x++) {
// 	for (let y = 0; y < width; y++) {}
// }
const roomRows = [
	[
		{ name: "room1", x:0, y: 0 },
		{ name: "room2" },
		{ name: "room3" },
		{ name: "room4" },
		{ name: "room5" },
	],
	[
		{ name: "room6", x: 0, y: 1 },
		{ name: "room7" },
		{ name: "room8", x: 2, y: 1 },
		{ name: "room9", x: 3, y: 1 },
		{ name: "room10" },
	],
	[
		{ name: "room11" },
		{ name: "room12" },
		{ name: "room13" },
		{ name: "room14" },
		{ name: "room15" },
	],
];

// create room HTML 
let mapHtml = '';
for (const roomRow of roomRows) {
	mapHtml += '<div class="flex gap-2 mb-2">';
	for (const room of roomRow) {
		mapHtml += `<div class="bg-gray-200 w-[5rem] h-[5rem] flex justify-center items-center"><p>${room.name}</p></div>`
	}
	mapHtml += '</div>';
}




document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
<h1 class="text-2xl mb-4">Maze Game</h1>
${mapHtml}
`;
