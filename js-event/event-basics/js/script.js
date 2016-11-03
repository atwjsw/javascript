window.onload = function() {

	var btn4 = document.getElementById('btn4');
	var box3 = document.getElementById('box3');
	var go = document.getElementById('go');


	function showMessage(event) {
		var e = eventUtil.getEvent(event);
		alert(eventUtil.getType(e));
	}

	function showBox(event) {
		alert("这是放按钮的div box3");
	}

	function stopGoto(event) {
		var e = eventUtil.getEvent(event);
		eventUtil.stopPropagation(e);
		eventUtil.preventDefault(e);
	}

	eventUtil.addEventHandler(btn4, "click", showMessage);
	eventUtil.addEventHandler(box3, "click", showBox);
	eventUtil.addEventHandler(go, "click", stopGoto);
}



//eventUtil.removeEventHandler(btn4, "click", showMessage);