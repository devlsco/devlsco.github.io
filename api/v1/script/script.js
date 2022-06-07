const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");

function makeHttpObject() {
    if ("XMLHttpRequest" in window) return new XMLHttpRequest();
    else if ("ActiveXObject" in window) return new ActiveXObject("Msxml2.XMLHTTP");
}

let request = makeHttpObject();
request.open("GET", "https://modlookup.3v.fi/api/user-totals/lsco", true);
request.send(null);
request.onreadystatechange = function () {
    let t2 = request.responseText.split(`"follows":`)[1].split(`,`)[0]
    let t3 = request.responseText.split(`"views":`)[1].split(`,`)[0]
    let t4 = request.responseText.split(`"total":`)[1].split(`,`)[0]
    let t5 = request.responseText.split(`"partners":`)[1].split(`}`)[0]
    text1.innerText = request.responseText.split(`"user":"`)[1].split(`"`)[0]
    text2.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(t2).replace(/,00\s?[\u20AC]/, "")
    text3.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(t3).replace(/,00\s?[\u20AC]/, "")
    text4.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(t4).replace(/,00\s?[\u20AC]/, "")
    text5.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(t5).replace(/,00\s?[\u20AC]/, "")
    text6.innerText = request.responseText.split(`"user":"`)[1].split(`"`)[0]
};