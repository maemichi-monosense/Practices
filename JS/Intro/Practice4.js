// namespace?
var VARS = new Object();
VARS['host'] = 'http://192.168.33.15';

// for debug use
function phpinfo(id) {
    $.get(VARS['host'] + "/phpinfo.php")
        .done(function(html) {
            $('#' + id).html(html);
        });
}

function req_datetime(id) {
    $.get(VARS['host'] + "/datetime.php")
        .done(function(date) {
            console.log(date);
            $('#' + id).text(date)
        });
}