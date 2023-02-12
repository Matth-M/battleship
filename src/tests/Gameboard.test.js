import { describe } from "vitest";
import { expect, test } from "vitest";
import { Gameboard } from "../Gameboard";

describe("board creation", () => {
	test("board has correct size", () => {
		const board = new Gameboard(5);
		expect(board.size).toBe(5);
	});

	test("create empty board with correct size", () => {
		const board = new Gameboard(5);
		expect(board.board).toStrictEqual([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]);
	});
});

describe("place ship", () => {
	test("normal placement", () => {
		const board = new Gameboard(5);
		board.placeShip(5, [0, 0]);

		expect(board.board).toStrictEqual([
			[1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]);
	});
	test("place small ship", () => {
		const board = new Gameboard(5);
		board.placeShip(2, [0, 0]);

		expect(board.board).toStrictEqual([
			[1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]);
	});
	test("out of limits", () => {
		// Shouldn't place ship if it is out of bounds
		const board = new Gameboard(5);
		board.placeShip(5, [0, 1]);

		expect(board.board).toStrictEqual([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]);
	});
	test("ship already present on emplacement", () => {
		const board = new Gameboard(5);
		board.placeShip(2, [1, 2]);
		// board.placeShip(3, [1, 2]);
		expect(board.board).toStrictEqual([
			[0, 0, 0, 0, 0],
			[0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]);
	});
});
