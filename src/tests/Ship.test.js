import { expect, test } from "vitest";
import { Ship } from "../Ship";

test("hit", () => {
	const ship = new Ship(3);
	ship.hit();
	expect(ship.timesHit).toBe(1);
});

test("isSunk", () => {
	const ship = new Ship(3);
	ship.hit();
	ship.hit();
	ship.hit();
	expect(ship.isSunk()).toBe(true);
});
