(function () {
	var app = angular.module('countryModule');

	app.controller('countryCtrl', ['CRUDService', 'context', function (crudService, context) {
			this.crudService = crudService.extend(function () {
				this.url = context;
			});
			this.crudService.createApi();
		}]);
})();