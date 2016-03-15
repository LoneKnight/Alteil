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
	<input type="text" ng-model="searchName">
	<br>
	<div class="BackButton" ng-click="getSearch('Name',searchName)"><span class="ng-binding">SEARCH</span></div>
	<br>
	Expansion name:
	<input type="text" ng-model="searchExp">
	<br>
	<div class="BackButton" ng-click="getSearch('Expansion',searchExp)"><span class="ng-binding">SEARCH</span></div>
  <center style="height: 20px; margin-top:10px;"><div class="border-bot"></div></center>
  </div>

<div id="framediv">
<a id="topL" class="topcontrol" onclick="prevCard()"></a><iframe id="mainframe" src="http://knight.apocoplay.com/Card?id=0"></iframe><a id="topR" class="topcontrol" onclick="nextCard()"></a><a id="randomButton" ng-click="randomCard()"></a>
</div>

<img id="cardPointer" src="/Content/images/arrow.png">
<div id="myCarousel" class="carousel slide">
<center><div class="border-top"></div></center>
 <div class="carousel-inner">

  <div ng-repeat="page in pages" class="item {{(($first)?'active':' ')}}" style="background-color: black;">
    <img ng-repeat="card in page" id="card{{card}}" class="lazy-load" src="https://alteil-login.apocoplay.com/cardDB/card/{{leftPad(card,4)}}.jpg" ng-click="selectCard(card)">
  </div>
 </div>

   <a class="left carousel-control" href="#myCarousel" data-slide="prev" onclick="pointerPage(1)">&lsaquo;</a>

   <a class="right carousel-control" href="#myCarousel" data-slide="next" onclick="pointerPage(-1)">&rsaquo;</a>

<center style="margin:-7px;"><div class="border-bot"></div></center>
</div>






</body>
</html>