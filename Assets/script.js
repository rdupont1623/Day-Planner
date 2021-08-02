
// Clock Function
let Clock = function() {
document.querySelector("#nowTime").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(Clock, 1000)


//window.localStorage.setItem('')


Clock();