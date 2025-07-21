import {getHtmlElementQuerySelector, setTextContent} from '../../shared/util';
import './index.css';

const render = () => {
	console.log('page_a.render');

	setTextContent('.container h1', 'Welcome to Page A');

	getHtmlElementQuerySelector('#btnMenu').addEventListener('click', () => {
		window.location.href = 'index.html';
	});
};

render();
