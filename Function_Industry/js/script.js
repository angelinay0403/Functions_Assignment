// JavaScript Document
// Angelina Castro, 11/21/2013, Functions.


//Function_Industry.

//Web Developer.
var webSite = calctotalWork(10, 50,5,10);
	function calctotalWork(h,p,w,m,t){
var hours = 10; // hours working on a web page.
var payPerhour = 50; // how much per hour.
var webPages = 5; // pages in a website.
var moneyPerpages =10; // how much extra per pages.
var totalWork = (hours * payPerhour) + (webPages * moneyPerpages);
	return totalWork;
}
console.log(webSite)

 