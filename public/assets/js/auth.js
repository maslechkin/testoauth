function Auth(object) {
    this.object = object;

    this.sendAuth = function () {
        $.ajax({
            type: "POST",
            url: 'https://testing.e-id.cards/oauth/user',
            //url: 'https://testing.e-id.cards/oauth/client',
            data: {
                'response_type' : 'code',
                'redirect_uri' : 'google.com',
                'client_id' : 'test-task',
                'client_secret' : 'soHievJa',
                //'grant_type':'authorization_code'
                'scope': 'firstname,surname,email,phone,pwhash,viber,skype,wechat,trust_level,otp,totp_secret'
            },
            headers: {
                "Authorization": "Basic " + btoa("s.deal@ukr.net:EiG3oobe")
            },
            success: function(){
                console.log(777);
            },
        });
    };
}