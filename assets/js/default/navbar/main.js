$(function () {
    var bar = '';
    bar += '<section id="topbar" class="topbar d-flex align-items-center">';
        bar += '<div class="container d-flex justify-content-center justify-content-md-between">';
            bar += '<div class="contact-info d-flex align-items-center">';
                bar += '<i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com"></a></i>';
                bar += '<i class="bi bi-phone d-flex align-items-center ms-4"><span>-</span></i>';
            bar += '</div>';
            bar += '<div class="social-links d-none d-md-flex align-items-center">';
                bar += '<a href="https://www.instagram.com/blabzid/" class="instagram"><i class="bi bi-instagram"></i></a>';
            bar += '</div>';
        bar += '</div>';
    bar += '</section>';

    $("#topbar-home").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('blabz').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}