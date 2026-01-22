document.addEventListener("DOMContentLoaded",function(){
    const signupForm= document.getElementById("signup-form");

    signupForm.addEventListener("submit", function(event){
        event.preventDefault();

        const name= document.getElementById("name").Value.trim();
        const age= parseInt(document.getElementById("age").value);
        const gender= document.getElementById("gender").value;
        const address= document.getElementById("address").Value.trim();
        const country= document.getElementById("country").Value.trim();
        const phone= document.getElementById("phone").Value.trim();

        if(name==""||isNaN(age)||age<=0||age>=150|| address===""||country===""||phone===""){
            alert("Please Fill All With Valid Information");
        }

        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Gender:", gender);
        console.log("Address:", address);
        console.log("Country:", country);
        console.log("Phone:", phone);

    });
});