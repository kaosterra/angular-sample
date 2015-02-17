(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule', 'countryModule']);

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
	var countryModule = angular.module('countryModule', ['CrudModule', 'MockModule']);

	countryModule.constant('country.context', 'countries');

	countryModule.config(['country.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
	
	countryModule.run(['$httpBackend', 'country.context','MockModule.mockRecords', function ($httpBackend, context, mockRecords) {
			$httpBackend.whenGET('webresources/'+context+'/mostPopulated').respond(function (method, url, data) {
				var top;
				var collection = mockRecords[context];
				for(var i in collection){
					if(!top && collection[i].population){
						top = collection[i];
					}else{
						if (collection[i].population && top.population < collection[i].population) {
							top = collection[i];
						}
					}
				}
				return [200, top || {}, {}];
			});
		}]);
})();