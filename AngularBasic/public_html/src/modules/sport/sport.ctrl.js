(function () {
	var app = angular.module('sportModule');

	app.controller('sportCtrl', [ '$scope', 'CRUDUtils',function ( $scope, CRUDUtils) {
                this.url = 'sports';
		CRUDUtils.extendCtrl(this, $scope);	
		}]);
})();