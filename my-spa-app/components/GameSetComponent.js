import {Component} from '../core/component.js'

export class GameSetComponent extends Component {
	constructor(router, parameters, store) {
		super(router, parameters, store);
		this.goBackToHomeButton = this.findElement('button.goBackToHome')
		this.goBackToHomeButton.onclick = e => this.ongoBackToHomeButtonClick();
	}
	ongoBackToHomeButtonClick() {
		this.router.gonextPage('/');
	}
	get html() {
		return `
			<h1> Game Set!</h1> <div>
				<button class="goBackToHome">Go Back to Home!</button>
			</div>`;
	}

};
