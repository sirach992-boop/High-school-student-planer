let user = JSON.parse(

localStorage.getItem("user")

);



let profile = JSON.parse(

localStorage.getItem("profile")

);







function loadDashboard(){



let name = "Student";





if(profile && profile.name){


name = profile.name;


}

else if(user && user.name){


name = user.name;


}







let welcome = document.getElementById("welcomeName");



if(welcome){


welcome.innerHTML = name;


}









let homework = JSON.parse(

localStorage.getItem(

"homework_" + (user ? user.email : "guest")

)

) || [];







let count = document.getElementById("homeworkCount");



if(count){


count.innerHTML = homework.length;


}






}








loadDashboard();