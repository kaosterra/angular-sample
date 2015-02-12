(function () {
	var app = angular.module('cityModule');

	app.controller('cityCtrl', ['cityService', '$scope', function (cityService, $scope) {
			this.crudService = cityService;
			$scope.city = cityService.cache;
		}]);
})();