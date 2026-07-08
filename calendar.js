let user = JSON.parse(localStorage.getItem("user"));

let username = user ? user.email : "guest";


let eventKey = "events_" + username;



let events = JSON.parse(

localStorage.getItem(eventKey)

) || [];



let currentDate = new Date();







function addEvent(){



let title =
document.getElementById("eventTitle").value;



let date =
document.getElementById("eventDate").value;



let time =
document.getElementById("eventTime").value;



let description =
document.getElementById("eventDescription").value;






if(title === "" || date === ""){


alert("Please add event name and date");


return;


}







events.push({


title:title,

date:date,

time:time,

description:description


});





saveEvents();



document.getElementById("eventTitle").value="";

document.getElementById("eventDate").value="";

document.getElementById("eventTime").value="";

document.getElementById("eventDescription").value="";



}









function saveEvents(){



localStorage.setItem(


eventKey,


JSON.stringify(events)


);



displayEvents();


drawCalendar();


}









function displayEvents(){



let box =
document.getElementById("eventList");



if(!box)return;




box.innerHTML="";






if(events.length===0){



box.innerHTML=`

<div class="homework-card">


<h2>
🗓 No Events
</h2>


<p>
Add your first event.
</p>


</div>

`;

return;


}








events.forEach(function(event,index){



box.innerHTML += `


<div class="homework-card">


<h2>
📌 ${event.title}
</h2>


<p>
📅 ${event.date}
</p>


<p>
⏰ ${event.time}
</p>


<p>
${event.description}
</p>



<button onclick="deleteEvent(${index})">

Delete

</button>



</div>


`;



});


}









function deleteEvent(index){



events.splice(index,1);



saveEvents();



}









function drawCalendar(){



let days =
document.getElementById("calendarDays");


let monthYear =
document.getElementById("monthYear");



if(!days)return;




days.innerHTML="";



let year =
currentDate.getFullYear();



let month =
currentDate.getMonth();





monthYear.innerHTML =

currentDate.toLocaleString(

"default",

{

month:"long",

year:"numeric"

}

);






let firstDay =

new Date(year,month,1).getDay();



let totalDays =

new Date(year,month+1,0).getDate();








for(let i=0;i<firstDay;i++){


days.innerHTML += "<div></div>";


}








for(let d=1; d<=totalDays; d++){



let date =

`${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;






let eventDay = events.some(

e=>e.date===date

);






days.innerHTML += `


<div class="calendar-day ${eventDay ? "event-day":""}">


<h3>
${d}
</h3>


</div>


`;



}



}








function nextMonth(){


currentDate.setMonth(

currentDate.getMonth()+1

);



drawCalendar();



}









function previousMonth(){


currentDate.setMonth(

currentDate.getMonth()-1

);



drawCalendar();



}







drawCalendar();


displayEvents();