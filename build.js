builder.addModule({
    name: 'jQuery',
    type: 'library',
    link: 'http://jquery.com/',
    files: [
        __dirname + '/jquery.js'
    ]
});

builder.addModule({
    name: 'jQuery No Conflict',
    type: 'library',
    hidden: true,
    files: [
        __dirname + '/jquery-no-conflict.js'
    ]
});

builder.addModule({
    name: 'jQuery UI',
    type: 'library',
    link: 'http://jqueryui.com/',
    files: [
        __dirname + '/jquery-ui.js'
    ]
});

builder.addModule({
    name: 'jQuery Hotkeys',
    type: 'library',
    link: 'https://github.com/jeresig/jquery.hotkeys/',
    files: [
        __dirname + '/jquery-hotkeys.js'
    ]
});

builder.addModule({
    name: 'ResizeTable',
    type: 'library',
    link: 'https://code.google.com/p/resizetable-js/',
    hidden: true,
    files: [
        __dirname + '/resizetable.js'
    ]
});

builder.addModule({
    name: 'GoogTable',
    type: 'library',
    link: 'https://code.google.com/p/closure-library/source/browse/closure/goog/editor/table.js',
    hidden: true,
    files: [
        __dirname + '/goog-table.js'
    ]
});

builder.addModule({
    name: 'Plupload',
    type: 'library',
    hidden: true,
    files: [
        __dirname + '/plupload.js',
        __dirname + '/plupload.html4.js',
        __dirname + '/plupload.html5.js',
        __dirname + '/jquery.ui.plupload.js'
    ]
});

builder.addModule({
    name: 'Diff',
    type: 'library',
    link: 'http://code.google.com/p/google-diff-match-patch/',
    hidden: true,
    files: [
        __dirname + '/diff.js'
    ]
});

builder.addModule({
    name: 'Pines Notify',
    type: 'library',
    link: 'http://pinesframework.org/pnotify/',
    hidden: true,
    files: [
        __dirname + '/jquery-pnotify.js',
        __dirname + '/jquery-pnotify.css',
    ]
});

builder.addModule({
    name: 'Class List',
    type: 'library',
    link: 'https://github.com/eligrey/classList.js',
    hidden: true,
    files: [
        __dirname + '/classlist.js',
    ]
});
