(function () {
	var app = angular.module('sportModule');

	app.controller('sportCtrl', ['CRUDService', 'context', function (crudService, context) {
			this.crudService = crudService.extend(function () {
				this.url = context;
			});
			this.crudService.createApi();
		}]);
})();