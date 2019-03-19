/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var max_lenght_user = 10;
var max_lenght_age = 100;



$(document).ready(function () {

    $("#submit").click(function () {
        var user = $("#user").val();
        var age = $("#age").val();
        var sex = $('input[name="sex"]:checked');
        var tel = $("#tel").val();
        var mail = $("#mail").val();
        var birthday = $("#birthday").val();
        var avatar = $("#avatar").val();
        var error = $("#error");


        var errors = "";
        errors += validateUser(user);
        errors += validateAge(age);
        errors += validateSex(sex);
        errors += validateMail(mail);
        errors += validateTel(tel);
        error.html(errors);
    }
    );


});


function validateUser(user) {
    var re = new RegExp("^[a-zA-Z0-9]*$");
    if (!re.test(user))
        return "User name is invalid \n"; 
    if(user.length > max_lenght_user)
        return "User name must be less than or equal to"+ max_lenght_user +"letters\n";
    
    return "";
}

function validateAge(age) {
    var re = new RegExp("^[\d]*$");
    if (!re.test(age))
        return "Age is invalid \n"; 
    var age_number = parseInt(age);
    if(age_number > max_lenght_age || age_number < 0)
        return "Age must be beetween from 0 to "+ max_lenght_age + "\n";
    
    return "";
}


function validateSex(sex) {   
    if(sex.length === 0)
        return "Sex is invalid \n";
    return "";
}

function validateMail(mail) {   
    var regexp = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
		+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
    var re = new RegExp(regexp);
    if (!re.test(mail))
        return "Mail is invalid \n"; 
    return "";
}


function validateTell(tel) {   
    console.log("tel " + tel);
    var regexp = "\\d{11}";
    var re = new RegExp(regexp);
    if (!re.test(tel))
        return "Tel is invalid \n"; 
    return "";
}

