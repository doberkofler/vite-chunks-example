import './global.css';

declare global {
	interface Window {
		myConfig: {
			debug: boolean;
		};
	}
}

window.myConfig = {
	debug: true,
};
