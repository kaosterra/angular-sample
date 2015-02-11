(function () {
	var app = angular.module('cityModule');

	app.controller('cityCtrl', ['CRUDService', 'context', function (crudService, context) {
			this.crudService = crudService.extend(function () {
				this.url = context;
			});
			this.crudService.createApi();
		}]);
})();