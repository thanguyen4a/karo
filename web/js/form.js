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
        var tell = $("#tell").val();
        var mail = $("#mail").val();
        var birthday = $("#birthday").val();
        var avatar = $("#avatar").val();
        var error = $("#error");


        var errors = "";
        errors += validateUser(user);
        errors += validateAge(age);
        errors += validateSex(sex);
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
        return "Sex is invalid";
    return "";
}




