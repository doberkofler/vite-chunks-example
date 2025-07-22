import {getHtmlElementQuerySelector, setText, setHtml} from './util';

export const render = async (name: string): Promise<void> => {
	console.log(`render "${name}"`);

	const {clock} = await import('./clock');
	const {clockHtml, clockInit} = clock();

	setText('.container h1', `Welcome to page ${name}`);

	setHtml('.container div.clock', clockHtml);
	clockInit();

	getHtmlElementQuerySelector('#btnMenu').addEventListener('click', () => {
		window.location.href = 'index.html';
	});
};
