var items = ["iphone5", "iphone6s", "iphone7", "ipad", "惠普打印机", "50元话费卡", "1000元购物券", "惠普笔记本", "三星Note7", "华为S7", "谢谢参与"],
	timer = null,
	flag = 0;

window.onload = function() {
	var play = document.getElementById('play'),
		stop = document.getElementById('stop')

	//开始抽奖
	play.onclick = roll;

	//停止抽奖
	stop.onclick = draw;

	//键盘事件, flag作为开关标志位
	document.onkeyup = function(event) {
		console.log(event.keyCode);
		if (event.keyCode == 13) {
			if (flag==0) {
				roll();
				flag=1;
			} else {
				draw();
				flag=0;
			}
		}
	}

}

function roll() {
	//在开定时器前要先清除定时器，否则点击多次后会越来越快，停不下来。	
	clearInterval(timer);
	timer = setInterval(function() {
		var title = document.getElementById('title');
		var i = Math.floor(Math.random() * items.length);
		title.innerHTML = items[i];
	}, 50);
	var play = document.getElementById('play');
	play.style.background="#999";
}

function draw() {
	clearInterval(timer);
	var play = document.getElementById('play');
	play.style.background="#036";
}