console.log("starting index.ts...");
import { calculate } from "./calc.js";

function printMessage(msg: string): void {
	console.log(`Message: ${msg}`);
}

const message = "Hello, TypeScript";
printMessage(message);


const total = calculate(102, 100);
console.log(`Total: ${total}`);

const { age: MyName } = { age: "Bob"};
console.log(`MyName: ${MyName}`);