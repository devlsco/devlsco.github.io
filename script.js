const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");

const alterEL = document.getElementById("alter");

function makeHttpObject() {
    if ("XMLHttpRequest" in window) return new XMLHttpRequest();
    else if ("ActiveXObject" in window) return new ActiveXObject("Msxml2.XMLHTTP");
}

let request = makeHttpObject();
request.open("GET", "https://modlookup.3v.fi/api/user-totals/lsco", true);
request.send(null);
request.onreadystatechange = function () {
    let follows = request.responseText.split(`"follows":`)[1].split(`,`)[0]
    let views = request.responseText.split(`"views":`)[1].split(`,`)[0]
    let total = request.responseText.split(`"total":`)[1].split(`,`)[0]
    let partners = request.responseText.split(`"partners":`)[1].split(`}`)[0]
    text1.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(follows).replace(/,00\s?[\u20AC]/, "")
    text2.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(views).replace(/,00\s?[\u20AC]/, "")
    text3.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total).replace(/,00\s?[\u20AC]/, "")
    text4.innerText = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(partners).replace(/,00\s?[\u20AC]/, "")
};