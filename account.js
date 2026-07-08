function signup(){


    let name = document.getElementById("signupName").value;

    let email = document.getElementById("signupEmail").value;

    let password = document.getElementById("signupPassword").value;



    if(name === "" || email === "" || password === ""){


        alert("Please fill all fields");

        return;

    }




    let user = {


        name:name,

        email:email,

        password:password


    };




    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );



    alert("Account created successfully!");



    window.location.href="login.html";


}









function login(){


    let email = document.getElementById("loginEmail").value;


    let password = document.getElementById("loginPassword").value;




    let user = JSON.parse(

        localStorage.getItem("user")

    );




    if(user === null){


        alert("No account found. Please signup first.");

        return;


    }







    if(

        email === user.email &&

        password === user.password

    ){



        localStorage.setItem(

            "loggedIn",

            "true"

        );



        alert("Login successful!");



        window.location.href="../pages/dashboard.html";



    }



    else{


        alert("Incorrect email or password");


    }



}