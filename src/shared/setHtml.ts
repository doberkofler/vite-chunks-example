export const setHtml = (selector: string, value: string): void => {
	const element = document.querySelector(selector);

	if (element) {
		element.innerHTML = value;
	}
};
