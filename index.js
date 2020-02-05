'use strict';

// Finds the default text editor based on the update-alternatives system
// on Debian based systems.
const find_editor_alternative = () => {
  // Does the symbolic link exist?
  if (fs.existsSync('/usr/bin/editor')) {
    return fs.realpathSync('/usr/bin/editor');
  }

  // It doesn't exist on any linux distribution, unfortunately.
  return undefined;
};

module.exports = (() => {
	const env = process.env;

	if (process.platform === 'win32') {
		return env.EDITOR || 'notepad.exe';
	}

  if (process.platform === 'linux') {
    return env.EDITOR || find_editor_alternative() || 'vim';
  }

	return env.EDITOR || 'vim';
})();
