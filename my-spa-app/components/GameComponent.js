import {Component} from '../core/component.js'

export class GameComponent extends Component {
	constructor(router, parameters, store) {
		super(router, parameters, store);
		this.goResultButton = this.findElement('button.goResult');
		this.goResultButton.onclick = e => this.ongoResultButtonClick();
	}
	ongoResultButtonClick() {
		this.router.gonextPage('/game-set');
	}
	get html() {
		return `
			<h1> Playing PON Game !</h1> <div>
				<button class="goResult">Go Result!</button>
			</div>`;
	}

};