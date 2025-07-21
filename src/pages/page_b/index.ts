import {getHtmlElementQuerySelector, setTextContent} from '../../shared/util';
import './index.css';

const render = () => {
	setTextContent('.container h1', 'Welcome to Page B');

	getHtmlElementQuerySelector('#btnMenu').addEventListener('click', () => {
		window.location.href = 'index.html';
	});
};

render();
