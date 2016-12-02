$(function() {
	mentoringBubbleClick();
});


function mentoringBubbleClick() {
	$('.face').on('click', function() {
		(this).addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open')
	});
}

$(window).scroll(function(){
	youtubeVidScroll();
});

function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();

	$('.video-strip').css('background-position', 'center -'+ wScroll +'px');
}