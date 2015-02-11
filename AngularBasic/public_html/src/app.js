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

	sportModule.config(['context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);

	//Configuración módulo country
	var countryModule = angular.module('countryModule', ['CrudModule','MockModule']);

	countryModule.constant('context', 'countries');

	countryModule.config(['context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
	
	//Configuración módulo city
	var cityModule = angular.module('cityModule', ['CrudModule','MockModule']);
	
	cityModule.constant('context', 'cities');

	cityModule.config(['context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
})();