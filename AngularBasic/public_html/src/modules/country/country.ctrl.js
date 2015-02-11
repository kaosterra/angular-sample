(function(){
	var app = angular.module('countryModule');
	
	app.controller('countryCtrl',['CRUDService', function(crudService){
			this.crudService = crudService.extend(function(){
				
			});
	}]);
})();