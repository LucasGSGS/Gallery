window.onload = function(){
  document.getElementById("mp4_src").src="video/movie.mp4";
  document.getElementById("webm_src").src="video/movie.webm";
  document.getElementById("ogv_src").src="video/movie.ogv";

  document.getElementById("movie").load();
  createVideoControls();
}
