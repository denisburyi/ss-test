// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).on('click', '.modal__video_thmb', function() {
  var div = $( ".modal__video_thmb" ).addClass( "hidden" );

	var $video = $('#video'),
		src = $video.attr('src');

	$video.attr('src', src + '&autoplay=1');

  if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.hide();
		}

});

$(document).on('click', '#myModal', function(){
  $( ".modal__video_thmb" ).removeClass( "hidden" );

   jQuery("iframe").each(function() {
      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
});
