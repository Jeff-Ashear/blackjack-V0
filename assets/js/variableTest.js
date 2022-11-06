var global = ""

function setter(str) {
    global = "boop"
    changer(global)
    console.log("setter", global)
    return global
}

function changer(str) {
    var local = global;
    return local
}

console.log("changer", setter(global))

