$(document).ready(function() {

/*
  $('a');
  $('#myID');
  $('.myClass');
  $('input[name="email"]');
  $('#header h1.title');
  $('div.myClass, ul.fruits');
  */



 var a = $('a');
 a.attr('href', 'http://www.naver.com');
 a.html('Naver');

//filtering 하는 문법
 $('ul li').has('p');             //ul li 중에서 p테그 선택
 $('ul li').not('.selected');     //ul li 중에서 li가 selected라는 값을 갖는 것 선택
 $('ul li').first();              //ul li 중에서 첫번째 요소의 값 선택
 $('ul li').eq(2);

//class=fruits를 선택한 후, 그 하위에서 class=selected를 찾은 후,
//그 class 값에 css에 정의된 명령을 실행
$('.fruits').find('.selected').css('color', 'red');

});
