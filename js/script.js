$(document).ready(function(){
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });

	$('html, body').stop().animate({
	     'scrollTop': $target.offset().top
	}, 900, 'swing');
});
});

function sendEmail() {
//verificando se tem algum campo preenchido ainda
/*$('form-send-email').each(function(){
	if ($(this).val() === ""){
		return false;
	}
});
*/
alert("E-mail successfully sent.\nThank you for the contact!");
$('#form-send-email').trigger("reset");
};