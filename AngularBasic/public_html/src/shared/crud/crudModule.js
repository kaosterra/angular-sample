(function () {
	var crud = angular.module('CrudModule', ['restangular']);

	crud.config(['RestangularProvider', function (rp) {
			rp.setBaseUrl('webresources');
			rp.addResponseInterceptor(function (data, operation) {
				if (operation === 'getList') {
					var newResponse = data.records;
					newResponse.totalRecords = data.totalRecords;
					return newResponse;
				}
			});
		}]);
})();