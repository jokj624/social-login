function apple() {
    document.addEventListener('AppleIDSignInOnSuccess', (data) => {
        //handle successful response
        console.log(data.detail.authorization);
        console.log("AppleIDSignInOnSuccess")
        //todo success logic
    });
}
