(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule','countryModule','cityModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sport', {
				templateUrl: 'src/modules/sport/sport.tpl.html',
				controller: 'sportCtrl',
				controllerAs: 'sportCtrl'
			}).when('/country', {
				templateUrl: 'src/modules/country/country.tpl.html',
				controller: 'countryCtrl',
				controllerAs: 'countryCtrl'
			}).when('/city', {
				templateUrl: 'src/modules/city/city.tpl.html',
				controller: 'cityCtrl',
				controllerAs: 'cityCtrl'
			}).otherwise('/');
		}]);
	
	//Configuración módulo sport
	var sportModule = angular.module('sportModule', ['CrudModule','MockModule']);
	
	sportModule.constant('context', 'sports');

	sportModule.config(['context', 'CrudModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);

	sportModule.config(['context', 'MockModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);

	//Configuración módulo country
	var countryModule = angular.module('countryModule', ['CrudModule','MockModule']);

	countryModule.constant('context', 'countries');

	countryModule.config(['context', 'CrudModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);

	countryModule.config(['context', 'MockModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);
	
	//Configuración módulo city
	var cityModule = angular.module('cityModule', ['CrudModule','MockModule']);
	
	cityModule.constant('context', 'cities');

	cityModule.config(['context', 'CrudModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);

	cityModule.config(['context', 'MockModule.urlProvider', function (context, urlProvider) {
			urlProvider.setUrlParameters(context);
		}]);
})();