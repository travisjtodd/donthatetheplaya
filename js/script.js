var playlist = [
  {
  	'artist':'MJ Cole',
  	'title':'Sincere',
  	'filename':'mjcole-sincere.mp3'
  },
  {
  	'artist':'Boards of Canada',
  	'title':'Cold Earth',
  	'filename':'boardsofcanada-coldearth.mp3'
  },
  {
  	'artist':'Cloud 9',
  	'title':'Do You Want Me Baby? (Dusky Remix)',
  	'filename':'cloud9-doyouwantmebaby-duskyremix.mp3'
  },
];

console.log(playlist[0].artist);

function initPlayer() {
  $( 'audio' ).audioPlayer({
  	classPrefix: 'playa',

  	strPlay: '&#9654;',
  	strPause: '&#8214;'
  });
}



$(document).ready(function(){
  $('#playa').attr('src', 'music/'+playlist[0].filename);
  initPlayer();
});