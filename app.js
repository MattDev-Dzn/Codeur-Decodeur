function encode() {
    const message = document.getElementById('message').value;
    const code = btoa(message);
    document.getElementById('code').value = code;
}

function decode() {
    const code = document.getElementById('code').value;
    const message = atob(code);
    document.getElementById('message').value = message;
}