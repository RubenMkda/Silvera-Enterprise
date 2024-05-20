import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('top-header');
    var navbar2 = document.getElementById('header');
    var section2 = document.getElementById('mostpopular');
    var section2Top = section2.offsetTop - navbar.offsetHeight;
    if (window.pageYOffset >= section2Top) {
        navbar.classList.add('scrolled-top')
        navbar2.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled-top')
        navbar2.classList.remove('scrolled')
    }
});