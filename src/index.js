module.exports = function reverse (n) {
	if (n < 0 | n > 9) {
		let a = [];
		let r = "";
		for (let i = Array.from(Math.abs(n).toString()).length - 1; i >= 0; i -= 1) {
			a.push(Array.from(Math.abs(n).toString())[i]);
		}
		for (let i = 0; i < a.length; i += 1) {
			r += a[i];
		}
		return Number(r);
	}  else {
		return n;
	}
}
