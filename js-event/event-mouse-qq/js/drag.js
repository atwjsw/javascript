function getByClassName(clazzName, parentId) {
	var oParent=parent?document.getElementById(parentId):document;
	eles = [];
	elements = oParent.getElementsByTagName('*');
	for (var i=0; i<elements.length; i++) {
		if (elements[i].className == clazzName) {
			eles.push(elements[i]);
		}
	}
	return eles;
}

/*拖拽要完成三个步骤
1. 在标题区域按下
2. 要页面中移动
3. 释放鼠标时停止移动
*/

window.onload = drag;

function drag() {
	var oTitle = getByClassName("login_logo_webqq", "loginPanel")[0];
	
	//点击拖拽登录面板
	oTitle.onmousedown = fndown;
	oTitle.onmouseup = fnup;

	//关闭登录面板
	var oClose = document.getElementById("ui_boxyClose");
	oClose.onclick = function() {
		document.getElementById("loginPanel").style.display="none";	
	}

	
	//获取操作所需页面元素
	var loginStatePanel = document.getElementById('loginStatePanel'),
		loginState = document.getElementById('loginState'),
		//lis = getByClassName('statePanel_li', 'loginStatePanel'),
		lis = loginStatePanel.getElementsByTagName('li');
		stateTxt = document.getElementById('login2qq_state_txt');
		loginStateShow = document.getElementById('loginStateShow');

	//点击用户状态，显示状态面板
	loginState.onclick = function(event) {
		loginStatePanel.style.display = "block";
		event = event || window.event;
			if (event.stopPropogation) {
				event.stopPropogation();
			} else {
				event.cancelBubble = true;
			}
	}

	//鼠标滑过状态面板选项，选项颜色变化
	for (var i=0;i<lis.length;i++) {
		lis[i].onmouseover = function() {
			//console.log(i); //不能用i，因为绑定后，触发时这个i已经循环完值是6了。
			this.style.background = '#567';
		}
		lis[i].onmouseout = function() {
			//console.log(i); //不能用i，因为绑定后，触发时这个i已经循环完值是6了。
			this.style.background = '#fff'; 
		}
		//点击状态面板选项，关闭状态选项面板，改变状态面板显示，文字和图标
		lis[i].onclick = function(event) {
			//关闭状态选项面板
			loginStatePanel.style.display = "none"; 
			//由于事件冒泡，关闭后又显示了，需要阻止冒泡
			event = event || window.event;
			if (event.stopPropogation) {
				event.stopPropogation();
			} else {
				event.cancelBubble = true;
			}

			//改变状态面板显示文字			
			//console.log(getByClassName('stateSelect_text', this.id)[0].innerHTML);
			//console.log(this.id);
			stateTxt.innerHTML = getByClassName('stateSelect_text', this.id)[0].innerHTML;

			//改变状态面板显示图标
			loginStateShow.className='';
			loginStateShow.className='login-state-show ' + this.id;

		}
	}

	//点击页面任一位置，关闭状态选项面板
	document.onclick = function() {
		loginStatePanel.style.display = "none";
	}

}

function fndown (event) {
	e = event || window.event;	
	var oDrag = document.getElementById("loginPanel");	
	var offsetX = e.clientX - oDrag.offsetLeft;
	var offsetY = e.clientY - oDrag.offsetTop;

	//点击登录面板后，鼠标在页面上移动，登录面板跟着移动
	document.onmousemove = function(event) {
		e = event || window.event;
		document.title = (e.clientX - offsetX) + "  " + (e.clientY - offsetY);		
		var disX = e.clientX - offsetX;
		var disY = e.clientY - offsetY;		
		var winW = document.documentElement.clientWidth || document.body.clientWidth;
		var winH = document.documentElement.clientHeight || document.body.clientHeight;
		var maxW = winW - oDrag.offsetWidth-10;
		var maxH = winH - oDrag.offsetHeight;
		if (disX<0) {disX=0;}
		if (disY<10) {disY=10;}
		if (disX>maxW) {disX=maxW;}
		if (disY>maxH) {disY=maxH;}
		oDrag.style.left = disX +"px";
		oDrag.style.top = disY +"px";
	}
}

function fnup (event) {
	document.onmousemove = null;
}
