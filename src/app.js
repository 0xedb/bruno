import App from './components/App.svelte'
import serviceWorker from './includeSw'


serviceWorker()

const app = new App({
    target: document.body,
    props: {
    }
})