$(document).ready(function () {
    const projects_div = $('#projects');
    const side_projects_div = $('#side_projects');
    const readMore = $('.readmore');
    projects_div.html(generateList(projects));
    side_projects_div.html(generateList(side_projects, 1));

    if (location.pathname === '/index.html' || location.pathname === '/') {
        readMore.addClass('d-none');
    }

    $('.project-toggle').click(function () {
        ($(this).html() === 'Show More') ? $(this).html('Show Less') : $(this).html('Show More');
        $(this).parent().siblings('.hide-project').toggleClass('d-none');
    });
});


function openLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


function generateList(array, project = null) {
    let str = '';
    let count = 0;
    array.forEach(value => {
        const lengthClass = (count > 3) ? 'd-none hide-project' : '';
        str += `
    <div class="col-md-12 col-lg-6 mb-3 ${lengthClass}">
					<div class="border ${project === null ? 'bg-light' : 'bg-white'} card-height ${project === null ? 'bg-light' : 'bg-white'}">
						<div class="row no-gutters">
							<div class="col-4 ${project === null ? 'bg-white' : 'bg-light'} border d-none d-lg-block d-md-block">
								<div class="height-100" style="background-image: url(assets/img/${value.img})">
								</div>
							</div>
							<div class="col-md-8 col-lg-8 col-sm-12 col-xs-12 vh-100 d-flex align-items-center col justify-content-center">
								<div class="card-body">
                                    <h4 class="card-title">`;
        if (value.url !== undefined && value.url.length !== 0) {
            str += `<a href="${value.url[0]}" target="_blank" rel="noopener">${value.name}</a>`;
        } else {
            str += `${value.name}`;
        }
        str += `</h4>
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
        count++;
    });

    if (count > 4) {
        str += `
        <div class="col-md-12">
            <button class="btn btn-block btn-primary project-toggle">Show More</button>
        </div>`;
    }

    return str;
}