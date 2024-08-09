// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(8.1640329, 77.4315363),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


///call 
function dialNumber (){
    
    var phoneNumber = "8300781723";
    if(!confirm("Do you want to dial " + phoneNumber + "?")) {
        return;
    }
    var uri = "tel:" + phoneNumber;
    window.location.href = uri; 
}

///send email
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        sendMail(event);
    })
});

function sendMail() {
    
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phone_number').value;
    const email = document.getElementById('email').value;
    const products = document.getElementById('product').value; 
    const quantity = document.getElementById('quantity').value;
    console.log(products); 
    const params = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        products: products, 
        quantity: quantity
    };

    emailjs.send('service_sz2nvzq', 'template_xobmh4y', params)
        .then(function(response) {  
            console.log('Email successfully sent!', response.status, response.text);
            alert('Email sent!');
        }, function(error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email.');
        });
}
