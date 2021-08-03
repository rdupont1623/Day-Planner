
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

/*when the button is pressed, the function should
clear existing local storage 
(window.localStorage.removeItem('name of item'))
and replace in that item's location a new string that
was entered by the user
*/


Clock();