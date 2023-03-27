/*jslint browser: true*/
/*jslint devel: true*/
/*navigator*/
var glossaryWindow = {
	closed: true
};
/*glossaryWindow.closed = true;*/

function open_glossary() {
	'use strict';
	// if the browser is Safari the window needs a different height
	if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
		glossaryWindow = window.open("http://www.ento.csiro.au/biology/fly/flyGlossary.html", "glossaryWindow", "height=582,width=810");
	} else {
		glossaryWindow = window.open("http://www.ento.csiro.au/biology/fly/flyGlossary.html", "glossaryWindow", "height=560,width=810");
	}
}