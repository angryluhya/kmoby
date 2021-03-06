// Fix for bootstrap tooltips, sometimes they are left in the DOM when they shouldn't be.
$('body').on('hidden.bs.tooltip', function () {
    var tooltips = $('.tooltip').not('.in');
    if (tooltips) {
        tooltips.remove();
    }
});

$(document).ready(function () {

    function loadUrl(newLocation) {
        window.parent.location.href = newLocation;
        return false;
    }

    $('.login-link').click(function () {
        return loadUrl('../login.html');
    });

    $("#fname, #lname, #email, #phone, #paswd, .chckbx").click(function () {
        $('.newws-btn-next').popover('hide');
        $('.newws-btn-next').popover('disable');
        $('input').removeClass('newws-btn-next');
    });
    $(".bttn-default").click(function () {
        let fName = document.getElementById("signup_form").elements["fname"].value;
        let lName = document.getElementById("signup_form").elements["lname"].value;
        let Email = document.getElementById("signup_form").elements["email"].value;
        let Phone = document.getElementById("signup_form").elements["phone"].value;
        let Paswd = document.getElementById("signup_form").elements["paswd"].value;

        $('.newws-btn-next').popover('hide');
        $('.newws-btn-next').popover('disable');
        $('input').removeClass('newws-btn-next');

        if (fName == "") {

            $('#fname').addClass('newws-btn-next');
            $('.newws-btn-next').popover({
                container: 'body',
                content: 'Required',
                placement: 'bottom',
                toggle: 'popover'
            });
            $('.newws-btn-next').popover('enable');
            $('.newws-btn-next').popover('show');
            $('.newws-btn-next').on('shown.bs.popover', function () {
                var $pop = $(this);
                setTimeout(function () {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function () {
                    $pop.popover();
                }, 2200);
            });

        } else if (lName == "") {

            $('#lname').addClass('newws-btn-next');
            $('.newws-btn-next').popover({
                container: 'body',
                content: 'Required',
                placement: 'bottom',
                toggle: 'popover'
            });
            $('.newws-btn-next').popover('enable');
            $('.newws-btn-next').popover('show');
            $('.newws-btn-next').on('shown.bs.popover', function () {
                var $pop = $(this);
                setTimeout(function () {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function () {
                    $pop.popover();
                }, 2200);
            });

        } else if (Email == "") {

            $('#email').addClass('newws-btn-next');
            $('.newws-btn-next').popover({
                container: 'body',
                content: 'Required',
                placement: 'bottom',
                toggle: 'popover'
            });
            $('.newws-btn-next').popover('enable');
            $('.newws-btn-next').popover('show');
            $('.newws-btn-next').on('shown.bs.popover', function () {
                var $pop = $(this);
                setTimeout(function () {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function () {
                    $pop.popover();
                }, 2200);
            });

        } else if (Phone == "") {

            $('#phone').addClass('newws-btn-next');
            $('.newws-btn-next').popover({
                container: 'body',
                content: 'Required',
                placement: 'bottom',
                toggle: 'popover'
            });
            $('.newws-btn-next').popover('enable');
            $('.newws-btn-next').popover('show');
            $('.newws-btn-next').on('shown.bs.popover', function () {
                var $pop = $(this);
                setTimeout(function () {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function () {
                    $pop.popover();
                }, 2200);
            });

        } else if (Paswd == "") {

            $('#paswd').addClass('newws-btn-next');
            $('.newws-btn-next').popover({
                container: 'body',
                content: 'Required',
                placement: 'bottom',
                toggle: 'popover'
            });
            $('.newws-btn-next').popover('enable');
            $('.newws-btn-next').popover('show');
            $('.newws-btn-next').on('shown.bs.popover', function () {
                var $pop = $(this);
                setTimeout(function () {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function () {
                    $pop.popover();
                }, 2200);
            });

        } else if ($('.chckbx').prop('checked') == false) {
            $('.chckbx').addClass('newws-btn-next');
            $('.newws-btn-next').popover({
                container: 'body',
                content: 'Accept to proceed',
                placement: 'bottom',
                toggle: 'popover'
            });
            $('.newws-btn-next').popover('enable');
            $('.newws-btn-next').popover('show');
            $('.newws-btn-next').on('shown.bs.popover', function () {
                var $pop = $(this);
                setTimeout(function () {
                    $pop.popover('hide');
                }, 2000);
                setTimeout(function () {
                    $pop.popover();
                }, 2200);
            });

        } else {
            $('.login-loader').show();
            $("#suvalue").load("signup.php", {
                'fname_val': fName,
                'lname_val': lName,
                'email_val': Email,
                'phone_val': Phone,
                'paswd_val': Paswd
            }, function () {
                $('.cust-name').hide();
                $('.cust-lname').hide();
                $('.cust-mail').hide();
                $('.cust-phone').hide();
                $('.signupok').hide();
                $('.signupfail').hide();
                if ($('.signupfail').text() == 'failed') {
                    $('.login-loader').hide();
                } else if ($('.signupok').text() == 'success') {
                    let uname = $('.cust-name').text();
                    let ulname = $('.cust-lname').text();
                    let umail = $('.cust-mail').text();
                    let uphone = $('.cust-phone').text();

                    Cookies.set("firstName", uname, {
                        expires: 1
                    });
                    Cookies.set("lastName", ulname, {
                        expires: 1
                    });
                    Cookies.set("email", umail, {
                        expires: 1
                    });
                    Cookies.set("phoneNumber", uphone, {
                        expires: 1
                    });

                    $('.login-loader').hide();
                    window.top.$('.signup-btn').hide();
                    window.top.$('.login-btn').hide();
                    window.top.$('.prof-name').text(uname);
                    window.top.$('.prof-name').css({
                        "text-transform": "lowercase !important",
                        "letter-spacing": "1px !important"
                    });
                    window.top.$('.profile-btn').show();

                    parent.jQuery.fancybox.getInstance().close();
                }
            });
        }

    });
});