angular.module('ngApartments').filter('apartmentFilter', function () {
	return function (listings, priceInfo) {//the listings is the apartment actual prices and the priceInfo is the listing between the min and max price selections.
		var filtered = [];
		var min = priceInfo.min;
		var max = priceInfo.max;
		angular.forEach(listings, function (listing) {
			if (listing.price >= min && listing.price <= max) {
				filtered.push(listing);
			}
		});
		return filtered;
	}
});// this function will go through the listing functions using the forEach method  to ilterate through the min and max priceInfo listings