(function () {
	var mock = angular.module('MockModule');

	mock.provider('MockModule.url', function () {
		var context = false;
		this.setUrlParameters = function (value) {
			context = value;
		};
		this.$get = function () {
			return 'webresources/' + context;
		};
	});
})();