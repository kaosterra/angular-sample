(function () {
	var crud = angular.module('CrudModule');

	crud.provider('CrudModule.url', function () {
		var context = false;
		this.setUrlParameters = function (value) {
			context = value;
		};
		this.$get = function () {
			return 'webresources/' + context;
		};
	});

	crud.factory('APIClient', ['$resource', 'CrudModule.url', function ($resource, url) {
			return $resource(url + '/:id', {id: "@id"}, {
				update: {method: 'PUT'},
				query: {method: 'GET', isArray: false}
			});
		}]);

	crud.service('CRUDService', ['APIClient', function (APIClient) {
			var self = this;
			this.currentRecord = {};
			this.editMode = false;
			this.records = [];
			this.fetchRecords = function () {
				APIClient.query(function (data) {
					self.records = data.records;
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
					APIClient.update({id: this.currentRecord.id}, this.currentRecord, function () {
						self.fetchRecords();
					});
				} else {
					APIClient.save(this.currentRecord, function () {
						self.fetchRecords();
					});
				}
			};
			this.deleteRecord = function (id) {
				var record = new APIClient();
				record.id = id;
				record.$delete(function () {
					self.fetchRecords();
				});
			};
			this.editRecord = function (id) {
				APIClient.get({id: id}, function (data) {
					self.editMode = true;
					self.currentRecord = data;
				});
			};
			this.extend = function (child) {
				return App.Utils.extend(child, this);
			};
		}]);
})();