function saveSettings(){



let profile = {


name:

document.getElementById("studentName").value,


grade:

document.getElementById("studentGrade").value,


school:

document.getElementById("schoolName").value



};




localStorage.setItem(

"profile",

JSON.stringify(profile)

);



alert("Profile saved!");



}









function loadSettings(){



let profile = JSON.parse(

localStorage.getItem("profile")

);





if(profile){



document.getElementById("studentName").value = profile.name || "";


document.getElementById("studentGrade").value = profile.grade || "";


document.getElementById("schoolName").value = profile.school || "";



}



}









function changeTheme(){



let theme = document.getElementById("theme").value;




localStorage.setItem(

"theme",

theme

);




if(theme === "dark"){



document.body.style.background="#111827";

document.body.style.color="white";



}

else{


document.body.style.background="#f4f7ff";

document.body.style.color="#222";


}



}









function resetPlanner(){



let answer = confirm(

"Are you sure you want to delete planner data?"

);




if(answer){



localStorage.removeItem("homework");

localStorage.removeItem("schedule");

localStorage.removeItem("events");



alert("Planner data deleted!");



}



}









function acceptRules(){



let checked = document.getElementById("acceptRules").checked;



if(!checked){


alert("Please accept the rules first");


return;


}



localStorage.setItem(

"rulesAccepted",

"true"

);



alert("Rules accepted!");



}









function logout(){



localStorage.removeItem(

"loggedIn"

);



alert("Logged out successfully");



window.location.href="../account/login.html";



}







loadSettings();