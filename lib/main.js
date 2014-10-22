'use strict';

var self = require('sdk/self'),
	buttons = require('sdk/ui/button/action'),
	tabs = require('sdk/tabs'),
	defaults = require('./defaults.js'),
	button;

button = buttons.ActionButton({
	id: "magento-form-filler",
	label: "Fill Magento Form",
	icon: {
		"16": "./icon_16.png",
		"32": "./icon_32.png",
		"64": "./icon_64.png"
	},
	onClick: handleClick
});

function handleClick(state) {
	var worker = tabs.activeTab.attach({
		contentScriptFile: self.data.url('fillForm.js')
	});
	worker.port.emit('fillForm', defaults.fields);
} 