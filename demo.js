$(document).ready(function() {

	$("#btn").click(showCache);

	function showCache() {

		//alert(applicationCache.status);  
		applicationCache.update();

		var appCache = window.applicationCache;

		switch (appCache.status) {
			case appCache.UNCACHED: // UNCACHED == 0 
				return 'UNCACHED';
			case appCache.IDLE: // IDLE == 1 
				return 'IDLE';
			case appCache.CHECKING: // CHECKING == 2 
				return 'CHECKING';
			case appCache.DOWNLOADING: // DOWNLOADING == 3 
				return 'DOWNLOADING';
			case appCache.UPDATEREADY: // UPDATEREADY == 4 
				appCache.swapCache();
				return 'UPDATEREADY';
			case appCache.OBSOLETE: // OBSOLETE == 5 
				return 'OBSOLETE';
			default:
				return 'UKNOWN CACHE STATUS';
				
		}
	}


	applicationCache.addEventListener("updateready", function() {
		if (confirm("本地缓存已被更新,是否刷新？")) {
			// (3) 手工更新本地缓存 
			applicationCache.swapCache();
			// 重载画面 
			location.reload();
		}
	}, true);



	// function handleCacheEvent(e) {
	// 	//... 
	// }

	// function handleCacheError(e) {
	// 	alert('Error: Cache failed to update!');
	// };
	// // Fired after the first cache of the manifest. 
	// appCache.addEventListener('cached', handleCacheEvent, false);
	// // Checking for an update. Always the first event fired in the sequence. 
	// appCache.addEventListener('checking', handleCacheEvent, false);
	// // An update was found. The browser is fetching resources. 
	// appCache.addEventListener('downloading', handleCacheEvent, false);
	// // The manifest returns 404 or 410, the download failed, 
	// // or the manifest changed while the download was in progress. 
	// appCache.addEventListener('error', handleCacheError, false);
	// // Fired after the first download of the manifest. 
	// appCache.addEventListener('noupdate', handleCacheEvent, false);
	// // Fired if the manifest file returns a 404 or 410. 
	// // This results in the application cache being deleted. 
	// appCache.addEventListener('obsolete', handleCacheEvent, false);
	// // Fired for each resource listed in the manifest as it is being fetched. 
	// appCache.addEventListener('progress', handleCacheEvent, false);
	// // Fired when the manifest resources have been newly redownloaded. 
	// appCache.addEventListener('updateready', handleCacheEvent, false);

});