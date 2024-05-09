//import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import {Router} from './core/router.js'
import {RootComponent} from './components/RootComponent.js'

let router = new Router(document.body, [
	{
		path: "/",
		component: RootComponent,
		store: {
			hoge: "taro"
		}
	}
]);

router.gonextPage(location.pathname);

//document.querySelector('#app').innerHTML = `
//  <div>
//    <a href="https://vitejs.dev" target="_blank">
//      <img src="${viteLogo}" class="logo" alt="Vite logo" />
//    </a>
//    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//    </a>
//    <h1>Hello Vite!</h1>
//    <div class="card">
//      <button id="counter" type="button"></button>
//    </div>
//    <p class="read-the-docs">
//      Click on the Vite logo to learn more
//    </p>
//  </div>
//`
//
//setupCounter(document.querySelector('#counter'))
