function startTime() {
    var date = new Date();
    var todaysDate = date.toDateString();
    var currentTime = date.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit"
    });

    var fullDate = todaysDate;
    var digitalClock = currentTime;

    document.getElementById("date").innerHTML = fullDate;
    document.getElementById("time").innerHTML = digitalClock;

    var t = setTimeout(startTime, 500);
}

$(document).ready(function() {
    startTime();
});
