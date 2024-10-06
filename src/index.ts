export {};
class A {
	private _date = new Date();
	getDate(): Date {
		return this._date;
	}

	getArrowDate = () => {
		return this.date;
	}

	get date(): Date {
		return this._date;
	}

	set date(newDate: Date) {
		this._date = newDate;
	}
}

const a = new A();
a.date = new Date();
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(A));
console.log(A.prototype);
