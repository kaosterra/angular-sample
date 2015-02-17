(function () {
	var app = angular.module('countryModule');

	app.controller('countryCtrl', ['$scope', 'CRUDUtils', 'country.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
			this.getMostPopulated = function () {
				this.api.customGET('mostPopulated').then(function(data){
					alert(JSON.stringify(data.plain()));
				});;
			};
		}]);
})();