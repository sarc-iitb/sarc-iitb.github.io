jQuery(document).ready(function($) {
$('.thumbnail').waypoint(function() {
	$(this['element']).addClass('block_reveal');
},{offset:'50%'});
$(".img_thumbnail").tilt({
	maxTilt:        10,
	perspective:   	600,   // Transform perspective, the lower the more extreme the tilt gets.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
	scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
	speed:          600,    // Speed of the enter/exit transition.
	transition:     true,   // Set a transition on enter/exit.
	disableAxis:    null,   // What axis should be disabled. Can be X or Y.
	reset:          true,   // If the tilt effect has to be reset on exit.
});
});