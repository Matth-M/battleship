export class Gameboard {
	constructor(size) {
		this.size = size;
		this.board = [];
		for (let i = 0; i < this.size; i++) {
			const line = [];
			for (let j = 0; j < this.size; j++) {
				line.push(0);
			}
			this.board[i] = line;
		}
	}
	placeShip(length, startCoordinates) {
		const [x, y] = startCoordinates;
		const isInBounds = y + length <= this.size;
		const isFree = this.#emplacementIsFree(length, startCoordinates);
		if (isInBounds && isFree) {
			// Horizontal placement
			for (let i = 0; i < length; i++) {
				this.board[x][i + y] = 1;
			}
		}
	}

	#emplacementIsFree(length, startCoordinates) {
		const [x, y] = startCoordinates;
		for (let i = x; i < length; i++) {
			if (this.board[x][i] !== 0) {
				return false;
			}
		}
		return true;
	}
}
