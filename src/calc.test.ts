import { calculate} from "./calc";

test("check result value", () => {
	let result = calculate(10, 20);
	expect(result).toBe(30);
});