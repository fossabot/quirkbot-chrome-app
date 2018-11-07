(() => {
	// Init the extension ----------------------------------------------------------
	window.__quirkbotChromeApp = new QuirkbotChromeExtension();
	var inited = false;
	var init = function() {
		if(inited) return;
		inited = true;
		window.__quirkbotChromeApp.init();

	}
	chrome.runtime.onInstalled.addListener(init);
	chrome.runtime.onStartup.addListener(init);
	init();

	// Heartbeats to keep the app alive ---------------------------------------------
	chrome.runtime.onMessage.addListener(function(){});
	setInterval(function (argument) {
		chrome.runtime.sendMessage(chrome.runtime.id, '', function () {});
	}, 5000);

})()
