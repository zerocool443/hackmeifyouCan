function signupValidate(){
    var username = document.getElementById('username').value;
    if(username == "") {
      alert("Error: Username cannot be blank!");
      document.getElementById('username').focus();
      document.getElementById('username').className += "has-error";
      return false;
}
}