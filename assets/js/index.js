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
    array.forEach(value => {
        str += `
        <div class="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden mx-auto border-t">
            <img class="w-full h-48 object-contain border-b" src="assets/img/${value.img}" alt="${value.name}">
            <div class="p-6">
                <h2 class="text-xl font-semibold text-gray-800">${value.name}</h2>
                <p class="mt-2 text-gray-600 text-sm" style="min-height: 80px;">${value.about}</p>
                
                <div class="mt-4">
                    <h4 class="text-gray-400 font-xs">Platforms: ${value.platform}</h4>
                    <div class="flex flex-wrap mt-2 gap-2">`;

        value.technology.split(',').forEach(technology => {
            const colors = ['bg-blue-100 text-blue-800', 'bg-red-100 text-red-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800', 'bg-purple-100 text-purple-800'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            str += `<span class="inline-block ${color} text-xs font-semibold px-2.5 py-0.5 rounded">${technology}</span>`;
        });

        str += `
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    return str;
}
