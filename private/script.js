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