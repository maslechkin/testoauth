$(document).ready(function() {
    var auth = new Auth();
    var btn = $('#auth');

    btn.click(function(){
        auth.sendAuth();
    });
});