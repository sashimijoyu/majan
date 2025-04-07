function start() {
	$(".start").hide();
	$(".tehai").show().empty();
	$(".kawa").show();
	$(".sutehai").show();

	const mountain = [];
	const type = ["萬", "筒", "索"];
	//i: 牌の種類(0: 萬子、1: 筒子、2: 索子、3: 風牌、4: 字牌)
	//j: 数字
	for (let i = 0; i < 3; i++) {
		for (let j = 1; j < 10; j++) {
			for (let k = 0; k < 4; k++) {
				mountain.push({
					type: i,
					number: j,
					hainumber: mountain.length,
					name: `${j}${type[i]}`,
					red: j == 5 && k == 0,
					used: false,
				});
			}
		}
	}

	const kazehai = ["東", "南", "西", "北"];
	kazehai.forEach((n, m) => {
		for (let k = 0; k < 4; k++) {
			mountain.push({
				type: 3,
				number: m + 1,
				hainumber: mountain.length,
				name: n,
				red: false,
				used: false,
			});
		}
	});

	const jihai = ["白", "發", "中"];
	jihai.forEach((n, m) => {
		for (let k = 0; k < 4; k++) {
			mountain.push({
				type: 4,
				number: m + 1,
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

	haipai.sort((a, b) => b.hainumber - a.hainumber);
	console.log(haipai);
	$(".tehai:eq(0)").empty()
	haipai.forEach((n, m) => {
		haipai[m].src = `./0/${n.type}_${n.number}${
			n.number == 5 ? (n.red ? "_1" : "_0") : ""
		}.gif`;
		$(".tehai:eq(0)").append(`<img class="hai" src="${haipai[m].src}" />`)
	});
}

//sawaranai
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};
