(function () {
	var crud = angular.module('CrudModule');

	crud.service('CRUDService', ['Restangular', function (RestAngular) {
			this.init = function () {
				this.api = RestAngular.all(this.url);
				this.modelRef = {};
				this.records = [];
				this.modelRef.model = {};
				this.editMode = false;
				this.fetchRecords();
			};
			this.fetchRecords = function () {
				var self = this;
				this.api.getList().then(function (data) {
					self.records = data;
					self.modelRef.currentRecord = {};
					self.editMode = false;
				});
			};
			this.createRecord = function () {
				var self = this;
				self.editMode = true;
				self.modelRef.model = {};
			};
			this.saveRecord = function () {
				var self = this;
				if (this.modelRef.model.id) {
					this.modelRef.model.put().then(function () {
						self.fetchRecords();
					});
				} else {
					this.api.post(this.modelRef.model).then(function () {
						self.fetchRecords();
					});
				}
			};
			this.deleteRecord = function (record) {
				var self = this;
				record.remove().then(function () {
					self.fetchRecords();
				});
			};
			this.editRecord = function (record) {
				this.modelRef.model = RestAngular.copy(record);
				this.editMode = true;
			};
			this.extend = function (child) {
				return App.Utils.extend(child, this);
			};
		}]);
})();