$(function () {
    placeholderSupported = !! ('placeholder' in document.createElement('input'));

    if (placeholderSupported == false) {
        $(':text, #nick, #email').each(function () {
            $(this).val($(this).attr('placeholder'));


            $(':text, #nick, #email').focus(function () {
                var textVal = $(this).val().toLowerCase();
                var placeHolder = $(this).attr('placeholder').toLowerCase();
                if (textVal == placeHolder) {
                    $(this).val('');
                }
            }).blur(function () {
                var textVal = $(this).val().toLowerCase();
                textVal = $.trim(textVal);
                var placeHolder = $(this).attr('placeholder');
                if (textVal == '') {
                    $(this).val(placeHolder);
                }
            });
        });
    }
});