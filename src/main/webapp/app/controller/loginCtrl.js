angular.module("loginModule",[])
    .controller('loginCtrl', ['$scope', '$http', '$window' , function ($scope, $http, $window) {

        $scope.user = {};

        $scope.login = function(valid){
            $scope.submitted = true;
            if(valid){
                if($scope.user.username == "midianet" && $scope.user.password == "midianet") {
                    $window.location.href = "app/index.html";
                }else{
                    $scope.fail = true;
                }
            }
        }

    }]);