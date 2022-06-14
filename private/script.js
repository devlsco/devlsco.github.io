function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


document.onload = test()
function test(){
    if(getCookie("userid") === undefined || getCookie("userid") === ""){
        if(document.URL.includes("#access_token=")){
            validate()
        }
    } else {
        console.log(getCookie("userid"))
    }
}