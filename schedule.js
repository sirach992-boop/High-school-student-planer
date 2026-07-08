let user = JSON.parse(localStorage.getItem("user"));

let username = user ? user.email : "guest";


let scheduleKey = "schedule_" + username;



let schedule = JSON.parse(

localStorage.getItem(scheduleKey)

) || [];







function addClass(){



let day=document.getElementById("day").value;

let time=document.getElementById("time").value;

let subject=document.getElementById("subject").value;

let teacher=document.getElementById("teacher").value;

let room=document.getElementById("room").value;





if(subject==="" || teacher===""){


alert("Add subject and teacher");


return;


}





schedule.push({


day,

time,

subject,

teacher,

room


});



saveSchedule();



}








function displaySchedule(){



let box=document.getElementById("scheduleList");



if(!box)return;



box.innerHTML="";





schedule.forEach(function(item,index){



box.innerHTML += `


<div class="homework-card">


<h2>
📘 ${item.subject}
</h2>


<p>
📅 ${item.day}
</p>


<p>
⏰ ${item.time}
</p>


<p>
👨‍🏫 ${item.teacher}
</p>


<p>
🚪 Room ${item.room}
</p>



<button onclick="deleteClass(${index})">

Remove

</button>


</div>


`;



});


}








function deleteClass(index){


schedule.splice(index,1);


saveSchedule();


}








function saveSchedule(){



localStorage.setItem(

scheduleKey,

JSON.stringify(schedule)

);



displaySchedule();


}






displaySchedule();