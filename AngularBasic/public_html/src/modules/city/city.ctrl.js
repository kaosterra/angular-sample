(function () {
	var app = angular.module('cityModule');

	app.controller('cityCtrl', ['cityService', function (cityService) {
			this.crudService = cityService;
			this.crudService.fetchRecords();
		}]);
})();