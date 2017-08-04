let val
let num
let history
let state = ["Refunded", "Failed", "Successful"]
let results = []
let failedStyle = false
let random = function (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    val = Math.floor(Math.random() * (max - min) + min)

    stat()
    return val

}

let stat = function () {
    var f = Math.random()
    history = new Date(2017,11,17)

    if (f > 0.9 && val > 0) {
        num = 1

    } else if (val <= 0) {
        num = 0
    } else if (val > 0) {
        num = 2
    }
}
for (i = 0; i <= 200; i = i + 3) {
    transactions = { amount: random(-50, 100), status: state[num] }

    if (num === 1) {
        results.push("<strong> Amounts: <del><mark>" + transactions.amount + "$</mark></del>//")
        results.push("<mark>" + transactions.status + "</mark>---------------</strong>")
    } else if (num === 2) {
        results.push("<strong class=\"succesfull\">Amounts:    ." + transactions.amount + " $ </strong>//")
        results.push("<strong class=\"succesfull\">Status:    ." + transactions.status + "</strong>")
    } else {
        results.push("<strong class=\"refunded\">Amounts:    ." + transactions.amount + "$</strong>//")
        results.push("<strong class=\"refunded\">Status:    ." + transactions.status + "</strong>")
    }
    results.push("// <strong> [[Histroy : [2017:" + Math.ceil(Math.random()*12)+":"+Math.ceil(Math.random()*12) + "] ]]</strong>")
    document.getElementById("amount").innerHTML += "<li>" + results[i] + " " + results[i + 1] + " " + results[i + 2] + "</li>"
}


