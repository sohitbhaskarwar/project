var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"html/mainpage/mainpage.html"
	})
	.when("/abc1",{
		templateUrl:"project_score_color.html",
		controller:"myCtrl_color"
		
	})
	.when("/abc2",{
		templateUrl:"project_score_image.html",
		controller:"myCtrl_image"
		
	})
	.when("/abc3",{
		templateUrl:"project_score_number.html",
		controller:"myCtrl_number"
		
	})
	.when("/abc4",{
		templateUrl:"project_score_shapes.html",
		controller:"myCtrl_shapes"
		
	})
	.when("/xyz1",{
		templateUrl:"html/word1/wordroute1.html",
		
	})
	.when("/xyz2",{
		templateUrl:"html/word2/wordroute2.html",
		
	})
	.when("/xyz3",{
		templateUrl:"html/word3/wordroute3.html",
		
	})
	.when("/xyz4",{
		templateUrl:"html/word4/wordroute4.html",
		
	})
	.when("/xyz5",{
		templateUrl:"html/word5/wordroute5.html",
		
	})
	.when("/xyz6",{
		templateUrl:"html/word6/wordroute6.html",
		
	})
	.when("/xyz7",{
		templateUrl:"html/word7/wordroute7.html",
		
	})
	.when("/xyz8",{
		templateUrl:"html/word8/wordroute8.html",
		
	})
	.when("/xyz9",{
		templateUrl:"html/numbers/finalcode1.html",
		
	})
	.when("/xyz10",{
		templateUrl:"html/images/MemoryGame.html",
		
	})
	.when("/xyz11",{
		templateUrl:"html/shapes1/shapes1.html",
		
	})
	.when("/xyz12",{
		templateUrl:"html/shapes2/shapes2.html",
		
	})
	.when("/xyz13",{
		templateUrl:"html/shapes3/shapes3.html",
		
	})
	.when("/xyz14",{
		templateUrl:"html/shapes4/shapes4.html",
		
	})
	.when("/xyz15",{
		templateUrl:"html/shapes5/shapes5.html",
		
	})
	.when("/xyz16",{
		templateUrl:"html/shapes6/shapes6.html",
		
	})
	.when("/xyz17",{
		templateUrl:"html/shapes7/shapes7.html",
		
	})
	.when("/xyz18",{
		templateUrl:"html/shapes8/shapes8.html",
		
	})
	.when("/xyz19",{
		templateUrl:"html/shapes9/shapes9.html",
		
	})
	.when("/xyz20",{
		templateUrl:"html/shapes10/shapes10.html",
		
	})
	
	.otherwise({redirectTo:'/'});
});
