angular.module('ngApartments').controller('apartmentsController', function ($scope, apartmentsFactory) {
    $scope.apartments;
    $scope.priceInfo = { //the priceInfo shows the minimum 0 and the maximum 100000 apartment rental costs
        min: 0
        , max: 1000000
    }
    apartmentsFactory.getApartments().success(function (data) {
        $scope.apartments = data;
    }).error(function (error) {
        console.log(error);
    }); //the apartmentFactory service when its successful will collect the data but when it fails it will just log the error to the console.
});