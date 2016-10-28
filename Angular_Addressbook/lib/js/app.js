var myNinja = angular.module('myNinja',['ngRoute','ngAnimate']);   

myNinja.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'views/home.html',
        controller:'NinjaController'
    })
        .when('/directory',{
        templateUrl: 'views/directory.html',
        controller: 'NinjaController'
    }).otherwise({
        redirectTo: '/home'
    });
    
}]);

myNinja.directive('randomName',[function(){
    return {
        restrict: 'E',
        scope:{
            names:'=',
            title:'='   
        },
        template:'<img class="round" ng-src="{{names[random].thumb}}" alt="Smiley face" height="100" width="100" align="middle">',
        controller:function($scope){
             $scope.random = Math.floor(Math.random() *5);
        },
       
    };
}]);


myNinja.controller ('NinjaController', ['$scope',function($scope){

    
    $scope.removeName=function(n){
        var removename = $scope.names.indexOf(n);
        $scope.names.splice(removename,1);
    };
    $scope.addContact =function()
    {
        $scope.names.push({
            name: $scope.newcontact.name,
            
            phn: $scope.newcontact.phn,
            city: $scope.newcontact.city,  
            Nationality: $scope.newcontact.Nationality,
        })
        $scope.newcontact.name ="";
        $scope.newcontact.phn ="";
        $scope.newcontact.city ="";
        $scope.newcontact.Nationality ="";
    };
    
    
    $scope.names = [
        {
            name:"akash",
            phn:"7589608395",
            city:'ranchi',
            Nationality:'Indian',
            thumb:"img/99.jpg"
        },
        {
            name:"ankit",
            phn:"9835120000",
            city:'bokaro',
            Nationality:'USA',
            thumb:"img/90.jpg"
        },
        {
            name:"manish",
            phn:"9835120560",
            city:'bhopal',
            Nationality:'Canada',
            thumb:"img/50.jpg"
        },
        {
            name:"subham",
            phn:"9835126000",
            city:'patna',
            Nationality:'Australia',
            thumb:"img/84.jpg"
        },
        {
            name:"amrit",
            phn:"9835125656",
            city:'pondi',
            Nationality:'germany',
            thumb:"img/95.jpg"
        }
                
    ];
    console.log(angular.toJson($scope.names));
    

    
}]);

