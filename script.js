function validation(){
  var user = document.getElementById('user').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var conpass = document.getElementById('conpass').value;

  

  if(user==""){
    document.getElementById('username').innerHTML = "**Please fill this part";
    return false;
  }
  if(user.length <=2){
    document.getElementById('username').innerHTML = "**Name should be at least be 2 letter";
    return false;
  }
  if(!isNaN(user)){
     document.getElementById('username').innerHTML = "**Name can only contain words";
    return false;
  }

  
  if(email == ""){
    document.getElementById('Email').innerHTML = "**Enter the email";
    return false;
  }
  if(email.indexOf('@')== 0){
    document.getElementById('Email').innerHTML = "**@ is not in a valid position";
    return false;
  }
  if((email.charAt(email.length-4)!= '.')&&(email.charAt(email.length-3)!= '.')){
    document.getElementById('Email').innerHTML = "** . is not in a valid position";
    return false;
  }
  


  
  if(pass == " "){
    document.getElementById('password').innerHTML = "**Enter the password";
    return false;
  }
  
  
  


  
  if(conpass != pass){
    document.getElementById('confirmpass').innerHTML = "**Password should be the same";
    return false;
  }
  if(conpass == ""){
    document.getElementById('confirmpass').innerHTML = "**Enter the password again";
    return false;
  }
}

            
