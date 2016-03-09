// namespace?
var VARS = new Object();
VARS['host'] = 'http://192.168.33.15';

function req_datetime(id) {
    $.get(VARS['host'] + "/datetime.php")
        .done(function(date) {
            console.log(date);
            $('#' + id).text(date)
        });
}