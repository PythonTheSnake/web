(function() {
	angular.module('utils', []);


	window.primaryApplicatioName = 'AppLavaboomLogin';
	angular.module(primaryApplicatioName, ['lavaboom.api', 'utils', 'ngSanitize','ui.router', 'ui.bootstrap', 'ui.select', 'pascalprecht.translate', 'base64']);
	// = require "../directives/*.js"
	// = require "../services/*.js"

	// = require "./AppLavaboomLogin/configs/*.js"
	// = require "./AppLavaboomLogin/runs/*.js"
	// = require "./AppLavaboomLogin/directives/*.js"
	// = require "./AppLavaboomLogin/services/*.js"
	// = require "./AppLavaboomLogin/controllers/*.js"

})();