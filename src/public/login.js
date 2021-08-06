
function login() {
    const xhr = new XMLHttpRequest();
    let gauth;
    gapi.load('auth2', function () {
        gauth = gapi.auth2.init({
            client_id: '1034287309774-2pf7dmbbfoh8lfvarb28imdtiopjafei.apps.googleusercontent.com'
        });

        gauth.signIn().then(result => {
            let user = gauth.currentUser.get();
            let userName = user.getBasicProfile().getName();
            let userInfo_it = result.getAuthResponse().id_token;
            let userInfo_at = result.getAuthResponse(true).access_token;
            console.log(userName, userInfo_it, userInfo_at);
            xhr.open('post', 'http://localhost:5000/auth/signin/google', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        let payload = JSON.parse(xhr.responseText);
                        window.location.href = './next.html';
                        localStorage.setItem('token', payload.token);
                        localStorage.setItem('name', userName)
                    } else {
                        console.error(xhr.responseText);
                    }
                }
            };
            xhr.send("it=" + userInfo_it + "&at=" + userInfo_at);
        });
    });
}