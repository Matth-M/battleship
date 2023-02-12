export class Ship {
	constructor(length) {
		this.length = length;
		this.timesHit = 0;
	}
	#isSunk = false;

	getLength() {
		return this.length;
	}

	hit() {
		this.timesHit++;
		if (this.timesHit >= this.length) {
			this.#isSunk = true;
		}
	}

	isSunk() {
		return this.#isSunk;
	}
}
