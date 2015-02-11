(function () {
	var app = angular.module('countryModule');

	app.controller('countryCtrl', ['countryService', function (countryService) {
			this.crudService = countryService;
			this.crudService.fetchRecords();
		}]);
})();