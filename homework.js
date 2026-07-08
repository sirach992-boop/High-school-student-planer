let user = JSON.parse(localStorage.getItem("user"));

let username = user ? user.email : "guest";


let homeworkKey = "homework_" + username;



let homework = JSON.parse(

localStorage.getItem(homeworkKey)

) || [];







function addHomework(){



let title =
document.getElementById("title").value;



let subject =
document.getElementById("subject").value;



let date =
document.getElementById("date").value;



let priority =
document.getElementById("priority").value;





if(title === "" || subject === ""){


alert("Please fill homework details");


return;


}




homework.push({


title:title,

subject:subject,

date:date,

priority:priority,

done:false


});




saveHomework();



document.getElementById("title").value="";

document.getElementById("subject").value="";



}








function displayHomework(){


let box=document.getElementById("homeworkList");



if(!box){

return;

}



box.innerHTML="";





if(homework.length===0){



box.innerHTML=`

<div class="homework-card">

<h2>
📚 No Homework
</h2>

<p>
Add your first assignment.
</p>

</div>

`;

return;


}





homework.forEach(function(item,index){



box.innerHTML += `


<div class="homework-card">


<h2>
📖 ${item.title}
</h2>


<p>
📘 ${item.subject}
</p>


<p>
📅 ${item.date}
</p>


<p>
${item.priority}
</p>


<button onclick="deleteHomework(${index})">

Delete

</button>


</div>


`;



});


}








function deleteHomework(index){


homework.splice(index,1);


saveHomework();


}







function saveHomework(){


localStorage.setItem(

homeworkKey,

JSON.stringify(homework)

);



displayHomework();


}





displayHomework();