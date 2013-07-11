/*
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        }, false);
    }
}
*/



var playlist = [
  {
  	'artist':'MJ Cole',
  	'title':'Sincere',
  	'filename':'mjcole-sincere.mp3',
    'image':'mjcole-sincere.jpg'
  },
  {
  	'artist':'Boards of Canada',
  	'title':'Cold Earth',
  	'filename':'boardsofcanada-coldearth.mp3',
    'image':'boardsofcanada-tomorrowsharvest.jpg'
  },
  {
  	'artist':'Cloud 9',
  	'title':'Do You Want Me Baby? (Dusky Remix)',
  	'filename':'cloud9-doyouwantmebaby-duskyremix.mp3',
    'image':'cloud9-doyouwantmebaby.jpg'
  },
];


console.log(playlist.length);
console.log(playlist[0].artist);

var i = 0;

var l = playlist.length-1;


function initPlayer() {
  $( 'audio' ).audioPlayer({
  	classPrefix: 'playa',

  	strPlay: '&#9654;',
  	strPause: '&#8214;'
  });
}

function cueTrack(i){
  $('#playa').attr('src', 'music/'+playlist[i].filename);
  $('#display .artist').text(playlist[i].artist);
  $('#display .title').text(playlist[i].title);
  $('#cover').attr('src', 'img/art/'+playlist[i].image);
  $('#background img').attr('src', 'img/art/bg/'+playlist[i].image)
}



function skipTrack(direction){

  if ( direction == 'previous') {
    if ( i == 0 ) { i = l; } else { i--; }
  }

  if ( direction == 'next') {
    if (i == l) { i = 0; } else { i++; }
  }



  $('#cover, #background, #display').fadeOut(200, function(){

    if ( $('.playa').hasClass('playa-playing') ) {
      var playing = true;
      $('.playa').find('.playa-playpause').trigger('click');
    }
    cueTrack(i);

    if (playing == true) $('.playa').find('.playa-playpause').trigger('click');

    $('#display').fadeIn(1000);
    
    $('#cover, #background').imagesLoaded(function(){
      $('#cover, #background').fadeIn(1000);
    });
    

  });

  
}



$(document).ready(function(){
  $('.playa-skip').click(function(){
    var direction;
    if ( $(this).hasClass('previous') ) direction = 'previous';
    if ( $(this).hasClass('next') ) direction = 'next';
    skipTrack(direction);
  });
});



$(document).ready(function(){
  cueTrack(i);
  initPlayer();
});