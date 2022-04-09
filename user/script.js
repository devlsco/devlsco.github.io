const user = document.getElementById("user");
const user_button = document.getElementById("user_button");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const text7 = document.getElementById("text7");
const text8 = document.getElementById("text8");
const text9 = document.getElementById("text9");
const text10 = document.getElementById("text10");
const text11 = document.getElementById("text11");
const text12 = document.getElementById("text12");
const text13 = document.getElementById("text13");
const text14 = document.getElementById("text14");

function makeHttpObject() {
    if ("XMLHttpRequest" in window) return new XMLHttpRequest();
    else if ("ActiveXObject" in window) return new ActiveXObject("Msxml2.XMLHTTP");
}

let username = window.location.search.slice(2);

let request = makeHttpObject();
request.open("GET", `https://api.ivr.fi/v2/twitch/user/${username}`, true);
request.send(null);
request.onreadystatechange = function () {

    text1.innerText = request.responseText.split(`"displayName":"`)[1].split(`",`)[0]
    text2.innerText = request.responseText.split(`"id":"`)[1].split(`",`)[0]
    text3.innerText = request.responseText.split(`"followers":`)[1].split(`,"`)[0]
    text4.innerText = request.responseText.split(`"profileViewCount":`)[1].split(`,"`)[0]
    text5.innerText = request.responseText.split(`"createdAt":"`)[1].split(`T`)[0]
    text6.innerText = request.responseText.split(`"verifiedBot":`)[1].split(`,`)[0]
    text7.innerText = request.responseText.split(`"isAffiliate":`)[1].split(`,"`)[0]
    text8.innerText = request.responseText.split(`"isPartner":`)[1].split(`,"`)[0]
    text9.innerText = request.responseText.split(`"bio":"`)[1].split(`",`)[0]
    text10.innerText = request.responseText.split(`"banned":`)[1].split(`,"`)[0]
    if(request.responseText.split(`"banned":`)[1].split(`,"`)[0] === "true"){
        text10.innerText = `true - BanReason: ${request.responseText.split(`"banReason":"`)[1].split(`",`)[0]}`
    }
};

let request2 = makeHttpObject();
request2.open("GET", `https://modlookup.3v.fi/api/user-totals/${username}`, true);
request2.send(null);
request2.onreadystatechange = function () {
    text11.innerText = request2.responseText.split(`"follows":`)[1].split(`,`)[0]
    text12.innerText = request2.responseText.split(`"views":`)[1].split(`,`)[0]
    text13.innerText = request2.responseText.split(`"total":`)[1].split(`,`)[0]
    text14.innerText = request2.responseText.split(`"partners":`)[1].split(`}`)[0]
};

function openInNewTab() {
    let url = "https://modlookup.3v.fi/u/" + text1.innerText
    window.open(url, '_blank').focus();
}
