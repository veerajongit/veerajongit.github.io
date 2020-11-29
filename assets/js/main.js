
$(document).ready(function () {
    var body = $('body');
    var aTag = $('a');
    checkAndApplyBrightness(body, aTag);

    $('.brightness').click(function () {
        body.hasClass('dark') ? localStorage.setItem('brightness', 'bright') : localStorage.setItem('brightness', 'dark');
        checkAndApplyBrightness(body, aTag);
    });
});

function checkAndApplyBrightness(body, aTag) {
    var currentBrightness = localStorage.getItem('brightness');
    if (currentBrightness == undefined) {
        currentBrightness = 'bright';
    }
    (currentBrightness === 'dark') ? body.addClass('dark') : body.removeClass('dark');
    (currentBrightness === 'dark') ? aTag.addClass('white') : aTag.removeClass('white');
}


$(document).ready(function () {
    const email = $('.email');
    const name = 'veeraj91';
    const provider = 'yahoo.com';
    $('.fa-facebook-official').click(function () {
        openLink('https://www.facebook.com/veeraj1991');
    });

    $('.fa-linkedin-square').click(function () {
        openLink('https://www.linkedin.com/in/veeraj-shenoy-3a644713a');
    });

    $('.fa-twitter-square').click(function () {
        openLink('https://twitter.com/thecoderknight');
    });

    $('.fa-github-square').click(function () {
        openLink('https://github.com/veerajongit/');
    });

    $('.fa-stack-overflow').click(function () {
        openLink('https://stackexchange.com/users/5382849/veeraj-shenoy');
    });

    $('.fa-envelope-open').click(function () {
        window.location.href = `mailto:${name}@${provider}`;
    });

    $('.fa-medium').click(function () {
        openLink('https://medium.com/@veerajthegreat');
    });

    email.html(`<a class="white uncolor" href="mailto:${name}@${provider}">${name}@${provider}</a>`);
});

function openLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
}