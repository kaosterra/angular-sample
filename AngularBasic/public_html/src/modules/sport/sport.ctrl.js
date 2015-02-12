(function () {
	var app = angular.module('sportModule');

	app.controller('sportCtrl', ['sportService', function (sportService) {
			this.crudService = sportService;
		}]);
})();