$(document).ready(function() {
	$('#homepage-slider').coinslider({
		name            : 'value'
        //,width        : 565       // width of slider panel
        //,height       : 290       // height of slider panel
        //,spw          : 7         // squares per width
        //,sph          : 5         // squares per height
        ,delay          : 5000      // delay between images in ms
        //,sDelay       : 30        // delay beetwen squares in ms
        //,opacity      : 0.7       // opacity of title and navigation
        //,titleSpeed   : 500       // speed of title appereance in ms
        ,effect         : 'random'  // random, swirl, rain, straight
        //,navigation   : true      // prev next and buttons
        ,links          : false     // show images as links
        ,hoverPause     : true      // pause on hover
	});
});