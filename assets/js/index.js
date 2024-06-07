function setProjects(img, description, companyURL, companyName) {
    return `
    <div
            class="flex flex-col border border-y-0 border-gray-100 hover:shadow-2xl shadow-lg rounded-lg pt-0 pb-1 mb-4 my-4">
            <div class="w-full bg-cover"
                style="background-image: url(${img}); min-height: 100px;">
                <div class="translucent h-full w-full"></div>
            </div>
            <div class="w-full text-xs text-gray-500 px-2 flex flex-col justify-between h-full">
                <div class="text-sm py-2 text-gray-600">
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
    if(project.url !== undefined && project.url.length > 0) {
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