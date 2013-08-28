$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn()
        }
        else {
            $("#toTop").fadeOut()
        }
    });

    $("#toTop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 2e3)
    })



    if (navigator.userAgent.match(/(MSIE 10.0)|(MSIE)/i)) {
        // handle windows phone 8 viewport
        // see also http://timkadlec.com/2013/01/windows-phone-8-and-device-width/
        var msViewportStyle, width;
        msViewportStyle = document.createElement("style");
        width = "device-width";
        msViewportStyle.appendChild(
            document.createTextNode(
                "@-ms-viewport{width:" + width + "!important}"
            )
        );
        document.getElementsByTagName("head")[0].
            appendChild(msViewportStyle);
    }

});