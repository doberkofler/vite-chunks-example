export const setTextContent = (selector: string, text: string): void => {
	const element = document.querySelector(selector);

	if (element) {
		element.textContent = text;
	}
};
