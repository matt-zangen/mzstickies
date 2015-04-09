(function() {

	// APP DEFINITION

	var app = angular.module('mzStickies', [
		// required for ng-bind-html, to santize HTML output
		'ngSanitize'
	]);

	// COMPONENT DEFINITIONS

	app.controller('StickiesCtrl', StickiesCtrl);
	app.filter('toHtml', toHtml);

	// COMPONENT FUNCTIONS

	StickiesCtrl.$inject = ['$window'];
	function StickiesCtrl($window) {

		var vm = this;
		var ls = $window.localStorage;

		// explicitly expose public functions to View-Model
		vm.saveSticky = saveSticky;
		vm.inputChanged = inputChanged;
		vm.removeSticky = removeSticky;
		vm.clearInput = clearInput;

		init();

		function init() {

			// display stickies from localStorage
			vm.stickies = JSON.parse(ls.getItem('stickies')) || [];

			// get persisted input from previous pageload
			vm.stickyText = ls.getItem('tempSticky') || '';

			// show input with persisted input
			if (vm.stickyText) vm.showInput = 1;

		}

		function inputChanged() {

			// limit text to 250 characters
			vm.stickyText = vm.stickyText.substr(0, 250);

			// set persisted input for next pageload
			ls.setItem('tempSticky', vm.stickyText);

		}

		// not in specs
		function clearInput() {

			vm.stickyText = '';
			ls.removeItem('tempSticky');

		}

		function saveSticky() {

			// not in specs
			if (!vm.stickyText) return;

			vm.stickies.unshift(vm.stickyText);
			ls.setItem('stickies', JSON.stringify(vm.stickies));

			// not in specs
			clearInput();

		}

		// not in specs
		function removeSticky(index) {

			vm.stickies.splice(index, 1);
			ls.setItem('stickies', JSON.stringify(vm.stickies));

		}

	}

	// filter text for <pre>-like HTML display
	function toHtml() {

		return function (text) {

			if (!text) return text;

			text = text.replace(/\r?\n\r?/gm, '<br/>');
			text = text.replace(/\s/gm, '\u00A0');

			return text;

		}

	}

})();