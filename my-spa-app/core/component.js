export class Component {
	constructor() {
		this.store = null;
		this.router = null;
		this.element = Component.createElementFromHTML(this.html, this.cotainerTag);
		this.element.classList.add('component');
	}
	
	onEnterForeground(){
	}

	get containerTag() {
		return 'div';
	}

	get html() {}

	findElement(query) {
		return this.element.querySelector(query);
	}

	findElements(query) {
		let nodeList = this.element.querySelectorAll(query);
		return Array.from(nodeList, (element) => {
			if (element instanceof HTMLElement)	{
				return (element);
			}
			throw 'findElements: Some element of Query are not HTMLElement.';
		});
	}

	static createElementFromHTML(html, containerTag) {
		let new_element = document.createElement(containerTag);
		new_element.innerHTML = html.trim();
		// first_element = new_element.firstChild;だったけど、全部入れたくないか？
		let first_element = new_element;
		if (first_element instanceof HTMLElement) {
			return first_element;
		}
		throw 'createElementFromHTML: First element of new_element is not HTMLElement.';
	}
}