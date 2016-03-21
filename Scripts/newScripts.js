
(function(angular) {
  'use strict';
angular.module('ngRepeat', ['ngAnimate','ngResource']).controller('repeatController', function($scope, $resource) {
	
	$scope.Activity = $resource('http://apicache.apocoplay.com/ks/AlteilService.svc/GetCardPageID/Page/1/ItemsPerPage/3200/Filter/!Expansion.contains("Event Cards") && !Expansion.contains("The Beginning"):search');
	$scope.pack=[];
	
	console.log();
	
	$scope.selector=0;
	
	$scope.params=["Name","Expansion"];
	$scope.search=[];
	$scope.pages=[];
	
	
	
	for(var i=0;i<$scope.params.length;i++){
		$scope.search[i]=GetURLParameter($scope.params[i]) || "";
		
	}
	
	$scope.sendSearch=function(search){
		var pushState=[];
		for(i=0;i<$scope.params.length;i++){
			if(search[i]!=undefined && search[i]!=""){
				search[i]=search[i].replace(/%20/g," ");
				pushState[i]=$scope.params[i]+"="+search[i];
			}
		}
		console.log('?'+pushState.join("&"));
		window.location.href='?'+pushState.join("&");
	}
	
	$scope.getSearch=function(search){
		var query=[];
		var i;
		for(i=0;i<$scope.params.length;i++){
		if(search[i]!=undefined && search[i]!=""){
			search[i]=search[i].replace(/%20/g," ");
			query[i]=" && "+$scope.params[i]+'.contains("'+search[i]+'")';
		}
		}
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
		for (var i=0; i<$scope.pack.length;i+=size){
		$scope.pages.push($scope.pack.slice(i, i+size));
		}
		$scope.selectCard(0);
	}
	
	
	$scope.leftPad=function(number, targetLength) {
		var output = number + '';
		while (output.length < targetLength) {
			output = '0' + output;
		}
		return output;
	}	
	
	$scope.randomCard=function(){
			$scope.selector=Math.floor(Math.random()*$scope.pack.length);
			$scope.selectCard($scope.selector);
	}

	$scope.loadCard=function(ID){
				document.getElementById('mainframe').contentWindow.angular.element("body").scope().loadCard($scope.pack[ID]);
	}
	
	function movePointer(x){
		$("#cardPointer").show();
		$("#cardPointer").animate({left:((10*x)+5)+'%'});
	}


	$scope.pointerPage=function(x){
		pointer=pointer+x;
		if(pointer>0){movePointer(10);}
		if(pointer<0){movePointer(-1);}
		if(pointer==0){movePointer(selector%10);}
	}

	$scope.nextCard=function(){
		if(++$scope.selector>$scope.pack.length-1){$scope.selector=0;}
		$('.carousel').carousel(Math.floor($scope.selector/10));
		movePointer($scope.selector%10);
		$scope.loadCard($scope.selector);
	}

	$scope.prevCard=function(){
		if(--$scope.selector<0){$scope.selector=$scope.pack.length-1;}
		$('.carousel').carousel(Math.floor($scope.selector/10));
		movePointer($scope.selector%10);
		$scope.loadCard($scope.selector);
	}

	$scope.selectCard=function(x){
		$scope.selector=x;
		$('.carousel').carousel(Math.floor($scope.selector/10));
		movePointer($scope.selector%10);
		pointer=0;
		$scope.loadCard($scope.selector);
	}

	function randomCard(){
		$scope.selector=Math.floor(Math.random()*$scope.pack.length);
		$('.carousel').carousel(Math.floor($scope.selector/10));
		$randomImages=$('#myCarousel .carousel-inner').find(".item").eq(Math.floor($scope.selector/10)).find("img");
		
		$randomImages.each(function(){
			if($(this).hasClass('lazy-load')){
				$(this).attr("src",$(this).data("lazy-load-src"));
				$(this).removeClass('lazy-load');
			}
		});		
		movePointer($scope.selector%10);
		pointer=0;
		$scope.loadCard(selector);
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