(function () {
	var app = angular.module('sportModule');

	app.controller('sportCtrl', ['sportService', '$scope', function (sportService, $scope) {
			this.crudService = sportService;
			$scope.sport = sportService.cache;
		}]);
})();