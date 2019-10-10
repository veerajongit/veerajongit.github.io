$(document).ready(function () {
    const projects_div = $('#projects');
    const side_projects_div = $('#side_projects');
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

    projects_div.html(generateList(projects));
    side_projects_div.html(generateList(side_projects));

    email.html(`<a class="white uncolor" href="mailto:${name}@${provider}">${name}@${provider}</a>`);

    phone.html(`<a class="white uncolor" href="tel:${countrycode} ${initialno} ${nextno} ${finalno}">${countrycode} ${initialno} ${nextno} ${finalno}</a>`);
});


function openLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


function generateList(array) {
    let str = '';

    array.forEach(value => {
        str += `
    <div class="col-md-12 col-lg-6 mb-3">
					<div class="card-height bg-light">
						<div class="row no-gutters">
							<div class="col-4 bg-white border d-none d-lg-block d-md-block">
								<div class="height-100" style="background-image: url(assets/img/${value.img})">
								</div>
							</div>
							<div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
								<div class="card-body">
                                    <h5 class="card-title">`;
        if (value.url !== undefined && value.url.length !== 0) {
            str += `<a href="${value.url[0]}" target='_blank'>${value.name}</a>`;
        } else {
            str += `${value.name}`;
        }
        str += `</h5>
									<p class="card-text">${value.about}</p>
									<p class="card-text"><small class="text-muted">Platforms - ${value.platform}</small>
                                    </p>
                                    <p>`;

        value.technology.split(',').forEach(technology => {
            str += `<span class="badge badge-primary">${technology}</span>&nbsp;`;
        });

        str += `</p>
								</div>
							</div>
						</div>
					</div>
                </div>
                `;
    });

    return str;
}