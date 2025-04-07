function start() {
	$(".start").hide();
	$(".tehai").show().empty();
	$(".kawa").show();
	$(".sutehai").show();

	const mountain = [];
	const type = ["萬", "筒", "索"];
	for (let i = 0; i < 3; i++) {
		for (let j = 1; j < 10; j++) {
			for (let k = 0; k < 4; k++) {
				mountain.push({
					hainumber: mountain.length,
					name: `${j}${type[i]}`,
					red: j == 5 && k == 0,
					used: false,
				});
			}
		}
	}

	const jihai = ["東", "南", "西", "北", "白", "發", "中"];
	jihai.forEach((n) => {
		for (let k = 0; k < 4; k++) {
			mountain.push({
				hainumber: mountain.length,
				name: n,
				red: false,
				used: false,
			});
		}
	});

	const haipai = [];
	for (let i = 0; i < 13; i++) {
		const tehai = mountain.filter((n) => !n.used).random();
		tehai.used = true;
		haipai.push(tehai);
	}

	haipai.sort((a, b) => a.hainumber - b.hainumber);
	console.log(haipai);
	haipai.forEach((n) => {
    });
}

//sawaranai
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};
