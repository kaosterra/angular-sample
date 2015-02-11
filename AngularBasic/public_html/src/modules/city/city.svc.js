(function () {
	var app = angular.module('cityModule');

	app.factory('cityService',['CRUDService', 'city.context', function (crudService, context) {
			var cityService = crudService.extend(function () {
				this.url = context;
			});
			cityService.init();
			return cityService;
		}]);
})();