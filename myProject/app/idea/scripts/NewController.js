angular
  .module('idea')
  .controller("NewController", function ($scope, Idea, supersonic) {
    $scope.idea = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newidea = new Idea($scope.idea);
      newidea.save().then( function () {
        supersonic.ui.layers.popAll();
      });
	  $scope.showSpinner = false;
    };

  });