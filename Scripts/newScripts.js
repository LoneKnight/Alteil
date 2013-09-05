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