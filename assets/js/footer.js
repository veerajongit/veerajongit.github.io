$(document).ready(function () {
    const email = $('.email');
    const phone = $('.phone');
    const name = 'veeraj91';
    const provider = 'yahoo.com';
    const countrycode = '+91';
    const initialno = '808';
    const nextno = '7198';
    const finalno = '203';
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

    email.html(`<a class="white uncolor" href="mailto:${name}@${provider}">${name}@${provider}</a>`);

    phone.html(`<a class="white uncolor" href="tel:${countrycode} ${initialno} ${nextno} ${finalno}">${countrycode} ${initialno} ${nextno} ${finalno}</a>`);
});