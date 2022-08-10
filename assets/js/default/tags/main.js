$(function () {
    var bar = '';
    bar += '<div class="sidebar-item tags">';
        bar += '<h3 class="sidebar-title">Tags</h3>';
        bar += '<ul class="mt-3">';
            bar += '<li><a href="../../../popular/">Free</a></li>';
            bar += '<li><a href="../../../education/">Premium</a></li>';
        bar += '</ul>';
    bar += '</div>';


    $("#tags-detail").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('tags').getAttribute('src');
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