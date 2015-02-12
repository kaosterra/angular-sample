(function () {
	var app = angular.module('countryModule');

	app.controller('countryCtrl', ['countryService', '$scope', function (countryService, $scope) {
			this.crudService = countryService;
			$scope.country = countryService.modelRef;
		}]);
})();