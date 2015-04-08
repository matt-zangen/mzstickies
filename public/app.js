var app = angular.module('mzStickies', [
	'ngSanitize'
]);

app.controller('StickiesCtrl', StickiesCtrl);

StickiesCtrl.$inject = ['$window'];
function StickiesCtrl ($window) {

	var vm = this;

	vm.saveSticky = saveSticky;
	vm.storeTempSticky = storeTempSticky;

	init();

	function init () {
		vm.stickies = JSON.parse($window.localStorage.getItem('stickies')) || [];
		vm.stickyText = $window.localStorage.getItem('tempSticky') || '';
		if (vm.stickyText) vm.showInput = 1;
	}

	function saveSticky () {
		// minimum length was not required by specs
		// if (!vm.stickyText) return;
		vm.stickies.unshift(vm.stickyText);
		$window.localStorage.setItem('stickies', JSON.stringify(vm.stickies));
	}

	function storeTempSticky () {
		// limit text to 250 characters
		vm.stickyText = vm.stickyText.substr(0, 250);
		$window.localStorage.setItem('tempSticky', vm.stickyText);
	}

}

// filter text for pre-like HTML display
app.filter('toHtml', toHtml);
function toHtml () {

	return function (text) {

		if (!text) return text;

		text = text.replace(/\r?\n\r?/gm, '<br/>');
		text = text.replace(/\s/gm, '\u00A0');

		return text;

	}

}