function toggleSidebar(){

    let sidebar = document.getElementById("sidebar");

    let content = document.querySelector(".content");


    if(sidebar){

        sidebar.classList.toggle("closed");

    }


    if(content){

        content.classList.toggle("expanded");

    }


}