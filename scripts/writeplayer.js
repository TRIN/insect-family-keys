
//function writeFlash() {

//var flashHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="975px" height="520px" id="glossary_20080514"><br />'
//+ '<param name="allowScriptAccess" value="sameDomain" />'
//+ '<param name="movie" value="swf/glossary_20080514.swf" />'
//+ '<param name="quality" value="high" />'
//+ '<param name="bgcolor" value="#ffffff" />'
//+ '<embed src="swf/glossary_20080514.swf" quality="high" bgcolor="#ffffff" width="975px" height="520px" name="glossary_20080514" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'
//+ '</object>';

//document.write(flashHTML);

//}

function writeApplet(keyName) {
	var pagesize = getPageSize();
	var y = pagesize[1];
	var appletHTML = '<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" type="application/x-java-applet;version=1.5" width="940px" height="' + y +'">'
    + '<param name="archive" value="lucid_player/Lucid3PlayerApplet.jar,lucid_player/log4j-1.2.13.jar"/>'
    + '<param name="code" value="com.cbit.lucid.player.application.LucidPlayerApplet.class"/>'
    + '<param name="key" value="key/' + keyName + '.lkc4"/>'
    + '<param name="image" value="false"/>'
    + '<param name="progressbar" value="true"/>'
    + '<param name="boxmessage" value="Loading Lucid3 Player Applet..."/>'
    + '<param name="boxbgcolor" value="#ffffff"/>'
    + '<comment>'
    + '<embed type="application/x-java-applet;version=1.5" archive="lucid_player/Lucid3PlayerApplet.jar,lucid_player/log4j-1.2.13.jar" code="com.cbit.lucid.player.application.LucidPlayerApplet.class" width="940px" height="' + y + '" key="key/key_Coleoptera-world.lkc4">'
    + '<noembed><p>You need Java v1.5 or greater. Please see http://www.java.com/</p></noembed>'
    + '</embed>'
    + '</comment>'
    + '</object>';

	document.write(appletHTML);
}

function writeKey(keyID) {
	var ID_arr = [43,9,14,11,29,10,12,13,2,36,3,32,35,17,42,8,6,16,15,4,1,27,28,5,34,37];
	var PAGE_arr = ['blattodea_key.html', 'diptera_sub_groups.html', 'diptera-lower_diptera_of_australia.html', 'diptera-lower_brachycera_lower_cyclo.html', 'diptera-australian_tabanidae.html', 'diptera-acalyptrata_of_australia.html', 'diptera-calyptrata_of_australia.html', 'diptera-wingless_flies_of_australia.html', 'thysanura_families_and_subfamilies.html', 'ephemeroptera_families.html', 'mantodea_families_of_australia.html', 'plecoptera_key.html', 'phasmatodea_families_of_australia.html', 'othoptera_families_of_australia.html', 'phthiraptera_families.html', 'hemiptera-heteroptera_families_of_aust.html', 'thysanoptera_families_of_australia.html', 'megaloptera_families_of_australia.html', 'neuroptera_families_of_australia.html', 'mecoptera_families_of_australia.html', 'siphonaptera_families_of_australia.html', 'hymenoptera_of_australasia.html', 'hymenoptera_subkey_chalc_Mymaro.html', 'orders_of_australia.html', 'larvae_of_the_holometabola.html', 'coleoptera'];
	var keyPage = ''; 	
	for (var i=0; i<ID_arr.length; i++) {
		if (keyID == ID_arr[i]) {
			keyPage = PAGE_arr[i];
			break;
		}
}
    var browserIs = new detect();    
	var pagesize = getPageSize();
	var y = pagesize[1];
	if (keyPage == 'coleoptera') {
		var keyHTML = "<iframe src='https://keyserver.lucidcentral.org/key-server/player.jsp?keyId=40' frameborder='0' height='" + y + "' marginheight='0' marginwidth='0' name='key' scrolling='auto' width='950'></iframe>";
	}else{
		var keyHTML = "<iframe src='https://keys.lucidcentral.org/keys/v3/csiro/what_bug_is_that/" + keyPage + "' frameborder='0' height='" + y + "' marginheight='0' marginwidth='0' name='key' scrolling='auto' width='950'></iframe>";
	}
    var safariHTML = "<iframe src='https://keys.lucidcentral.org/keys/v3/csiro/what_bug_is_that/" + keyPage + "' frameborder='0' height='" + y + "' marginheight='0' marginwidth='0' name='key' scrolling='auto' width='950'></iframe>";
   if (browserIs.isSafari && !browserIs.isChrome) {
       document.write(safariHTML);
    }
    else {
	    document.write(keyHTML);
	}
}

function getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function detect() {
	// simplify things
	var agent 	= navigator.userAgent.toLowerCase();
							
	// detect browser
	this.isSafari	= (agent.indexOf('safari') != -1);
	//this.isSafari2 = (this.isSafari && (parseFloat(agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).substring(0,agent.substring(agent.indexOf("applewebkit/")+"applewebkit/".length,agent.length).indexOf(' '))) >=  300));
	this.isOpera	= (agent.indexOf('opera') != -1);
	this.isNN		= (agent.indexOf('netscape') != -1);
	this.isIE		= (agent.indexOf('msie') != -1);
	this.isChrome	= (agent.indexOf('chrome') != -1);
}