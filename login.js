document.addEventListener("DOMContentLoaded", function(){
    const loginForm= document.getElementById("login-form");

    loginForm.addEventListener("submit",function(event){
        event.preventDefault();

        const username= document.getElementById("username").value;
        const password= document.getElementById("password").value;

        if(username.trim()==""|| password.trim()==""){
            alert("Please Enter Both Username And Password.");
        }

        console.log("Username:", username);
        console.log("Password:", password);
    });
});