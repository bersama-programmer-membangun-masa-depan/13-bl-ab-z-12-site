$(function () {
    var bar = '';
    bar += '<header id="header" class="header d-flex align-items-center">';
    
        bar += '<div class="container-fluid container-xl d-flex align-items-center justify-content-between">';
            bar += '<a href="/" class="logo d-flex align-items-center"><h1>Blabz</h1></a>';
            bar += '<nav id="navbar" class="navbar">';
                bar += '<ul>';
                    bar += '<li><a class="active" href="/">Home</a></li>';
                    bar += '<li><a href="m/category/">Category</a></li>';
                    bar += '<li><a href="m/category/popular/">Popular</a></li>';
                    bar += '<li><a href="#portfolio">Business</a></li>';
                    bar += '<li><a href="#team">Marketing</a></li>';
                    bar += '<li><a href="m/category/education/">Educaion</a></li>';
                    bar += '<li class="dropdown"><a href="javascript:void(0)"><span>Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>';
                        bar += '<ul>';
                            bar += '<li><a href="#">FAQ</a></li>';
                            bar += '<li><a href="#">About Us</a></li>';
                            bar += '<li class="dropdown"><a href="javascript:void(0)"><span>Police</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>';
                                bar += '<ul>';
                                    bar += '<li><a href="#">Privacy Police</a></li>';
                                    bar += '<li><a href="#">Terms & Conditions</a></li>';
                                bar += '</ul>';
                            bar += '</li>';
                        bar += '</ul>';
                    bar += '</li>';
                    bar += '<li><a href="#contact">Contact</a></li>';
                bar += '</ul>';
            bar += '</nav>';

            bar += '<i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>';
            bar += '<i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>';

            bar += '</div>';

    $("#header").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('header-nav').getAttribute('src');
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