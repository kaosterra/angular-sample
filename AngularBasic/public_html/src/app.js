(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule','countryModule','cityModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sport', {
				templateUrl: 'src/modules/sport/sport.tpl.html'
			}).when('/country', {
				templateUrl: 'src/modules/country/country.tpl.html'
			}).when('/city', {
				templateUrl: 'src/modules/city/city.tpl.html'
			}).otherwise('/');
		}]);
	
	//Configuración módulo sport
	var sportModule = angular.module('sportModule', ['CrudModule','MockModule']);
	
	sportModule.constant('sport.context', 'sports');

	sportModule.config(['sport.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);

	//Configuración módulo country
	var countryModule = angular.module('countryModule', ['CrudModule','MockModule']);

	countryModule.constant('country.context', 'countries');

	countryModule.config(['country.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
	
	//Configuración módulo city
	var cityModule = angular.module('cityModule', ['CrudModule','MockModule']);
	
	cityModule.constant('city.context', 'cities');

	cityModule.config(['city.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
})();