const sw = () => {
	const sw = navigator.serviceWorker;
	if (sw) {
		sw.register('./sw.js').then(() => {
			console.log('service worker registered');
		});
	}
};

export default sw;
