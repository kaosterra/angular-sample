(function(){
	var app = angular.module('sportModule');
	
	app.controller('sportCtrl',['CRUDService', function(crudService){
			this.crudService = crudService.extend(function(){
				
			});
	}]);
})();