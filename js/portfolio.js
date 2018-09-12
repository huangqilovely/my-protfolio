jQuery(function($) {
    //左メニューの開き、閉じ
    $("nav .menu").on('click', function() {
        $(".phone_menu").removeClass("close");
        $(".overlay").removeClass("close");
    });
    $(".overlay").on('click', function() {
        $(".phone_menu").addClass("close");
        $(".overlay").addClass("close");
    });
    //左メニューをクリック
    $(".phone_menu a li").on('click', function() {
        $(".phone_menu").addClass("close");
        $(".overlay").addClass("close");
    });
	//ポータルページナビ固定 
	var nav = $('.wrapper nav'),
	offset = nav.offset();
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top) {
			nav.addClass('fixed');
			} else {
			nav.removeClass('fixed');
			}
		});
	// ページTOPへ戻る
            var topBtn = $('#pagetop');
            topBtn.hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    topBtn.fadeIn();
                } else {
                    topBtn.fadeOut();
                }
            });
            //スクロールしてトップ
            topBtn.click(function() {
                $('body,html').animate({
                    scrollTop : 0
                }, 500);
                return false;
            });

            var agent = navigator.userAgent;
            if (agent.indexOf('iPhone') > 0
                    || (agent.indexOf('Android') > 0 && agent
                            .indexOf('Mobile') > 0)) {
                $("a:not(header a, footer a)").attr("target", "_top");
            }

});