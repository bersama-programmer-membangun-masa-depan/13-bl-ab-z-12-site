$(function () {
    var bar = '';
    bar += '<div class="sidebar-item recent-posts">';
        bar += '<h3 class="sidebar-title">Recent Posts</h3>';
       
        bar += '<div class="mt-3">';

            bar += '<div class="post-item mt-3">';
                bar += '<img src="/assets/img/blog/2022/dark-&-light-theme/zetachat.png" alt="Zetachat" class="flex-shrink-0">';
                bar += '<div>';
                    bar += '<h4><a href="/m/blog/2022/dark-&-light-theme/">Dark & Light Theme</a></h4>';
                    bar += '<time datetime="2022-07-14">Kam, 14 Juli 2022</time>';
                bar += '</div>';
            bar += '</div>';<!-- End recent post item-->

            bar += '<div class="post-item">';
                bar += '<img src="/assets/img/blog/2022/voice-note-fix/zetachat.png" alt="Zetachat" class="flex-shrink-0">';
                bar += '<div>';
                    bar += '<h4><a href="/m/blog/2022/voice-note-fix/">Perbaikan Catatan Suara</a></h4>';
                    bar += '<time datetime="2020-01-01">Jan 1, 2020</time>';
                bar += '</div>';
            bar += '</div>';<!-- End recent post item-->

        bar += '</div>';
    bar += '</div>';

    $("#recent-posts").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('recent-posts').getAttribute('src');
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