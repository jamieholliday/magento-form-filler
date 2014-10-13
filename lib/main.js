'use strict';

var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
	id: "magento-form-filler",
	label: "Fill Magento Form",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

var handleClick = function(state) {
	
} 