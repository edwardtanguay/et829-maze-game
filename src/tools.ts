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

export const createMapHtml = (roomRows: any) => {
	let mapHtml = "";
	for (const roomRow of roomRows) {
		mapHtml += '<div class="flex gap-2 mb-2">';
		for (const room of roomRow) {
			mapHtml += `<div class="bg-gray-200 w-[5rem] h-[5rem] flex justify-center items-center"><p>${room.name}</p></div>`;
		}
		mapHtml += "</div>";
	}
	return mapHtml;
};
