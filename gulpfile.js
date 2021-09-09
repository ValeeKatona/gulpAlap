const { src, dest, watch } = require('gulp');

function streamHtml(){
    return src('src/*.html')
    .pipe(dest('public'));
}


function streamJS(){
    return src('src/js/*.js')
    .pipe(dest('public/js'));
}

function streamJQuery(){
    return src('node_modules/jquery/dist/jquery.min.js')
    .pipe(dest('public/lib'));
}

exports.jquery = streamJQuery;
exports.html = streamHtml;
exports.default = function() {
    watch('src/*.html',streamHtml)
    watch('src/js/*.js',streamJS)
}