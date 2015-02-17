(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule','countryModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sport', {
				templateUrl: 'src/modules/sport/sport.tpl.html'
			}).when('/country', {
				templateUrl: 'src/modules/country/country.tpl.html'
			}).otherwise('/');
		}]);

	//Configuración módulo sport
	var sportModule = angular.module('sportModule', ['CrudModule', 'MockModule']);

	sportModule.constant('sport.context', 'sports');

	sportModule.config(['sport.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
	
	//Configuración módulo sport
	var sportModule = angular.module('countryModule', ['CrudModule', 'MockModule']);

	sportModule.constant('country.context', 'countries');

	sportModule.config(['country.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
})();