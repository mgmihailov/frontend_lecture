function error(msg) {
    var el = document.createElement("span");
    el.innerHTML = msg;
    el.className = "error";
    document.body.appendChild(el);
}

function success(msg) {
    var el = document.createElement("span");
    el.innerHTML = msg;
    el.className = "success";
    document.body.appendChild(el);
}