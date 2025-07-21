export const getHtmlElementQuerySelector = (selector: string): HTMLElement => {
	const element = document.querySelector(selector);

	if (!element) {
		throw new Error(`Selector "${selector}" does not exist`);
	}

	if (!(element instanceof HTMLElement)) {
		throw new Error(`Selector "${selector}" is not a HTMLElement`);
	}

	return element;
};
