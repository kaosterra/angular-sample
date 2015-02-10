(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'countryModule']);

	var countryModule = angular.module('countryModule', ['MockModule', 'CrudModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/country', {
				templateUrl: 'src/modules/country/country.tpl.html',
				controller: 'countryCtrl'
			}).otherwise('/');
		}]);

	countryModule.constant('context', 'countries');

	countryModule.config(['context', 'CrudModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);

	countryModule.config(['context', 'MockModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);
})();