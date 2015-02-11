(function () {
	var app = angular.module('countryModule');

	app.factory('countryService',['CRUDService', 'country.context', function (crudService, context) {
			var countryService = crudService.extend(function () {
				this.url = context;
			});
			countryService.init();
			return countryService;
		}]);
})();