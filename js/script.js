$(function () {

    //    画像クリックキャプション
    $('.js-modal-open1').on('click', function () {
        $('.js-modal1').fadeIn();
        return false;
    });
    $('.js-modal-close1').on('click', function () {
        $('.js-modal1').fadeOut();
        return false;
    });


    $('.js-modal-open2').on('click', function () {
        $('.js-modal2').fadeIn();
        return false;
    });
    $('.js-modal-close2').on('click', function () {
        $('.js-modal2').fadeOut();
        return false;
    });



//    花びら舞い散るアニメーション

    function randArray(_str) {
        var i = _str.length;
        while (i) {
            var y = Math.floor(Math.random() * i);
            var t = _str[--i];
            _str[i] = _str[y];
            _str[y] = t;
        }
        return _str;
    }

    if (options.image) {
        flakeMarkup = document.createElement("img");
        flakeMarkup.src = options.image; //←この行
    } else {
        flakeMarkup = document.createElement("div");
        $(flakeMarkup).css({
            'background': options.flakeColor
        });
    }

});
