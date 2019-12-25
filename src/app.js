import App from './components/App.svelte';

const sw = navigator.serviceWorker;
if (sw) {
    sw.register('./sw.js').then(() => {
        console.log('service worker registered!');
    });
}

const app = new App({
    target: document.body,
    props: {},
});

export default app;