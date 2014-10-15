'use strict';

var processSelect = function(el, val){
    for(var i = 0, l = el.length; i < l; i++ ){
        if( el.options[i].value.toLowerCase() === val ||
            el.options[i].title.toLowerCase() === val ||
            el.options[i].innerHTML.toLowerCase() === val ){
            el.selectedIndex = i;
        }
    }
},
processElement = function(elem, value){
    elem.focus();
    if(elem.tagName.toLowerCase() === 'input'){
        elem.value = value;
    } else if(elem.tagName.toLowerCase() === 'select') {
        processSelect(elem, value.toLowerCase());
    }
    elem.blur();
},
fillForm = function(prefs){
    Object.keys(prefs).forEach(function(name){
        [].slice.call(document.querySelectorAll('[name*="'+ name +'"]')).forEach(function(elem){
            processElement(elem, prefs[name]);
        });
    });
    [].slice.call(document.querySelectorAll('[name^="shipping"]')).forEach(function(elem){
        if(prefs[elem.name]){
            processElement(elem, prefs[elem.name]);
        }
    });
};

self.port.on('fillForm', function(prefs) {
	fillForm(prefs);
});
