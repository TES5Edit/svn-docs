const EXPAND_ALL_TEXT = "Expand All";
const COLLAPSE_ALL_TEXT = "Collapse All";

function toggleAll(evt) {
	const button = evt.target;

	if (button.textContent === EXPAND_ALL_TEXT) {
		button.textContent = COLLAPSE_ALL_TEXT;
	} else {
		button.textContent = EXPAND_ALL_TEXT;
	}

	const sections = button.parentElement.querySelectorAll('details');
	for (const section of sections) {
		section.open = !section.open;
	}
}

function setUpEventListeners() {
	const buttons = document.getElementsByClassName('ctrl-all');
	for (const button of buttons) {
		button.addEventListener('click', toggleAll);
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', setUpEventListeners);
} else {
	setUpEventListeners();
}
