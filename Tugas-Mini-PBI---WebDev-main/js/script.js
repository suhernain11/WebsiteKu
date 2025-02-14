$(document).ready(function () {
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll ke Atas
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, "slow");
    });

    // Toggle Menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Efek Ketik dengan Typed.js
    if ($(".typing").length) {
        var typed = new Typed(".typing", {
            strings: ["Developer", "Photographer", "Content Writer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if ($(".typing-2").length) {
        var typed2 = new Typed(".typing-2", {
            strings: ["Developer", "Photographer", "Content Writer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Form Submission AJAX
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        var formData = $(this).serialize();
        var notification = $("#notification");

        $.ajax({
            type: "POST",
            url: "https://formspree.io/f/xpwqjgde",
            data: formData,
            dataType: "json",
            success: function () {
                notification.html("<p>Pesan berhasil dikirim!</p>").css("background", "green").fadeIn().delay(3000).fadeOut();
                $("#contact-form")[0].reset();
            },
            error: function () {
                notification.html("<p>Gagal mengirim pesan!</p>").css("background", "red").fadeIn().delay(3000).fadeOut();
            }
        });
    });

    // Swiper Slider
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});
