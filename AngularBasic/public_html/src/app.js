(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'countryModule']);

	var userModule = angular.module('userModule', ['MockModule', 'CrudModule']);

	var userModule = angular.module('countryModule', ['MockModule', 'CrudModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/country', {
				templateUrl: 'src/modules/country/country.tpl.html',
				controller: 'countryCtrl'
			}).otherwise('/');
		}]);

	userModule.constant('context', 'users');

	userModule.config(['context', 'CrudModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);

	userModule.config(['context', 'MockModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);
})();