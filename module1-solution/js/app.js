(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {



  $scope.CheckTheList = function () {

    var InputArray = [];
    var InputArrayLength = 0;

    console.log($scope.InputList);

    if (($scope.InputList == "") || (typeof $scope.InputList == "undefined")) {
        $scope.message = "Please enter data first";
        $scope.OutputStyle = "has-error";
    } else {
      InputArray = $scope.InputList.split(',');

      InputArrayLength = 0;

      for(var i=0; i<InputArray.length; i++) {
            if (InputArray[i] != "") {
                InputArrayLength++
            }
        }

      $scope.message = InputArrayLength;

      if ((InputArrayLength>=1) && (InputArrayLength<=3) ) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      };
    }
    console.log(InputArrayLength);
    console.log($scope.message);
    console.log($scope.InputList.split());
  };

};

})();
