(function () {
	var app = angular.module('sportModule');

	app.factory('sportService',['CRUDService', 'sport.context', function (crudService, context) {
			var sportService = crudService.extend(function () {
				this.url = context;
			});
			sportService.init();
			return sportService;
		}]);
})();