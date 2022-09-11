$(function () {
    var bar = '';
    bar += '<div class="sidebar-item recent-posts">';
        bar += '<h3 class="sidebar-title">Recent Posts</h3>';
       
        bar += '<div class="mt-3">';

            bar += '<div class="post-item mt-3">';
                bar += '<img src="/assets/img/theme/2022/post-instagram/creative-modern-chat-app/blabz.png" alt="Blabz" class="flex-shrink-0">';
                bar += '<div>';
                    bar += '<h4><a href="/theme/2022/post-instagram/creative-modern-chat-app/">Creative Modern Chat App</a></h4>';
                    bar += '<time>Sep 11, 2022</time>';
                bar += '</div>';
            bar += '</div>';
            <!-- End recent post item-->

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