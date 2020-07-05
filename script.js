function validation() {

    //fetch the document by ids
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var Confirm = document.getElementById("cnfPass").value;
    var Mobile = document.getElementById("Mobile").value;
    var Email = document.getElementById("Email").value;

    //validation starts for usernNAME

    if (user == "") {
        document.getElementById("username").innerHTML = " ** please enter the username fields";
        return false;//if we dont write false the the  text will go to serrer
    }

    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById("username").innerHTML = "  ** user length must be between 2 and 20";
        return false;
    }

    if (!isNaN(user)) {
        document.getElementById("username").innerHTML = "  ** only characters are allowed";
        return false;

    }

    //ends the validation of username
    // ****************************************************************************
    //password check
    if (pass == "") {
        document.getElementById("Password").innerHTML = " ** please enter the password fields";
        return false;//if we dont write false the the  text will go to serrer
    }

    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById("Password").innerHTML = "  ** user length must be between 5 and 20";
        return false;
    }

    if (Confirm == "") {
        document.getElementById("Confirm-password").innerHTML = " ** please enter the confirm-password fields";
        return false;//if we dont write false the the  text will go to serrer
    }

    if (pass != Confirm) {
        document.getElementById("Confirm-password").innerHTML = " ** password did not match";
        return false;
    }

    //    password validation ends


   

    // ******************************************************************

    // mobile validaton starts..
    if (Mobile == "") {
        document.getElementById("mobile-number").innerHTML = " ** please enter the Mobile number fields";
        return false;//if we dont write false the the  text will go to serrer
    }

    if (isNaN(Mobile)) {
        document.getElementById("mobile-number").innerHTML = "** type mismatch please use only numbers";
        return false;
    }

    if (Mobile.length != 10) {
        document.getElementById("mobile-number").innerHTML = "** mobile number must be of 10 digit";
        return false;
    }

    // mobile validation ends

    // *************************************************************

    // email validation starts
    if (Email == "") {
        document.getElementById("emailid").innerHTML = " ** please enter the email fields";
        return false;//if we dont write false the the  text will go to serrer
    }

    if (Email.indexOf('@') <= 0) {
        document.getElementById("emailid").innerHTML = " ** @ invalid position";
        return false;
    }

    if ((Email.charAt(Email.length - 4)!=".") && (Email.charAt(Email.length-3) != "."))
    {
        document.getElementById("emailid").innerHTML = " ** . invalid position";
        return false;
    }

}



 // password check
 function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function myFunction() {
    var x = document.getElementById("cnfPass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }