angular.module("myApp",[])
    .controller('indexCtrl', ['$scope', function ($scope) {

        $scope.user = {
            name : "Marcos Fernando",
            avatar: "marcos-avatar"
        };

        $scope.menu = 0;

        $scope.setActive = function(id){
            $scope.menu = id;
        }

        $scope.isActive = function(id){
            if (id == $scope.menu){
                return true;
            }else{
                return false;
            }
        }

    }]);