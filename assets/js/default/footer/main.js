$(function () {
    var bar = '';
    bar += '<link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/aos/aos.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">';
    bar += '<link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">';
    bar += '<link href="/assets/css/main.css" rel="stylesheet">';

    bar += '<footer id="footer" class="footer">';

        bar += '<div class="container">';
            bar += '<div class="row gy-4">';
                bar += '<div class="col-lg-5 col-md-12 footer-info">';
                    bar += '<a href="/" class="logo d-flex align-items-center">';
                        bar += '<span>Blabz</span>';
                    bar += '</a>';
                    bar += '<p>Temukan tema template PowerPoint terbaik yang dapat Anda gunakan dalam presentasi Anda - 100% Gratis untuk penggunaan apa pun.</p>';
                    bar += '<div class="social-links d-flex mt-4">';
                        bar += '<a href="https://www.instagram.com/blabzid/" class="instagram"><i class="bi bi-instagram"></i></a>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<div class="col-lg-2 col-6 footer-links">';
                    bar += '<h4>Useful Links</h4>';
                    bar += '<ul>';
                        bar += '<li><a href="/">Home</a></li>';
                        bar += '<li><a href="/m/about/">About us</a></li>';
                        bar += '<li><a href="/m/services/">Services</a></li>';
                        bar += '<li><a href="#">Terms of service</a></li>';
                        bar += '<li><a href="#">Privacy policy</a></li>';
                    bar += '</ul>';
                bar += '</div>';

                bar += '<div class="col-lg-2 col-6 footer-links">';
                    bar += '<h4>Our Services</h4>';
                    bar += '<ul>';
                        bar += '<li><a href="/m/category/popular/">Popular</a></li>';
                        bar += '<li><a href="/m/category/education/">Education</a></li>';
                        bar += '<li><a href="/m/category/busiiness/">Business</a></li>';
                        bar += '<li><a href="/m/category/marketing/">Marketing</a></li>';
                        bar += '<li><a href="/m/category/3d/">3D</a></li>';
                    bar += '</ul>';
                bar += '</div>';

                bar += '<div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">';
                    bar += '<h4>Contact Us</h4>';
                    bar += '<p>';
                    bar += 'Surabaya, Indonesia <br><br>';
                    bar += '<strong>Phone:</strong> +62 858-5288-9881<br>';
                    bar += '<strong>Email:</strong> blabzid@gmail.com<br>';
                    bar += '</p>';

                bar += '</div>';

            bar += '</div>';
        bar += '</div>';

        bar += '<div class="container mt-4">';
            bar += '<div class="copyright">';
                bar += '&copy; <span id="copyright"></span> Copyright <strong><span>Blabz</span></strong>. All Rights Reserved';
            bar += '</div>';
        bar += '</div>';

        bar += '</footer>';


    bar += '<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>';
    bar += '<script src="/assets/vendor/aos/aos.js"></script>';
    bar += '<script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>';
    bar += '<script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>';
    bar += '<script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>';
    bar += '<script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>';
    bar += '<script src="/assets/vendor/php-email-form/validate.js"></script>';
    bar += '<script src="/assets/js/main.js"></script>';

    $("#footer").html(bar);
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