(function(){
	var app = angular.module('cityModule');
	
	app.controller('cityCtrl',['CRUDService', function(crudService){
			this.crudService = crudService.extend(function(){
				
			});
	}]);
})();