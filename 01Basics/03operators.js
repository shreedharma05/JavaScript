var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = ((listingPrice - sellingPrice)/listingPrice)*100;
console.log('the discount percentage is :'+ discountPercentage);

var displayDiscountPercentage = Math.round(discountPercentage);

console.log(displayDiscountPercentage, '% off');


