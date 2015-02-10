(function(){
	var app = angular.module('countryModule');
	
	app.controller('countryCtrl',['CRUDService', function(crudService){
			App.Utils.extend(this, crudService);
	}]);
})();