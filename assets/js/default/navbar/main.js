$(function () {
    var bar = '';
    bar += '<link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/aos/aos.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">';
    bar += '<link href="/assets/css/main.css" rel="stylesheet">';

    bar += '<section id="topbar" class="topbar d-flex align-items-center">';
        bar += '<div class="container d-flex justify-content-center justify-content-md-between">';
            bar += '<div class="contact-info d-flex align-items-center">';
                bar += '<i class="bi bi-envelope d-flex align-items-center"><a href="mailto:blabzid@gmail.com">blabzid@gmail.com</a></i>';
                bar += '<i class="bi bi-phone d-flex align-items-center ms-4"><span>0858-5288-9881</span></i>';
            bar += '</div>';
            bar += '<div class="social-links d-none d-md-flex align-items-center">';
                bar += '<a href="https://www.instagram.com/blabzid/" class="instagram"><i class="bi bi-instagram"></i></a>';
            bar += '</div>';
        bar += '</div>';
    bar += '</section>';

    bar += '<header id="header" class="header d-flex align-items-center">';
    
        bar += '<div class="container-fluid container-xl d-flex align-items-center justify-content-between">';
            bar += '<a href="/" class="logo d-flex align-items-center"><h1>Blabz</h1></a>';
            bar += '<nav id="navbar" class="navbar">';
                bar += '<ul>';
                    bar += '<li><a href="/">Home</a></li>';
                    bar += '<li><a href="/m/category/">Category</a></li>';
                    bar += '<li><a href="/m/category/popular/">Popular</a></li>';
                    bar += '<li><a href="/m/category/business/">Business</a></li>';
                    bar += '<li><a href="/m/category/marketing/">Marketing</a></li>';
                    bar += '<li><a href="/m/category/education/">Education</a></li>';
                    bar += '<li class="dropdown"><a href="javascript:void(0)"><span>Menu</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>';
                        bar += '<ul>';
                            bar += '<li><a href="/m/faq/">FAQ</a></li>';
                            bar += '<li><a href="/m/about/">About Us</a></li>';
                            bar += '<li class="dropdown"><a href="javascript:void(0)"><span>Police</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>';
                                bar += '<ul>';
                                    bar += '<li><a href="/m/police/">Privacy Police</a></li>';
                                    bar += '<li><a href="/m/police/">Terms & Conditions</a></li>';
                                bar += '</ul>';
                            bar += '</li>';
                        bar += '</ul>';
                    bar += '</li>';
                    bar += '<li><a href="/m/contact/">Contact</a></li>';
                bar += '</ul>';
            bar += '</nav>';

            bar += '<i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>';
            bar += '<i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>';

            bar += '</div>';
        bar += '</header>';

    bar += '<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>';
    bar += '<script src="/assets/vendor/aos/aos.js"></script>';
    bar += '<script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>';
    bar += '<script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>';
    bar += '<script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>';
    bar += '<script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>';
    bar += '<script src="/assets/vendor/php-email-form/validate.js"></script>';
    bar += '<script src="/assets/js/main.js"></script>';

    $("#navbar").html(bar);
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