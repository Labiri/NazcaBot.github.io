// -------------------------------------
// Mobile menu
// -------------------------------------
var mobileToggle = document.getElementById('mobile-toggle')

mobileToggle.addEventListener("click", function() {
    document.body.classList.toggle('open')
})

document.querySelectorAll('header .nav-links a').forEach(function(a) {
    a.addEventListener("click", function() {
        document.body.classList.remove('open')
    })
})

// -------------------------------------
// FAQ accordion
// -------------------------------------
var faqItem = document.querySelectorAll('#faq .q')

faqItem.forEach(function(i) {
    i.addEventListener('click', function(e) {
        let li = e.target.closest('li')

        if (li.classList.length) {
            li.classList.remove("active")
            e.target.querySelector('.fa-plus').style.display = "block"
            e.target.querySelector('.fa-minus').style.display = "none"
        } else {
            li.classList.add("active")
            e.target.querySelector('.fa-plus').style.display = "none"
            e.target.querySelector('.fa-minus').style.display = "block"
        }
    })
})


// -------------------------------------
// Init Waitlist
// -------------------------------------
document.addEventListener("DOMContentLoaded", function(event) {
    window.waitlisted.start({domain: "nazca.app.waitlisted.co"})
});
