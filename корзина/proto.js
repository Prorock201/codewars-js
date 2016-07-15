function () {
	var lineCountVar = 0;
	var openDoor = function openDoor() {
		success = Math.random().toString(36).replace(/[^a-z]+/g, '');
		eval('this["' + success + '"] = true;');
		console.log('');
		console.log('Groan. That\'s the worst "knock knock" joke I\'ve ever heard.');
		console.log('Oh well, I suppose you\'d better come in.');
		console.log('Welcome to the annual meeting of the Knock Knock Joke Society.');
	};
	var lineCount = function lineCount(arg) {
		lineCountVar++;
		if (lineCountVar === 1) {
			console.log('"Harry."');
			console.log('Harry who?');
		} else if (lineCountVar === 2) {
			console.log('"Harry up and open the door, it\'s cold out here!"');
		}
		return lineCountVar;
	};
	var deliverLine = function deliverLine() {
		if (lineCount() === 2) {
			openDoor();
		}
		return deliverLine;
	};
	return function (arg) {
		if (arg && arg === knock) {
			console.log('"Knock knock."');
			console.log('Whos\'s there?');
			return deliverLine;
		}
	};
}).call();;
console.log(Array.prototype.slice.apply(arguments.callee.caller.arguments).toString());
console.log(knock.prototype.constructor.toString());;
;
(function () {
	var Test = global.Test,
	describe = global.describe,
	it = global.it,
	before = global.before,
	after = global.after;Test.expect(this.hasOwnProperty('success') && this[success], "Sorry, that's not the secret knock.");
})();
}
function (arg) {
	if (arg && arg === knock) {
		console.log('"Knock knock."');
		console.log('Whos\'s there?');
		return deliverLine;
	}
}

console.log(Array.prototype.slice.apply(arguments.callee.caller.arguments).toString());
console.log(knock.prototype.constructor.toString());