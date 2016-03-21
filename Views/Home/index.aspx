<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="description" content="Sample listing of Alteil's cards.">

<meta name="author" content="Alteil Marketing Team">
<link rel="stylesheet" href="/Content/angular-ui.css">
<link rel="stylesheet" href="/Content/bootstrap.min.css">
<link rel="stylesheet" href="/Content/bootstrap-responsive.min.css">
<link rel="stylesheet" href="/Content/Browse.css">
<link rel="stylesheet" href="/Content/avgrund.css">
<link rel="stylesheet" href="/Content/index.css">
<script src="/Scripts/jquery-1.9.1.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-resource.js"></script>
<script src="/Scripts/bootstrap.min.js"></script>
<script src="/Scripts/newScripts.js"></script>

<script>
selector=0;
pointer=0;	
</script>


</head>


<body ng-app="ngRepeat" ng-controller="repeatController">

<div class="searchdiv">
	<center><div class="border-top"></div></center>
	Card name:
	<input type="text" ng-model="search[0]">
	<select class="expansion" ng-model="search[1]">
		<option value="">All</option>
		<option value="Basic Set">Basic Set</option>
		<option value="Dragon Emperors Revive">Dragon Emperors Revive</option>
		<option value="Wrath of the Four Gods">Wrath of the Four Gods</option>
		<option value="Beasts on Sacred Ground">Beasts on Sacred Ground</option>
		<option value="Aftermath">Aftermath</option>
		<option value="A Prelude to Battle">A Prelude to Battle</option>
		<option value="The Paladin's Sin">The Paladin's Sin</option>
		<option value="Fall of Wizard Kingdom">Fall of Wizard Kingdom</option>
		<option value="Keepers of Chaos">Keepers of Chaos</option>
		<option value="Final Confrontation">Final Confrontation</option>
		<option value="Advent of the Sun">Advent of the Sun</option>
		<option value="War Heroes">War Heroes</option>
		<option value="Silver Dawn">Silver Dawn</option>
		<option value="EX Cards">EX Cards</option>
		<option value="Event Cards">Event Cards</option>
	</select>
	<div class="BackButton" ng-click="sendSearch(search)"><span class="ng-binding">SEARCH</span></div>
  <center style="height: 20px; margin-top:10px;"><div class="border-bot"></div></center>
  </div>

<div id="framediv">
<a id="topL" class="topcontrol" ng-click="prevCard()" ng-hide="pages.length==0"></a>
<iframe id="mainframe" src="http://knight.apocoplay.com/Card?id=0"></iframe>
<a id="topR" class="topcontrol" ng-click="nextCard()" ng-hide="pages.length==0"></a>
<a id="randomButton" ng-click="randomCard()" ng-hide="pages.length==0"></a>
</div>

<img id="cardPointer" src="/Content/images/arrow.png" ng-hide="pages.length==0">
<div id="myCarousel" class="carousel slide">
<center><div class="border-top"></div></center>
 <div class="carousel-inner">
 <img src="http://media.apocoplay.com/dashboardCards/0000.jpg" style="opacity:0;margin-right:-200px;" ng-if="pages.length==0">

  <div ng-repeat="page in pages" class="item {{(($first)?'active':' ')}}" style="background-color: black;{{((true)?' ':' display:none')}}" ng-init="outerIndex = $index">
    <img ng-repeat="card in page" id="card{{cardsIndex}}" class="lazy-load {{((selector==cardsIndex)?'selected':' ')}}" src="http://media.apocoplay.com/dashboardCards/{{leftPad(card,4)}}.jpg" ng-click="selectCard(cardsIndex)" ng-init="cardsIndex = outerIndex*10+$index">
  </div>
 </div>

   <a class="left carousel-control" href="#myCarousel" data-slide="prev" ng-click="pointerPage(1)" ng-hide="pages.length==0">&lsaquo;</a>

   <a class="right carousel-control" href="#myCarousel" data-slide="next" ng-click="pointerPage(-1)" ng-hide="pages.length==0">&rsaquo;</a>

<center style="margin:-7px;"><div class="border-bot"></div></center>
</div>






</body>
</html>