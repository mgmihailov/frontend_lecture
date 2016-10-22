function error(msg) {
    var el = document.getElementById("notifiaction-container");
    el.innerHTML = msg;
    el.className = "error";
    setTimeout(function(elArg){
        elArg.className = "";
        elArg.innerHTML = "";
    }, 6000, el);
}

function success(msg) {
    var el = document.getElementById("notifiaction-container");
    el.innerHTML = msg;
    el.className = "success";
    setTimeout(function(elArg){
        elArg.className = "";
        elArg.innerHTML = "";
    }, 6000, el);
}