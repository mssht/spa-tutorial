import {Component} from '../core/component.js'

export class RootComponent extends Component {
	constructor(router, parameters, store) {
		super(router, parameters, store);
		this.gameStartButton = this.findElement('button.gameStart')
		this.gameStartButton.onclick = e => this.onGameStartButtonClick();
	}
	onGameStartButtonClick() {
		this.router.nextPage('/sample');
	}
	get html() {
		return `
			<h1> Welcome to PON Game !</h1> <div>
				<button class="gameStart">Game Start!</button>
			</div>`;
	}

};
