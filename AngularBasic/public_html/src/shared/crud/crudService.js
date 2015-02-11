(function () {
	var crud = angular.module('CrudModule');

	crud.service('CRUDService', ['Restangular', function (RestAngular) {
			this.init = function () {
				this.api = RestAngular.all(this.url);
				this.records = [];
				this.currentRecord = {};
				this.editMode = false;
			};
			this.fetchRecords = function () {
				var self = this;
				this.api.getList().then(function (data) {
					self.records = data;
					self.currentRecord = {};
					self.editMode = false;
				});
			};
			this.createRecord = function () {
				var self = this;
				self.editMode = true;
				self.currentRecord = {};
			};
			this.saveRecord = function () {
				var self = this;
				if (this.currentRecord.id) {
					this.currentRecord.put().then(function () {
						self.fetchRecords();
					});
				} else {
					this.api.post(this.currentRecord).then(function () {
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
				this.currentRecord = RestAngular.copy(record);
				this.editMode = true;
			};
			this.extend = function (child) {
				return App.Utils.extend(child, this);
			};
		}]);
})();