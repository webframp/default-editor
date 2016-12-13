'use strict';
module.exports = (() => {
	const env = process.env;

	if (process.platform === 'win32') {
		return env.EDITOR || 'notepad.exe';
	}

	return env.EDITOR || 'vim';
})();
