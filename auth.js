// Protect planner pages

let loggedIn = localStorage.getItem("loggedIn");


if(loggedIn !== "true"){

    window.location.href = "../account/login.html";

}