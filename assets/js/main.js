
$(document).ready(function () {
    var body = $('body');
    checkAndApplyBrightness(body);

    $('.brightness').click(function () {
        body.hasClass('dark') ? localStorage.setItem('brightness', 'bright') : localStorage.setItem('brightness', 'dark');
        checkAndApplyBrightness(body);
    });
});

function checkAndApplyBrightness(body) {
    var currentBrightness = localStorage.getItem('brightness');
    if (currentBrightness == undefined) {
        currentBrightness = 'bright';
    }
    (currentBrightness === 'dark') ? body.addClass('dark') : body.removeClass('dark');
}