var app = angular.module("myApp", ["ngRoute","angular-table"]);

    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/home.html",
                controller  : "homeCtrl"
            })
            .when("/person", {
                templateUrl : "pages/persons.html",
                controller  : "personCtrl"
            }).when("/person/:id?", {
                templateUrl: "pages/person.html",
                controller:  "personCtrl"
            });
    });

    app.controller('indexCtrl', function($scope){
        $scope.user = {
            name : "Marcos Fernando",
            avatar: "marcos-avatar"
        };
        $scope.menu = 0;
        $scope.setActive = function(id){
            $scope.menu = id;
        }
        $scope.isActive = function(id){
            return id == $scope.menu;
        }
    });

    app.controller('homeCtrl', function($scope){
        $scope.menu = 0;
    });

    app.controller('personCtrl', function($scope,$filter,$routeParams){

        $scope.edit = function(id){
            if(id == 1){
                $scope.person = {id: 1,name : "Marcos Fernando",  telegram : 18232323, gender : 1 , phone  : 84177762,  confirmed : true };
            }else if(id == 2){
                $scope.person = {id: 2, name : "Glauce Lima",     telegram : 45678900, gender : 0 , phone  : 81085671, confirmed : true };
            }else if(id == 3){
                $scope.person = {id: 3, name : "Elisa Cristina",  telegram : 45678900, gender : 0 , phone  : 12345667, confirmed : false};
            }
        };

        $scope.listAll = function(){
            $scope.list = [];
            $scope.menu = 1;
            $scope.config = {
                itemsPerPage: 10,
                fillLastPage: true,
                first: 'Primeira',
                previous: 'Anterior',
                next: 'Próxima',
                last: 'Última'
            };

            var data = {id: 1,name : "Marcos Fernando", telegram : 18232323, gender : 1 , phone  : 84177762, confirmed : true };
            $scope.list.push(data);
            data = {id: 2, name : "Glauce Lima",     telegram : 45678900, gender : 0 , phone  : 81085671, confirmed : true };
            $scope.list.push(data);
            data = {id: 3, name : "Elisa Cristina",  telegram : 45678900, gender : 0 , phone  : 12345667,     confirmed : false};
            $scope.list.push(data);
            $scope.filterList = $scope.list;
        };

        $scope.updateFilteredList = function() {
            $scope.filterList = $filter("filter")($scope.list, $scope.search);
        };

        if($routeParams.id){
            $scope.edit($routeParams.id);
        }else{
            $scope.listAll();
        }

        $scope.save = function(){
            $scope.list[$scope.person.id] = $scope.person;
        };

        $scope.back = function(){

        };

        $scope.delete = function(id){

        };

    });