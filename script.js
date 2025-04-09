const mountain = [];
const haipai = [[]];
function start() {
	$(".start").hide();
	$(".tehai").show().empty();
	$(".kawa").show();
	$(".sutehai").show();

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

	for (let i = 0; i < 13; i++) {
		const tehai = mountain.filter((n) => !n.used).random();
		tehai.used = true ;
		haipai[0].push(tehai);
	}

	haipai[0].sort((a, b) => a.hainumber - b.hainumber);

	$(".tehai:eq(0)").empty();
	haipai[0].forEach((n, m) => {
		haipai[0][m].src = `./0/${n.type}_${n.number}${
			n.number == 5 ? (n.red ? "_1" : "_0") : ""
		}.gif`;
		$(".tehai:eq(0)").append(
			`<img class="hai" onclick="sute(${haipai[0][m].hainumber})" src="${haipai[0][m].src}" />`
		);
	});
}

let shohai = true;
let tahai = false;

function Tsumo() {
	if (tahai) return;
	tahai = true
	shohai = false
	const tsumo = mountain.filter((n) => !n.used).random();
	tsumo.used = true;
	tsumo.src=`./0/${
			tsumo.type
		}_${tsumo.number}${
			tsumo.number == 5 ? (tsumo.red ? "_1" : "_0") : ""
		}.gif`
	$(".tsumo").html(
		`<img class="hai"  onclick="sute(${tsumo.hainumber})" src="${tsumo.src}" />`
	);
	haipai[0].push(tsumo);	
}

function sute(n) {
	if (shohai) return;
	shohai = true
	tahai = false
	const index = haipai[0].findIndex((m) => m.hainumber == n);
	$(".river:eq(0)").append(`<img src="${haipai[0][index].src}" />`);
	haipai[0].splice(index, 1);
	haipai[0].sort((a, b) => a.hainumber - b.hainumber);

	$(".tehai:eq(0)").empty();
	haipai[0].forEach((n, m) => {
		haipai[0][m].src = `./0/${n.type}_${n.number}${
			n.number == 5 ? (n.red ? "_1" : "_0") : ""
		}.gif`;
		$(".tehai:eq(0)").append(
			`<img class="hai" onclick="sute(${haipai[0][m].hainumber})" src="${haipai[0][m].src}" />`
		);
	});
	if(mountain.filter((n) => !n.used).random().length == 0 ){
		Ryukyoku()
	}
	else{
	Tsumo();
	}
	
}

//Ryukyoku(){
	
//}


//sawaranai
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};
