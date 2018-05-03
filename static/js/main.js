// -------------------------------------
// FAQ accordion
// -------------------------------------
var faqItem = document.querySelectorAll('#faq .q')

faqItem.forEach(function(i) {
	i.addEventListener('click', function(e) {
		console.log(e)
		e.target.closest('li').classList.toggle("active")
	})
})