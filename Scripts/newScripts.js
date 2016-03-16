
(function(angular) {
  'use strict';
angular.module('ngRepeat', ['ngAnimate','ngResource']).controller('repeatController', function($scope, $resource) {
	
	$scope.Activity = $resource('http://apicache.apocoplay.com/ks/AlteilService.svc/GetCardPageID/Page/1/ItemsPerPage/3200/Filter/!Expansion.contains("Event Cards") && !Expansion.contains("The Beginning"):search');
	$scope.pack=[];
	
	console.log();
	
	$scope.params=["Name","Expansion"];
	$scope.search=[];
	
	for(var i=0;i<$scope.params.length;i++){
		$scope.search[i]=GetURLParameter($scope.params[i]);
	}
	console.log($scope.search);
	
	$scope.getSearch=function(search){
		console.log(search);
		var query=[];
		var pushState=[];
		var i;
		for(i=0;i<$scope.params.length;i++){
		if(search[i]!=undefined && search[i]!=""){
			search[i]=search[i].replace(/%20/g," ");
			query[i]=" && "+$scope.params[i]+'.contains("'+search[i]+'")';
			pushState[i]=$scope.params[i]+"="+search[i];
		}
		}
		window.history.pushState('', 'Title', '?'+pushState.join("&"));
		$scope.pack=$scope.Activity.query(
		{search:query.join("")}, 
		function(){
				$scope.pager();
			}
		);
	}

	$scope.getSearch($scope.search);

	$scope.pager=function(){
	$scope.pages = [];
	var size = 10;
	while ($scope.pack.length > 0)
    $scope.pages.push($scope.pack.splice(0, size));
	selectCard(0);
	}
	
	
	$scope.leftPad=function(number, targetLength) {
		var output = number + '';
		while (output.length < targetLength) {
			output = '0' + output;
		}
		return output;
	}

	$scope.selectCard=function(card){selectCard(card);}
	
	
	$scope.randomCard=function(){
			selector=Math.floor(Math.random()*pack.length);
			$scope.selectCard(selector);
	}
	
	
	
	
});
})(window.angular);

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function movePointer(x)
{
$("#cardPointer").show();
$("#cardPointer").animate({left:((10*x)+5)+'%'});
}


function pointerPage(x){
pointer=pointer+x;
if(pointer>0){movePointer(10);}
if(pointer<0){movePointer(-1);}
if(pointer==0){movePointer(selector%10);}
}

function nextCard()
{
document.getElementById("card"+selector).style.opacity="";
if(++selector>pack.length-1){selector=0;}
document.getElementById('mainframe').contentWindow.angular.element("body").scope().loadCard(pack[selector]);
$('.carousel').carousel(Math.floor(selector/10));
document.getElementById("card"+selector).style.opacity="1.0";
movePointer(selector%10);
}

function prevCard()
{
document.getElementById("card"+selector).style.opacity="";
if(--selector<0){selector=pack.length-1;}
document.getElementById('mainframe').contentWindow.angular.element("body").scope().loadCard(pack[selector]);
$('.carousel').carousel(Math.floor(selector/10));
document.getElementById("card"+selector).style.opacity="1.0";
movePointer(selector%10);
}

function selectCard(x)
{
document.getElementById("card"+selector).style.opacity="";
selector=x;
document.getElementById('mainframe').contentWindow.angular.element("body").scope().loadCard(pack[selector]);
$('.carousel').carousel(Math.floor(selector/10));
document.getElementById("card"+selector).style.opacity="1.0";
movePointer(selector%10);
pointer=0;
}

function randomCard()
{
document.getElementById("card"+selector).style.opacity="";
selector=Math.floor(Math.random()*pack.length);
document.getElementById('mainframe').contentWindow.angular.element("body").scope().loadCard(pack[selector]);
$('.carousel').carousel(Math.floor(selector/10));
$randomImages=$('#myCarousel .carousel-inner').find(".item").eq(Math.floor(selector/10)).find("img");
$randomImages.each(function(){
        if($(this).hasClass('lazy-load')){
	$(this).attr("src",$(this).data("lazy-load-src"));
	$(this).removeClass('lazy-load');
	}
	});

document.getElementById("card"+selector).style.opacity="1.0";
movePointer(selector%10);
pointer=0;
}

$(document).ready(function() {
    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });


$('.carousel').on("slide", function(e) {

        //SCROLLING LEFT
        var prevItem = $('.active.item', this).prev('.item');

        //Account for looping to LAST image
        if(!prevItem.length){
            prevItem = $('.active.item', this).siblings(":last");
        }

        //Get image selector
        prevImage = prevItem.find('img');

        //Switch the images, remove class to prevent double switching
        prevImage.each(function(){
        if($(this).hasClass('lazy-load')){
	$(this).attr("src",$(this).data("lazy-load-src"));
	$(this).removeClass('lazy-load');
	}
	});


        //SCROLLING RIGHT
        var nextItem = $('.active.item', this).next('.item');

        //Account for looping to FIRST image
        if(!nextItem.length){
            nextItem = $('.active.item', this).siblings(":first");
        }

        //Get image selector
        nextImage = nextItem.find('img');

       //Switch the images, remove class to prevent double switching
        nextImage.each(function(){
        if($(this).hasClass('lazy-load')){
	$(this).attr("src",$(this).data("lazy-load-src"));
	$(this).removeClass('lazy-load');
	}
	});

    });

});