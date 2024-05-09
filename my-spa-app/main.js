//import './style.css'
import {Router} from './core/router.js'
import {RootComponent} from './components/RootComponent.js'
import {GameComponent} from './components/GameComponent.js'
import {GameSetComponent} from './components/GameSetComponent.js'

let router = new Router(document.body, [
	{
		path: "/",
		component: RootComponent,
		store: {}
	},
	{
		path: "/game",
		component: GameComponent,
		store: {}
	},
	{
		path: "/game-set",
		component: GameSetComponent,
		store: {}
	}
]);

router.gonextPage(location.pathname);
