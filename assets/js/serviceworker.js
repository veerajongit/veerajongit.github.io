if (location.hostname !== '127.0.0.1' && location.hostname !== 'localhost') {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(function () {
                console.log('Service Worker Registered');
            });

        const pathname = location.pathname;
        if (pathname.indexOf(".html") > -1) {
            location.href = pathname.replace('.html', '');
        }
    }
}