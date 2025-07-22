export const setText = (selector: string, value: string): void => {
	const element = document.querySelector(selector);

	if (element) {
		element.textContent = value;
	}
};
