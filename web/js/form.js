/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var max_lenght_user = 10;
var max_lenght_age = 100;
var max_capital = 1000;  //byte



$(document).ready(function () {

    avatar = document.getElementById("avatar");
    var file;

    avatar.addEventListener("change", function (evt) {
        console.log("mmm");
        file = evt.target.files;


        if (file === null) {

            console.log("avatar null");
        } else {
            console.log("khac null");
        }
    });

    $("#submit").click(function () {
        var user = $("#user").val();
        var age = $("#age").val();
        var sex = $('input[name="sex"]:checked');
        var tel = $("#tel").val();
        var mail = $("#mail").val();
        var birthday = $("#birthday").val();

        var error = $("#error");


        var errors = "";
        errors += validateUser(user);
        errors += validateAge(age);
        errors += validateSex(sex);
        errors += validateMail(mail);
        errors += validateTel(tel);
        errors += validateDate(birthday);
        errors += validateAvatar(file);
        error.html(errors);
    }
    );


});


function validateUser(user) {
    var re = new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9]*$");
    if (!re.test(user))
        return "User name is invalid \n";
    if (user.length > max_lenght_user)
        return "User name must be less than or equal to" + max_lenght_user + "letters\n";

    return "";
}

function validateAge(age) {
    var re = new RegExp("^[\d]+[\d]*$");
    if (!re.test(age))
        return "Age is invalid \n";
    var age_number = parseInt(age);
    if (age_number > max_lenght_age || age_number < 0)
        return "Age must be beetween from 0 to " + max_lenght_age + "\n";

    return "";
}


function validateSex(sex) {
    if (sex.length === 0)
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


function validateTel(tel) {
    console.log("tel " + tel);
    var regexp = "^(?:\\d{11}|\\d{3}\-\\d{4}\-\\d{4}|\\d{3} \\d{4} \\d{4})$";
    var re = new RegExp(regexp);
    if (!re.test(tel))
        return "Tel is invalid \n";
    return "";
}


//  YYYY/MM/DD
function validateDate(date) {
    console.log("date " + date);

    var m1 = moment(date);

    if (m1.isValid()) {
        return "";
    } else {
        return "Date is invalid \n";
    }
}


function validateAvatar(file) {
//    console.log("avatar " + avatar);
    if (!file) {
        return "Avatar is null \n";
    }

    var types = ['text/plain', 'image/png'];
    console.log("file.type " + file[0].type);
    console.log("file.size " + file[0].size);
    if (!types.includes(file[0].type)) {
        return "Avatar must be text or png file";
    }
    if (file[0].size >= max_capital) {
        return "Avatar capital must be less than or equal to " + max_capital + "byte";
    }


    
     return "";

}