(function () {
	var crud = angular.module('CrudModule');

	crud.service('CRUDService', ['Restangular', function (RestAngular) {
			var self = this;
			this.currentRecord = {};
			this.editMode = false;
			this.records = [];
			var api;
			this.createApi = function(){
				api = RestAngular.all(this.url);
			};
			this.fetchRecords = function () {
				api.getList().then(function (data) {
					self.records = data;
					console.log(data);
					self.currentRecord = {};
					self.editMode = false;
				});
			};
			this.createRecord = function () {
				self.editMode = true;
				self.currentRecord = {};
			};
			this.saveRecord = function () {
				if (this.currentRecord.id) {
					this.currentRecord.put().then(function () {
						self.fetchRecords();
					});
				} else {
					api.post(this.currentRecord).then( function () {
						self.fetchRecords();
					});
				}
			};
			this.deleteRecord = function (record) {
				record.remove().then(function () {
					self.fetchRecords();
				});
			};
			this.editRecord = function (record) {
				self.currentRecord = RestAngular.copy(record);
				self.editMode = true;
			};
			this.extend = function (child) {
				return App.Utils.extend(child, this);
			};
		}]);
})();