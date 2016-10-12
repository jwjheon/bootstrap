$(document).ready(function() {
//   $('p').html("Javacript 라이브러리");
   //$('p').html("안녕 !, ㅓ볃교")
/*   var result = $('p').html();
   console.log(result);
*/

//google 이라는 id 속성르 갖는 a 태그에
//click이벤트를 바인딩하는 메소드
   $('a#google').click(function() {
     if (hrefcontent = 'http://google.com') {
     alert('죄송합니다. 네이버로 이동합니다.');
     //event.preventDefault();
   }
   });

//GET 방식으로 http통신을
$('#ajax').click(function() {
  $.get('ajax.html', function(response) {
    $('p.content').html(response);
  });

});

function myCallBack() {
  console.log("callback 실행!");
}

//google이라는 id갑을 갖는 모든 a태그의
//속성값들 중에, href라는 속성의 갋을
//Javacript 변수인 hrefcontent에 담아 초기화
var hrefcontent = $('a#google').attr('href');

//alert(hrefcontent);
$('a#google').attr('href', 'http://www.naver.com');

//두가지 속성의 값을 객체형태의 data타입으로 입력값을 입력한다.
//즉 현재 href갑을 강제로 구굴로 다시 변환
$('a#google').attr( {
  href: 'http://google.com',
  target: '_blank'
});
  //<a href='http://google.com' id="google" target='_blank'>구글웹사이트</a>
  // $('h1').addClass('red' );



/*$('#btn').click(function() {
  $('h1').hide();
});
*/

// btn태그를 클릭 하면
/*$('#btn').click(function () {
  if ($('h1').hasClass('big')) {      //h1 태그에 big이 있느냐의 여부를 t/f로 리턴

  } else {
    $('1').addClass('big');           //big를 추가
  }
});
*/
});
