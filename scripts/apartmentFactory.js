angular
.module('ngApartments')
.factory('apartmentsFactory', function($http){//all this factory service does is to get the data.json from the data folder
	
	function getApartments(){
		return $http.get('data/data.json');//it is best practice that the json file is in another folder
	} //the $http service will get the data.json file
	
	return {
		getApartments: getApartments
	}
	
});