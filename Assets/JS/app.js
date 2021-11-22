function validateform() {
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;

    if (name == "" || name == " ") {
        alert("🙅‍♀️ Name can't be blank ");
        console.warn("🙅‍♀️ Name can't be blank ");
        return false;
    } else if (username.length < 6) {
        alert("🙅‍♂️ Username must be at least 6 characters long");
        console.warn("🙅‍♂️ Username must be at least 6 characters long");
        return false;
    }
    else if (password.length < 6) {
        alert("🙅 Password must be at least 6 characters long");
        console.warn("🙅 Password must be at least 6 characters long");
        return false;
    }
    else {  
        alert("✅ Registration Sucessfull");
        console.alert("✅ Registration Sucessfull");  
     }

}