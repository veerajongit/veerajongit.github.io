function addEventListenerToClass(className, event, callback) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, callback);
    }
}

function openLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

document.addEventListener("DOMContentLoaded", function () {
    const name = 'veeraj91';
    const provider = 'yahoo.com';

    addEventListenerToClass('fa-facebook-official', 'click', function () {
        openLink('https://www.facebook.com/veeraj1991');
    });

    addEventListenerToClass('fa-linkedin-square', 'click', function () {
        openLink('https://www.linkedin.com/in/veeraj-shenoy-3a644713a');
    });

    addEventListenerToClass('fa-twitter-square', 'click', function () {
        openLink('https://twitter.com/this_object');
    });

    addEventListenerToClass('fa-github-square', 'click', function () {
        openLink('https://github.com/veerajongit/');
    });

    addEventListenerToClass('fa-stack-overflow', 'click', function () {
        openLink('https://stackexchange.com/users/5382849/veeraj-shenoy');
    });

    addEventListenerToClass('fa-medium', 'click', function () {
        openLink('https://medium.com/@veerajthegreat');
    });

    document.getElementById('email').innerHTML = `<a href="mailto:${name}@${provider}">${name}@${provider}</a>`;
});

const clicked = url => window.open(url, '_blank');

function setProjects(img, description, companyURL, companyName) {
    return `
    <div ${companyURL !== '' ? `onclick="clicked('${companyURL}')"` : ''}
            class="flex flex-col border border-y-0 border-gray-100 hover:shadow-2xl shadow-lg rounded-lg pt-0 pb-1 mb-4 my-4 ${companyURL !== '' && 'cursor-pointer'}">
            <div class="w-full bg-cover rounded-t-lg"
                style="background-image: url(${img}); min-height: 100px;">
                <div class="translucent h-full w-full rounded-t-lg"></div>
            </div>
            <div class="w-full text-xs lg:text-sm text-gray-500 px-2 flex flex-col justify-between h-full">
                <div class="text-sm lg:text-md py-2 text-gray-600">
                    ${description}
                </div>
                <div class="text-right">
                    ${companyURL !== '' ? `<a href="${companyURL}" target="_blank">${companyName}</a>` : `${companyName}`}
                </div>
            </div>
        </div>
    `;
}

let projectDiv = ``;
projects.forEach(project => {
    let url = ``;
    if (project.url !== undefined && project.url.length > 0) {
        url = project.url[0];
    }
    projectDiv += setProjects('/assets/img/' + project.img, project.about, url, project.name);
});
document.getElementById('projects').innerHTML = projectDiv;

let sideProjectDiv = ``;
side_projects.forEach(project => {
    sideProjectDiv += setProjects('/assets/img/' + project.img, project.about, project.url[0], project.name);
});
document.getElementById('side_projects').innerHTML = sideProjectDiv;