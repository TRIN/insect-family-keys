function initnav(obj) {

	var av = navigator.appVersion.toLowerCase();
	var isIE = (navigator.appName == "Microsoft Internet Explorer");

	if (document.getElementById && document.getElementById(obj)) {
		navRoot = document.getElementById(obj);
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			// make sure drop downs don't extend past 990
			/*if (node.offsetLeft > 775) {
				var adjust = 775-node.offsetLeft;
				for (var j=0; j<node.childNodes.length; j++) {
					if (node.childNodes[j].nodeName.toUpperCase() == 'UL') {
						node.childNodes[j].style.left = adjust+'px';
					}
				}
			}*/
			node.onmouseover = function() {
				if (this.className.indexOf('lo') != -1) {
					if (this.className.indexOf('solid') != -1) {
						this.className = 'hi solid';
					} else {
						this.className = 'hi';
					}
				}
			}
			node.onmouseout = function() {
				if (this.className.indexOf('hi') != -1) {
					if (this.className.indexOf('solid') != -1) {
						this.className = 'lo solid';
					} else {
						this.className = 'lo'
					}
				}
			}
		}
	}
	
	
}
/* end nav */
