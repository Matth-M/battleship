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
		// Check that we can place a ship in this position
		const correctLength = length > 0 && length <= this.size;
		const isInBounds = this.#isInBounds(length, startCoordinates);
		const isSpotFree = this.#spotIsFree(length, startCoordinates);
		if (isInBounds && isSpotFree && correctLength) {
			// Horizontal placement
			for (let i = 0; i < length; i++) {
				this.board[x][y + i] = 1;
			}
		}
	}

	#spotIsFree(length, startCoordinates) {
		const [x, y] = startCoordinates;
		if (this.#isValidCoordinates(startCoordinates)) {
			for (let i = x; i < length; i++) {
				if (this.board[x][i] !== 0) {
					return false;
				}
			}
		}
		return true;
	}

	#isValidCoordinates(coordinates) {
		const [x, y] = coordinates;
		if (x < 0 || x >= this.size) {
			return false;
		} else if (y < 0 || y >= this.size) {
			return false;
		} else {
			return true;
		}
	}

	#isInBounds(length, coordinates) {
		const [x, y] = coordinates;
		if (y + length > this.size) {
			return false;
		} else if (!this.#isValidCoordinates(coordinates)) {
			return false;
		} else return true;
	}
}
