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

<script src="/Scripts/angular.js"></script>

<script src="/Scripts/angular-resource.js"></script>

<script src="/Scripts/angular-ui.js"></script>

<script src="/Scripts/bootstrap.min.js"></script>

<script src="/Scripts/newScripts.js"></script>




<script>
selector=0;
pointer=0;

<?php  
$pack=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,495,496,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,575,576,577,578,579,580,581,582,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,713,714,715,716,717,718,719,720,729,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802,803,804,805,806,822,823,824,825,826,827,828,829,830,831,832,833,834,835,836,837,838,839,840,841,842,843,844,845,846,847,848,849,850,851,852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,909,910,911,912,913,914,915,916,918,919,927,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1037,1038,1039,1058,1059,1060,1061,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1237,1238,1249,1250,1256,1257,1258,1259,1260,1261,1262,1263,1617,1618,1619,1620,1621,1622,1623,1624,1625,1626,1627,1628,1629,1630,1631,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,1642,1643,1644,1645,1646,1647,1648,1649,1650,1651,1652,1653,1654,1655,1656,1657,1658,1659,1660,1661,1662,1663,1664,1665,1666,1667,1668,1669,1670,1671,1672,1673,1674,1675,1676,1677,1678,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1733,1734,1735,1736,1737,1738,1739,1740,1741,1742,1743,1744,1745,1746,1747,1748,1749,1750,1751,1752,1753,1754,1755,1756,1757,1758,1759,1760,1761,1762,1763,1764,1765,1766,1767,1768,1769,1770,1771,1772,1773,1774,1775,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,1786,1787,1792,1793,1794,1795,1796,1797,1798,1799,1800,1801,1811,1812,1813,1814,1815,1816,1817,1818,1819,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1833,1834,1835,1836,1837,1838,1839,1840,1841,1842,1843,1844,1845,1846,1847,1848,1849,1850,1851,1852,1853,1854,1855,1856,1857,1858,1859,1860,1861,1862,1863,1864,1865,1866,1867,1868,1869,1870,1871,1872,1873,1874,1875,1876,1877,1878,1897,1898,1899,1900,1901,1902,1903,1904];
print"pack=".json_encode($pack).";";
?>

</script>


</head>
<body>
<div id="framediv">
<a id="topL" class="topcontrol" onclick="prevCard()"></a><iframe id="mainframe" src="http://knight.apocoplay.com/Card?id=0"></iframe><a id="topR" class="topcontrol" onclick="nextCard()"></a><a id="randomButton" onclick="randomCard()"></a>
</div>

<img id="cardPointer" src="/Content/images/arrow.png">
<div id="myCarousel" class="carousel slide">
<center><div class="border-top"></div></center>
 <div class="carousel-inner">

  <div class="item active" style="background-color: black;">

<?php
$j=0;
for($i=0;$i<count($pack);$i++){
  $j++;
  print"
    <img id=\"card".$i."\" class=\"lazy-load\" src=".($i<20 || $i>count($pack)-10 ? "" : "\"back.png\" data-lazy-load-src=")."\"https://alteil-login.apocoplay.com/cardDB/card/".str_pad($pack[$i],4,"0",STR_PAD_LEFT).".jpg\" ".($i==0 ? "style='opacity:1'" : "")." onclick=\"selectCard(".$i.")\">";
  if($j==10 && ($i+1)!=count($pack))
  {
  print"
  </div>
  <div class=\"item\">";
  $j=0;
  }


}

?>
  </div>
 </div>

   <a class="left carousel-control" href="#myCarousel" data-slide="prev" onclick="pointerPage(1)">&lsaquo;</a>

   <a class="right carousel-control" href="#myCarousel" data-slide="next" onclick="pointerPage(-1)">&rsaquo;</a>

<center style="margin:-7px;"><div class="border-bot"></div></center>
</div>


        <!-- /.carousel -->






</body>
</html>