export const wls = priceArray => {
	let ans = 0;
	priceArray.forEach((p, i) => {
		let invArr = priceArray.slice(i + 1, priceArray.length);
		invArr.forEach(e => {
			p - e > ans ? (ans = p - e) : ans;
		});
	});

	return ans;
};
