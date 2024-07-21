let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let statuss = document.getElementById('status');
statuss.innerText = "Captcha Generator";

function generate() {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("entered-captcha").value = '';
    statuss.innerText = "Captcha Generator"
}

function check() {
    let userValue = document.getElementById("entered-captcha").value;
    if (userValue == captcha) {
        statuss.innerText = "Correct!!"
    } else {
        statuss.innerText = "Try Again!!"
        document.getElementById("entered-captcha").value = '';
    }
}