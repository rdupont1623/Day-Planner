
let saveEntry = document.querySelector("#save");

// Running Clock Function
let Clock = function() {
document.querySelector("#nowTime").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(Clock, 1000)


//Declarations of base values

let hourLine = $(".hour");
let current = parseInt(moment().format("H"));

/* by setting var current as the integer value of the 
present hour we can tell the program to compare that to 
the ID value entered for each hour on each hourLine
pareInt has turned both of these values into integers,
so we're simply comparing two numbers*/

$.each(hourLine, function(i, hour){
    let hourIdValue = parseInt($(this).attr("id"));
        if (hourIdValue === current) {
            $(this).next().addClass("present");
        } else if (hourIdValue < current) {
            $(this).next().addClass("past");
        } else if (hourIdValue > current) {
            $(this).next().addClass("future");
        }
});

$(".save").on("click", function () {
    // Get nearby values of the description in JQuery
    let text = $(this).siblings(".textbox").val();
    var time = $(this).parent().attr("id");

    // Saveing to local storage
    localStorage.setItem(time, text);
})


$("#hour6 .textbox").val(localStorage.getItem("hour6"));
$("#hour7 .textbox").val(localStorage.getItem("hour7"));
$("#hour8 .textbox").val(localStorage.getItem("hour8"));
$("#hour9 .textbox").val(localStorage.getItem("hour9"));
$("#hour10 .textbox").val(localStorage.getItem("hour10"));
$("#hour11. textbox").val(localStorage.getItem("hour11"));
$("#hour12. textbox").val(localStorage.getItem("hour12"));
$("#hour13 .textbox").val(localStorage.getItem("hour13"));
$("#hour14 .textbox").val(localStorage.getItem("hour14"));
$("#hour15 .textbox").val(localStorage.getItem("hour15"));
$("#hour16 .textbox").val(localStorage.getItem("hour16"));
$("#hour17 .textbox").val(localStorage.getItem("hour17"));
$("#hour18 .textbox").val(localStorage.getItem("hour18"));
$("#hour19 .textbox").val(localStorage.getItem("hour19"));
$("#hour20 .textbox").val(localStorage.getItem("hour20"));
$("#hour21 .textbox").val(localStorage.getItem("hour21"));
$("#hour22 .textbox").val(localStorage.getItem("hour22"));
$("#hour23 .textbox").val(localStorage.getItem("hour23"));
$("#hour24 .textbox").val(localStorage.getItem("hour24"));




Clock();